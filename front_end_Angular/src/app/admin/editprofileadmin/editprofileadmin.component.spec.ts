import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofileadminComponent } from './editprofileadmin.component';

describe('EditprofileadminComponent', () => {
  let component: EditprofileadminComponent;
  let fixture: ComponentFixture<EditprofileadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofileadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofileadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
