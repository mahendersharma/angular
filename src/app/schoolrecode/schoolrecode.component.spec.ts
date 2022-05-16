import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolrecodeComponent } from './schoolrecode.component';

describe('SchoolrecodeComponent', () => {
  let component: SchoolrecodeComponent;
  let fixture: ComponentFixture<SchoolrecodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolrecodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolrecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
