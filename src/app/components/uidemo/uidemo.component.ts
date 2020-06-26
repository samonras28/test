import { Component, OnInit } from '@angular/core';
import { ProjectDemo }  from 'src/app/ProjectDemo';
import { ProjectData }  from 'src/app/ProjectData';

@Component({
  selector: 'app-uidemo',
  templateUrl: './uidemo.component.html',
  styleUrls: ['./uidemo.component.css']
})
export class UidemoComponent implements OnInit {

  constructor() { }
  projects: ProjectDemo[] = [];
  ngOnInit() {
    this.projects = [
      {group:"A",color:
      [{color:"red",
      listProjectData: [
        {name:"Samonras",
        idMember:"M01",
        task:"Follow up K.TheePhee",
        date:"20/06/2020",
        priority:"Hight"},
        {name:"Jenjira",
        idMember:"M02",
        task:"Follow up to phayu",
        date:"22/06/2020",
        priority:"Hight"},
        {name:"Jena",
        idMember:"M03",
        task:"Call K.Saifah",
        date:"23/06/2020",
        priority:"Hight"}]
      },
      {color:"green",
      listProjectData: [
        {name:"Samonras",
        idMember:"M01",
        task:"Follow up K.TheePhee",
        date:"20/06/2020",
        priority:"Hight"},
        {name:"Jenjira",
        idMember:"M02",
        task:"Follow up to phayu",
        date:"22/06/2020",
        priority:"Hight"},
        {name:"Jena",
        idMember:"M03",
        task:"Call K.Saifah",
        date:"23/06/2020",
        priority:"Hight"}]
      }]},
      {group:"B",color:
      [{color:"green",
      listProjectData: [
        {name:"Samonras",
        idMember:"M01",
        task:"Follow up K.TheePhee",
        date:"20/06/2020",
        priority:"Hight"},
        {name:"Jenjira",
        idMember:"M02",
        task:"Follow up to phayu",
        date:"22/06/2020",
        priority:"Hight"},
        {name:"Jena",
        idMember:"M03",
        task:"Call K.Saifah",
        date:"23/06/2020",
        priority:"Hight"}]
      },
      {color:"red",
      listProjectData: [
        {name:"Samonras",
        idMember:"M01",
        task:"Follow up K.TheePhee",
        date:"20/06/2020",
        priority:"Hight"},
        {name:"Jenjira",
        idMember:"M02",
        task:"Follow up to phayu",
        date:"22/06/2020",
        priority:"Hight"},
        {name:"Jena",
        idMember:"M03",
        task:"Call K.Saifah",
        date:"23/06/2020",
        priority:"Hight"}]
      },
      {color:"yellow",
      listProjectData: [
        {name:"Samonras",
        idMember:"M01",
        task:"Follow up K.TheePhee",
        date:"20/06/2020",
        priority:"Hight"},
        {name:"Jenjira",
        idMember:"M02",
        task:"Follow up to phayu",
        date:"22/06/2020",
        priority:"Hight"},
        {name:"Jena",
        idMember:"M03",
        task:"Call K.Saifah",
        date:"23/06/2020",
        priority:"Hight"}]
      }]}
    ]

  }
  // {group:"B",color:"green",listProjectData: [{name:"Volorant",idMember:"M01",task:"Follow up K.TheePhee",date:"12/06/2020",priority:"Hight",colorData:"green"},{name:"Somchai",idMember:"M02",task:"Call Store",date:"17/06/2020",priority:"Hight",colorData:"green"},{name:"Worada",idMember:"M03",task:"Follow up to phayu",date:"22/06/2020",priority:"Hight",colorData:"red"},{name:"Alex",idMember:"M04",task:"Follow up to phayu",date:"26/06/2020",priority:"Hight",colorData:"red"}]},
  // {group:"C",color:"yellow",listProjectData: [{name:"Greenhall",idMember:"M01",task:"Follow up K.TheePhee",date:"15/06/2020",priority:"Hight",colorData:"yellow"},{name:"Jaidee",idMember:"M02",task:"Follow up to phayu",date:"16/06/2020",priority:"Hight",colorData:"yellow"},{name:"XXX",idMember:"M06",task:"Follow up to phayu",date:"18/06/2020",priority:"Hight",colorData:"red"}]},
}
