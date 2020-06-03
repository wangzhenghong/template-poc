import landingHtml from './landing/landing.component.html';
import landingScss from './landing/landing.component.scss';
import formHtml from './form/form.component.html';
import formScss from './form/form.component.scss';

export interface CateItem {
  html: (name: string) => {};
  scss: (name: string) => {};
}

export interface Categories {
  landing: CateItem;
  form: CateItem;
}

const categories: Categories = {
  landing: {
    html: landingHtml,
    scss: landingScss
  },
  form: {
    html: formHtml,
    scss: formScss
  }
};

export default categories;
