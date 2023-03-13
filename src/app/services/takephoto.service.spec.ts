import { TestBed } from '@angular/core/testing';

import { TakephotoService } from './takephoto.service';

describe('TakephotoService', () => {
  let service: TakephotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakephotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
