import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsDeatilsComponent } from './parents-deatils.component';

describe('ParentsDeatilsComponent', () => {
  let component: ParentsDeatilsComponent;
  let fixture: ComponentFixture<ParentsDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentsDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
