import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosTrabajoComponent } from './servicios-trabajo.component';

describe('ServiciosTrabajoComponent', () => {
  let component: ServiciosTrabajoComponent;
  let fixture: ComponentFixture<ServiciosTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
