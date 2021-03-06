/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditMajorComponent } from './edit-major.component';

describe('EditMajorComponent', () => {
  let component: EditMajorComponent;
  let fixture: ComponentFixture<EditMajorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMajorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMajorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
