import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppApplicationComponent } from './app-application.component';

describe('AppApplicationComponent', () => {
  let component: AppApplicationComponent;
  let fixture: ComponentFixture<AppApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
