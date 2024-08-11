import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPintarComponent } from './panel-pintar.component';

describe('PanelPintarComponent', () => {
  let component: PanelPintarComponent;
  let fixture: ComponentFixture<PanelPintarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelPintarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelPintarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
