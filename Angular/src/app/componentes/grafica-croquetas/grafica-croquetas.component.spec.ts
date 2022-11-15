import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCroquetasComponent } from './grafica-croquetas.component';

describe('GraficaCroquetasComponent', () => {
  let component: GraficaCroquetasComponent;
  let fixture: ComponentFixture<GraficaCroquetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaCroquetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCroquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
