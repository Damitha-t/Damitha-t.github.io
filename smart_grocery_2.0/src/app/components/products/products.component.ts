import { Interpolation } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor() {}

  ngOnInit() : void {
  }

  
  public showAddProduct : boolean = false;
  public rowIndex : number = 0;
  public isRowSelected: boolean = true;

  public products = [{
    'productId' : '001',
    'productName' : 'White Basmathi Rice',
    'createdDate' : 'Jan 29, 2020',
    'unitPrice' : '400',
    'quantity' : 100,
    'productDescription' : 'White Basmathi Rice imported from Pakistan, Kaduruwanage Damitha Thinushka Gamage'
  },
  {
    'productId' : '002',
    'productName' : 'Flour',
    'createdDate' : 'Jan 29, 2020',
    'unitPrice' : '190',
    'quantity' : 50,
    'productDescription' : 'Super fine whole grain general purpose flour'
  },
  {
    'productId' : '003',
    'productName' : 'Sugar',
    'createdDate' : 'Jan 29, 2020',
    'unitPrice' : '200',
    'quantity' : 1200,
    'productDescription' : 'White sugar manufactured by Pelawatte factory'
  },
  {
    'productId' : '004',
    'productName' : 'Dhal',
    'createdDate' : 'Jan 29, 2020',
    'unitPrice' : '200',
    'quantity' : 10,
    'productDescription' : 'Imported mysoor dhal from India'
  }
]

public selectProduct(selectedRow: number){
  this.isRowSelected = false;
  this.rowIndex = selectedRow;
}

public showAddProducts() {
  this.showAddProduct = true;
}

public hideAddProducts() {
  this.showAddProduct = false;
}


}


