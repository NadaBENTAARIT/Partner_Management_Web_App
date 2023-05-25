import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {EditprofilepartnerComponentt} from './editprofilepartner.component';

describe('EditprofilepartnerComponent', () => {
  let component: EditprofilepartnerComponentt;
  let fixture: ComponentFixture<EditprofilepartnerComponentt>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofilepartnerComponentt ]
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofilepartnerComponentt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
