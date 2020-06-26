import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditComponent } from '../modalEdit/modalEdit.component';
import { User } from 'src/app/model/user';
import { PostServiceService } from 'src/app/service/postService.service';
import { isNumeric } from 'rxjs/util/isNumeric';
import { ModalEditPostComponent } from '../modalEditPost/modalEditPost.component';
import { PostModel } from 'src/app/model/postModel';
import { PdfMakeWrapper ,Txt,Canvas,Img } from 'pdfmake-wrapper';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import html2canvas from 'html2canvas';
export class FormInput {
  email: any;
  password: any;
  confirmPassword: any;
  requiredInput: any;
  url: any;
  phone: any;
  cmbGear: any;
  address: any;
  file: any;
  switcher: any;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public userProfiles:User ;

  //Variable of Profile User
  public nameUser:string;
  public gender:string;
  public genderBoo:boolean;
  public birthday:string;
  public martailStatus:string;
  public Location:string;
  public oldUser:number;
  public provinceUser:string;
  public stateUser:string;
  public taskInProgess:number;
  public taskDone:number;
  public taskTotal:number;
  public taskInProPercent:number;
  public taskDonePercent:number;
  //Phone and validate
  formInput: FormInput;
  form: any;
  public isSubmit: boolean;
  public phones:any[];

  //Edit Profile
  public activeTab: string;
  public editProfile: boolean;
  public editProfileIcon: string;

  //Data in Table
  public dataTable = [
    {id: 1, name:'Superman',position:'System Architect'},
    {id: 2, name:'Batman',position:'Support Lead'},
    {id: 5, name:'BatGirl',position:'Software Engineer'},
    {id: 3, name:'Robin',position:'Senior Marketing Designer'},
    {id: 4, name:'Flash',position:'Senior Javascript Developer'}
  ];

  //service
  public postList:Post[];
  public postListDB:PostModel[];

  constructor(private modalService: NgbModal,private postService:PostServiceService) {
    this.activeTab = 'profile';
    this.editProfile = false;
    this.editProfileIcon = 'icon-edit';
    this.isSubmit = false;
  }
  ngOnInit() {

    this.nameUser = "Samonras Sukjantpon";
    this.gender = "Female";
    this.genderBoo = true;
    this.birthday = "28-09-1995";
    this.martailStatus = "Unmarried";
    this.Location = "4289 Calvin Street Baltimore, near MD Tower Maryland, Maryland (21201)";
    this.oldUser = 25;
    this.stateUser = "Jatujak";
    this.provinceUser = "Bongkok";
    this.phones = ["0928121334","0232324032"];
    this.taskInProgess = 3;
    this.taskDone = 7;
    this.taskTotal = 10;
    this.taskInProPercent = (this.taskInProgess/this.taskTotal)*100;
    this.taskDonePercent = (this.taskDone/this.taskTotal)*100;
    //validate
    this.formInput = {
      email: '',
      password: '',
      confirmPassword: '',
      requiredInput: '',
      url: '',
      phone: '',
      cmbGear: '',
      address: '',
      file: '',
      switcher: ''
    };

    //service
    // this.postService.getPostService().subscribe((res)=>{
    //   this.postList = res;
    // })
    //service
    this.postService.getPostServiceDB().subscribe((res)=>{
      this.postListDB = res;
    })
  }

  addPhone(value){
    if (value.length == 10 && isNumeric(value)  ){
       this.phones.unshift(value);
    }else{
      this.formInput.phone.valid = false;
    }

    return false;
  }
  editName(nameUser,birthday,gender,marrie,location){
    this.nameUser = nameUser;
    if(birthday != ""){
      this.birthday = birthday;
    }

    this.editProfile = false;
    this.gender = gender;
    this.martailStatus = marrie;
    this.Location = location;
    return false;
  }
  addPost(){
    const modal = this.modalService.open(ModalEditPostComponent, { backdrop: 'static', keyboard: false, size: 'lg'});
    modal.componentInstance.isEdit = "Add";
    modal.componentInstance.modelOut.subscribe((res)=>{
      console.log("modelOut= "+ res.title+"/= "+ res.userId+"/= "+ res.body+"/= "+ res.id);
      this.postService.addPost(res).subscribe((res)=>{
        this.postListDB.unshift(res);
      })

    });
  }
  editPost(model:PostModel){

    console.log("userId= "+model.userId+" title= "+model.title+" body= "+model.body);
    const modal = this.modalService.open(ModalEditPostComponent, { backdrop: 'static', keyboard: false, size: 'lg'});
    modal.componentInstance.id = model.id;
    modal.componentInstance.userId = model.userId;
    modal.componentInstance.title = model.title;
    modal.componentInstance.body = model.body;
    modal.componentInstance.isEdit = "Edit";
    modal.componentInstance.modelOut.subscribe((res)=>{
      console.log("modelOut= "+ res.title);
      this.postListDB.forEach((element,index) => {
        if(element.id === res.id){
          if(res.userId != "" && !isNaN(res.userId) ){
            element.userId = res.userId;
          }else{
            res.id = model.id;
            res.userId = model.userId;
          }
          if(res.title!=""){
            element.title = res.title;

          }else{
            res.title = element.title;
          }
          if(res.body != ""){
            element.body = res.body;
          }else{
            res.body = element.body;
          }
          console.log("before update= "+res.id+"/"+res.userId+"/"+res.title+"/"+res.body);
          this.postService.updatePost(res).subscribe((response)=>{

          });
        }
      });
    });

    return false;
  }
  deletePost(userId){
    const modal = this.modalService.open(ModalEditPostComponent, { backdrop: 'static', keyboard: false, size: 'lg'});
    modal.componentInstance.userId = userId;
    modal.componentInstance.isEdit = "Delete";
    modal.componentInstance.isdelete.subscribe(($s)=> {
      console.log("s= "+$s );
      if($s == true ){
        console.log("deletePost= "+userId);
        this.postListDB.forEach((element ,index)=> {
      if(element.userId === userId){

        this.postService.deletePost(userId).subscribe((res)=>{
          this.postListDB = res;
        });
         this.postListDB.splice(index,1);
      }
    });
      }
    })



  }

  editNameTable(nameUser,positionUser){
    console.log("positionUser = "+positionUser);
    const modal = this.modalService.open(ModalEditComponent, { backdrop: 'static', keyboard: false, size: 'sm'});
    modal.componentInstance.nameUser = nameUser;
    modal.componentInstance.positionUser = positionUser;
    modal.componentInstance.nameOut.subscribe(($e) => {
    console.log("$e ="+$e+"=");
    if($e != "" ){
      this.dataTable.forEach((element,index )=> {
          if(element.name === nameUser){
            element.name = $e;
            console.log("element.name "+ element.name );
          }
        });

    }
    })
    modal.componentInstance.positionOut.subscribe(($s) => {
    if($s != "" ){
      this.dataTable.forEach((element,index )=> {
        if(element.position === positionUser){
          element.position = $s;
          console.log("element.position "+ element.position );
        }
      });
    }
    })
    return false;
  }

  deleteNameTable(name,position){
    this.dataTable.forEach((element,index) => {
      if(element.name == name || element.position==position){
        this.dataTable.splice(index,1);
      }

    });
  }
  deletePhone(phone){
    this.phones.forEach((element,index) => {
      if(element == phone){
        this.phones.splice(index,1);
      }
    });
  }

  save(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    }
  }

  getName(nameOut){
    this.nameUser = nameOut;
    console.log("getName = "+nameOut);
  }

  generatePDF() {
  //   html2canvas(document.getElementById('table'), {
  //     onrendered: function (canvas) {
  //         var data = canvas.toDataURL();
  //         var docDefinition = {
  //             content: [{
  //                 image: data,
  //                 width: 500,
  //             }]
  //         };
  //         pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
  //     }
  // });
  // const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
  // pdfMake.createPdf(documentDefinition).open();

    var element = document.getElementById('table');
    html2canvas(document.body,{allowTaint:true}).then(function(canvas){
      var ImageData = canvas.toDataURL("image/png");
      console.log(ImageData);
      test(ImageData);
    }

    // html2canvas(element,{allowTaint:true}).then((canvas)=>{
    //   console.log(canvas);
    //   const pdf = new PdfMakeWrapper();   
    //   var ImageData = canvas.toDataURL("image/png");
      //document.write('<img src="'+ImageData+'"/>');
    //  console.log("document"+document);
    //   var docDefinition = {
    //     content: [{
    //         image: ImageData,
    //         width: 500,
    //     }]
    // };
    // pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
      // console.log(ImageData);
      // test(ImageData);

    )
    async function test(ImageData) {
      const pdf = new PdfMakeWrapper();      
      pdf.add( await new Img(ImageData).build() );
      //pdf.add( await new Img('http://localhost:4200/assets/images/user/img-avatar-1.jpg').build() );
      pdf.create().open();
    }
    // pdf.add(
    //   new Txt(this.nameUser).bold().italics().end
    // );
    // pdf.create().open();
  }
  convert() {
    var element = document.getElementById('table');
    html2canvas(element).then(function(canvas) {
        // Convert the canvas to blob
        canvas.toBlob(function(blob){
            // To download directly on browser default 'downloads' location
            let link = document.createElement("a");
            link.download = "image.png";
            link.href = URL.createObjectURL(blob);
            link.click();

            // To save manually somewhere in file explorer
            //window.saveAs(blob, 'image.png');

        },'image/png');
    });
  }

}


interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;

}