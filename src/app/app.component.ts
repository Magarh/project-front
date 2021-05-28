import { Component, OnInit } from '@angular/core';
import { CatalogueService } from './catalogue.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories;

  constructor(private catalogueService:CatalogueService){

  }

  ngOnInit(){
    this.getCategories();
  }

  getCategories() {
    this.catalogueService.getResource("/categories")
    .subscribe(data=>{
      this.categories=data;
    },error=>{
      console.log(error);
    })
  }
}
