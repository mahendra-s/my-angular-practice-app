import { TestBed } from '@angular/core/testing';

import { MyDateServiceService } from './my-date-service.service';

describe('MyDateServiceService', () => {
  let service: MyDateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
