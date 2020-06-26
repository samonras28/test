import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/user';
import { StringifyOptions } from 'querystring';
import { PostModel } from 'src/app/model/postModel';

@Component({
  selector: 'app-modalEditPost',
  templateUrl: './modalEditPost.component.html',
  styleUrls: ['./modalEditPost.component.css']
})
export class ModalEditPostComponent implements OnInit {
  @Input() isEdit;
  @Input() id;
  @Input() userId;
  @Input() title;
  @Input() body;
  @Output() modelOut =  new EventEmitter<PostModel>(); 
  @Output() isdelete =  new EventEmitter<boolean>(); 
  public nameModal:any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
   console.log("ModalEditPost= "+ this.userId);
   this.nameModal = this.isEdit;
  }
  addPost(userId,title,body){    
    this.userId = userId;
    this.title =title;
    this.body = body;
    var model = {
      id:0,
      userId:parseInt(userId,10), 
      title:title,
      body:body
    }
    console.log("model set= "+model);
    this.modelOut.emit(model);
    this.activeModal.close();
    return false;
  }
  editPost(userId,title,body){
    this.userId = userId;
    this.title =title;
    this.body = body;
    var model = {
      id:this.id,
      userId:parseInt(userId,10), 
      title:title,
      body:body
    }
    console.log("model set= "+model);
    this.modelOut.emit(model);
    this.activeModal.close();
    return false;
  }

  deletePost(){
    this.isdelete.emit(true);
    this.activeModal.close();
    return false;
  }
}
