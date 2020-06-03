import {
  Rule,
  Tree,
  SchematicsException,
  apply,
  applyTemplates,
  url,
  move,
  chain,
  mergeWith
} from '@angular-devkit/schematics';

import { buttonCpt as CptOptions } from './schema.d';
import { experimental, strings, normalize } from '@angular-devkit/core';
import categories, { CateItem } from './categories';

function matchCategory(cate: string): CateItem {
  switch (cate) {
    case 'landing':
      return categories.landing;
    case 'form':
      return categories.form;
    default:
      return categories.landing;
  }
}

// Just return the tree
export function build(options: CptOptions): Rule {
  const cateHtml = matchCategory(options.category as string).html;
  const cateScss = matchCategory(options.category as string).scss;
  return (tree: Tree) => {
    const workspaceConfig = tree.read('/angular.json');
    if (!workspaceConfig) {
      throw new SchematicsException(
        'Could not find Angular workspace configuration'
      );
    }

    // convert workspace to string
    const workspaceContent = workspaceConfig.toString();

    // parse workspace string into JSON object
    const workspace: experimental.workspace.WorkspaceSchema = JSON.parse(
      workspaceContent
    );
    if (!options.project) {
      options.project = workspace.defaultProject;
    }

    const projectName = options.project as string;

    const project = workspace.projects[projectName];

    const projectType = project.projectType === 'application' ? 'app' : 'lib';

    if (options.path === undefined) {
      options.path = `${project.sourceRoot}/${projectType}`;
    }

    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: options.name,
        category: options.category,
        cateHtml,
        cateScss
      }),
      move(normalize(options.path as string))
    ]);
    return chain([mergeWith(templateSource)]);
  };
}
