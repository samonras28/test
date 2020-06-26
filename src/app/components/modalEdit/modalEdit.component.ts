import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/user';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-modalEdit',
  templateUrl: './modalEdit.component.html',
  styleUrls: ['./modalEdit.component.css']
})
export class ModalEditComponent implements OnInit {
  @Input() nameUser;
  @Input() positionUser;
  @Output() nameOut =  new EventEmitter<string>(); 
  @Output() positionOut =  new EventEmitter<string>(); 
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  editForm(name,position){
    this.nameUser = name;  
    this.positionUser = position;
    this.nameOut.emit(name);
    this.positionOut.emit(position);
    console.log("Inmodal = " +name + "posotion "+position);
    this.activeModal.close();
    return false;
  }
}
