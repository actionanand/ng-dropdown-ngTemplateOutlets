import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPopoverComponent } from './app-popover.component';

describe('AppPopoverComponent', () => {
  let component: AppPopoverComponent;
  let fixture: ComponentFixture<AppPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
