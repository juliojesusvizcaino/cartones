import { TestBed } from '@angular/core/testing';

import { LorcanaApiService } from './lorcana-api.service';

describe('LorcanaApiService', () => {
  let service: LorcanaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LorcanaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
