import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTractorComponent } from './client-tractor.component';

describe('ClientTractorComponent', () => {
  let component: ClientTractorComponent;
  let fixture: ComponentFixture<ClientTractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
