import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpartneracceuilComponent } from './listpartneracceuil.component';

describe('ListpartneracceuilComponent', () => {
  let component: ListpartneracceuilComponent;
  let fixture: ComponentFixture<ListpartneracceuilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpartneracceuilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpartneracceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
