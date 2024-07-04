import {TestBed} from '@angular/core/testing';

import {subTask} from './sub-task.service';

describe('TaskService', () => {
  let service: subTask;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(subTask);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
