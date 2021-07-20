import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisProduitsComponent } from './favoris-produits.component';

describe('FavorisProduitsComponent', () => {
  let component: FavorisProduitsComponent;
  let fixture: ComponentFixture<FavorisProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavorisProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorisProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
