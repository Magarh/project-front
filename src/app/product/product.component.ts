import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products;

  constructor(public catalogueService: CatalogueService) { }

  ngOnInit(){
    this.getProducts();
  }
  getProducts() {
    this.catalogueService.getResource("/products/search/selectedProducts")
    .subscribe(data=>{
      this.products=data;
    }, error=>{
      console.log(console.error);
    })
  }

}
