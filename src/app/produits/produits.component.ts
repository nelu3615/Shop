import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits: any[];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.produits = this.shopService.produits;
    console.log('produits', this.produits);
    
  }

  addFavorisOutput(st:string): void {
    this.shopService.addFavorisOutput(st);
  }

  removeFavorisOutput(st:string): void {
    this.shopService.removeFavorisOutput(st);
  }

}
