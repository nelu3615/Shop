import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  @Input() image: string;
  @Input() nom: string

  constructor() { }

  ngOnInit(): void {
  }

}
