import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any[];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.categories = this.shopService.categories
  }

}
