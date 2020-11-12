import { TestBed } from '@angular/core/testing';

import { RegisterListService } from './register-list.service';

describe('RegisterListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterListService = TestBed.get(RegisterListService);
    expect(service).toBeTruthy();
  });
});
