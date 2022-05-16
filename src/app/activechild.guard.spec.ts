import { TestBed } from '@angular/core/testing';

import { ActivechildGuard } from './activechild.guard';

describe('ActivechildGuard', () => {
  let guard: ActivechildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivechildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
