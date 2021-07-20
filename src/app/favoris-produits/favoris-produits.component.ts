import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-favoris-produits',
  templateUrl: './favoris-produits.component.html',
  styleUrls: ['./favoris-produits.component.css']
})
export class FavorisProduitsComponent implements OnInit {
  produitsFavoris: any[]
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.produitsFavoris = this.shopService.favorisProduits
  }

}
