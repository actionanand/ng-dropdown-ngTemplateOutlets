import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSharkComponent } from './client-shark.component';

describe('ClientSharkComponent', () => {
  let component: ClientSharkComponent;
  let fixture: ComponentFixture<ClientSharkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSharkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSharkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
