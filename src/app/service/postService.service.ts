import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { PostModel } from '../model/postModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  baseUrl = environment.apiUrl;
  //private myUrl = 'http://localhost:5000';
  constructor(private http:Http) { }

  getPostService(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts").map((res)=>res.json());
  }
  getPostServiceDB(){
    return this.http.get(this.baseUrl+"Post/GetPost").map((res)=>res.json());
  }
  // updatePost(id){//localhost:5000/Post/Update
  //   return   this.http.get("/Post/Update",id).map((res)=>res.json());;
  //   }
  deletePost(userId){
    console.log("deletePost service= "+userId);
    return  this.http.get(this.baseUrl+"Post/Remove?userId="+userId).map((res)=>res.json());
  }
  updatePost(model:PostModel){
   
    console.log("updatePost= "+model.title,+" / "+model.id+" / "+model.userId+" / "+model.body);
   
    return this.http.post(this.baseUrl+ 'Post/Update',model).map((res)=>res.json());
  }
  addPost(model:PostModel){
    return this.http.post(this.baseUrl+ 'Post/AddPost',model).map((res)=>res.json());
  }

}



