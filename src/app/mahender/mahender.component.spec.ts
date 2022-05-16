import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahenderComponent } from './mahender.component';

describe('MahenderComponent', () => {
  let component: MahenderComponent;
  let fixture: ComponentFixture<MahenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
