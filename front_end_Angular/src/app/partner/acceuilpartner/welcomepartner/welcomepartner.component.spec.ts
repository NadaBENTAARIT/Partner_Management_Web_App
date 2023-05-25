import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomepartnerComponent } from './welcomepartner.component';

describe('WelcomepartnerComponent', () => {
  let component: WelcomepartnerComponent;
  let fixture: ComponentFixture<WelcomepartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomepartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomepartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
