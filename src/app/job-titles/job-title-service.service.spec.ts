/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JobTitleServiceService } from './job-title-service.service';

describe('Service: JobTitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobTitleServiceService]
    });
  });

  it('should ...', inject([JobTitleServiceService], (service: JobTitleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
