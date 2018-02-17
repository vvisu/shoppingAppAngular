import { Component, OnInit } from '@angular/core';
import { ItemDetailComponent } from '../items/item.model';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  items: ItemDetailComponent[];

  firstName: string;
  lastName: string;
  age: number;

  constructor() {
    


  }

  ngOnInit() {




    this.firstName = "Ram";
    this.lastName = "Raj";
    this.age = 23;




    this.items = [{
      itemName: 'Milk',
      itemPrice: '34.43',
      itemQty: 1
    },
    {
      itemName: 'Oil',
      itemPrice: '44.43',
      itemQty: 1
    }];
  }

}
