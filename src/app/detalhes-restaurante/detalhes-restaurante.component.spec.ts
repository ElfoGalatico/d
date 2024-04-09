import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesRestauranteComponent } from './detalhes-restaurante.component';

describe('DetalhesRestauranteComponent', () => {
  let component: DetalhesRestauranteComponent;
  let fixture: ComponentFixture<DetalhesRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesRestauranteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
