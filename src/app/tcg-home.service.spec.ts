import { TestBed } from '@angular/core/testing';

import { TcgHomeService } from './tcg-home.service';

describe('TcgHomeService', () => {
  let service: TcgHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcgHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
