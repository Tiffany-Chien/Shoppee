import { TestBed } from '@angular/core/testing';

import { ShoppeeFormService } from './shoppee-form.service';

describe('ShoppeeFormService', () => {
  let service: ShoppeeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppeeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
