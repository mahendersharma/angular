import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmitComponent } from './amit.component';

describe('AmitComponent', () => {
  let component: AmitComponent;
  let fixture: ComponentFixture<AmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
