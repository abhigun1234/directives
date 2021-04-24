import { TestBed } from '@angular/core/testing';

import { MyproductService } from './myproduct.service';

describe('MyproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyproductService = TestBed.get(MyproductService);
    expect(service).toBeTruthy();
  });
});
