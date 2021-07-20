import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  @Input() titre: string;
  @Input() favoris: boolean;
  @Input() description: string;
  @Input() image: string;
  @Input() prix: number;
  @Input() index: number;

  @Output() onClickLike = new EventEmitter()
  @Output() onClickUnlike = new EventEmitter()

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
  }

  addFavoris() {
    this.shopService.addFavoris(this.index);
    console.log(this.index);
  
  }

  removeFavoris() {
    this.shopService.removeFavoris(this.index);
  }
}
