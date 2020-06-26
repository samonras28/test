import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subProfile',
  templateUrl: './subProfile.component.html',
  styleUrls: ['./subProfile.component.css']
})
export class SubProfileComponent implements OnInit {
  @Input() name:string;
  @Output() newName = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  setName(nameUser){
    this.name = nameUser;
    this.newName.emit(nameUser);
    console.log("setName return : "+this.newName);
    return false;
  }

}
