import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-module',
  templateUrl: './new-module.component.html',
  styleUrls: ['./new-module.component.scss']
})
export class NewModuleComponent implements OnInit {

  public viewImage: number;
  constructor() { 
    this.viewImage = 1;
  }

  ngOnInit() {
  }

}
