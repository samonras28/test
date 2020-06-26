/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UidemoComponent } from './uidemo.component';

describe('UidemoComponent', () => {
  let component: UidemoComponent;
  let fixture: ComponentFixture<UidemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UidemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UidemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
