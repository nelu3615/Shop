import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todo: any;
  constructor(private rest: RestService) { }

  getTodo() {
    this.rest.getResource('/todos')
              .subscribe(data => {
                this.todo = data;
              }), err => {
                console.log(err);
              }
  }

  ngOnInit(): void {
    this.getTodo();
  }

}
