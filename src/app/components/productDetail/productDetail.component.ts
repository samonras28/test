import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productDetail',
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.css']
})
export class ProductDetailComponent implements OnInit {
public viewImage: number;
  constructor() { 
    this.viewImage = 1;
  }

  ngOnInit() {
  }

}
