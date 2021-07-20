import { Component, Input, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  produitsFavoris: any[];
  @Input() index: number;
  @Input() titre: string;
  @Input() image: string;
  @Input() prix: string;

  constructor(private shopService: ShopService) { }

  removeFavoris() {
    this.shopService.removeFavoris(this.index);
  }

  ngOnInit(): void {
    this.produitsFavoris = this.shopService.favorisProduits;
    console.log('favoris', this.produitsFavoris);
    
  }



}
