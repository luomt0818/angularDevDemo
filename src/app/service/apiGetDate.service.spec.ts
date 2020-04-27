/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiGetDateService } from './apiGetDate.service';

describe('Service: ApiGetDate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiGetDateService]
    });
  });

  it('should ...', inject([ApiGetDateService], (service: ApiGetDateService) => {
    expect(service).toBeTruthy();
  }));
});
