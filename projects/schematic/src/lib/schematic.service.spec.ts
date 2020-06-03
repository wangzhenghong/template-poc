import { TestBed } from '@angular/core/testing';

import { SchematicService } from './schematic.service';

describe('SchematicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchematicService = TestBed.get(SchematicService);
    expect(service).toBeTruthy();
  });
});
