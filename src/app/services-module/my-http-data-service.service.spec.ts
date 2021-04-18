import { TestBed } from '@angular/core/testing';

import { MyHttpDataServiceService } from './my-http-data-service.service';

describe('MyHttpDataServiceService', () => {
  let service: MyHttpDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHttpDataServiceService);
  });

  it('should be created', () => {
    pending('Inject HttpClient');
    expect(service).toBeTruthy();
  });
});
