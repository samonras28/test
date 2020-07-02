import { Component, OnInit } from '@angular/core';
import { ProjectDemo }  from 'src/app/ProjectDemo';
import { ProjectData }  from 'src/app/ProjectData';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { ColorData } from 'src/app/ColorData';
import { timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { countUpTimerConfigModel, timerTexts,CountupTimerService  } from 'ngx-timer';    
declare  var jQuery:  any;
@Component({
  selector: 'app-uidemo',
  templateUrl: './uidemo.component.html',
  styleUrls: ['./uidemo.component.css']
})
export class UidemoComponent implements OnInit {
  testConfig: countUpTimerConfigModel;
  constructor(private countupTimerService: CountupTimerService) { }
  projects: ProjectDemo[] = [];
  red:ProjectDemo[] = [];
  projectsColorRed: ProjectData[] = [];
  projectsColorGreen: ProjectData[] = [];
  projectsColorYellow: ProjectData[] = [];
  projectsColorRedB: ProjectData[] = [];
  projectsColorGreenB: ProjectData[] = [];
  projectsColorYellowB: ProjectData[] = [];
  connectedTo = [];
  public basicContent: string;
  public showView = false;
  isDrag: boolean = false;
  ngOnInit() {
    this.testConfig = new countUpTimerConfigModel();
    this.testConfig.timerClass  = 'test_Timer_class';
    this.testConfig.timerTexts = new timerTexts();
    this.testConfig.timerTexts.hourText = "HH";
    this.testConfig.timerTexts.minuteText = "MM";
    this.testConfig.timerTexts.secondsText = "SS";
    this.startTimer();
    //this.countupTimerService.startTimer();
    this.projects = [
      {group:"A",
      listProjectData: [
        {name:"Samonras",
        idMember:"M01",
        task:"Follow up K.TheePhee1",
        date:"20/06/2020",
        priority:"Hight",
        color:"red"},
        {name:"Jenjira",
        idMember:"M02",
        task:"Follow up to phayu1",
        date:"22/06/2020",
        priority:"Hight",
        color:"red"},
        {name:"Jena",
        idMember:"M03",
        task:"Call K.Saifah1",
        date:"23/06/2020",
        priority:"Hight",
        color:"green"},
        {name:"Samonras",
        idMember:"M01",
        task:"Follow up K.TheePheeg1",
        date:"20/06/2020",
        priority:"Hight",
        color:"green"},
        {name:"Jenjira",
        idMember:"M02",
        task:"Follow up to phayug1",
        date:"22/06/2020",
        priority:"Hight",
        color:"yellow"},
        {name:"Jena",
        idMember:"M03",
        task:"Call K.Saifahg1",
        date:"23/06/2020",
        priority:"Hight" ,
        color:"red"}]
      },
      {group:"B",
      listProjectData: [
        {name:"Samonras",
        idMember:"M01",
        task:"Follow up K.TheePhee",
        date:"20/06/2020",
        priority:"Hight",
        color:"green"},
        {name:"Jenjira",
        idMember:"M02",
        task:"Follow up to phayu",
        date:"22/06/2020",
        priority:"Hight",
        color:"yellow"},
        {name:"Jena",
        idMember:"M03",
        task:"Call K.Saifah",
        date:"23/06/2020",
        priority:"Hight",
        color:"green"},
        {name:"Samonras",
        idMember:"M01",
        task:"Follow up K.TheePheeg",
        date:"20/06/2020",
        priority:"Hight",
        color:"red"},
        {name:"Jenjira",
        idMember:"M02",
        task:"Follow up to phayug",
        date:"22/06/2020",
        priority:"Hight",
        color:"yellow"},
        {name:"Jena",
        idMember:"M03",
        task:"Call K.Saifahg",
        date:"23/06/2020",
        priority:"Hight" ,
        color:"green"}]
    }]
    this.connectedTo = ['listOneA','listTwoA','listThreeA','listOneB','listTwoB','listThreeB'];
    this.basicContent = '<p>Hello...</p>';
    this.projects.forEach(element => {      
      element.listProjectData.forEach(res => {
        if(element.group == "A"){
          if(res.color === "red"){
          this.projectsColorRed.push(res);
          }else if(res.color === "green"){
            this.projectsColorGreen.push(res);
            element.id = element.group+"2";  
          }else if(res.color === "yellow"){
            element.id = element.group+"3";   
            this.projectsColorYellow.push(res);
          }
        }else{
          if(res.color === "red"){
            element.id = element.group+"1";   
            this.projectsColorRedB.push(res);
            }else if(res.color === "green"){
              this.projectsColorGreenB.push(res);
              element.id = element.group+"2";  
            }else if(res.color === "yellow"){
              element.id = element.group+"3";   
              this.projectsColorYellowB.push(res);
            }
        }
      
     });
    });
    // console.log(this.projectsColorRed);
    // console.log(this.projectsColorGreen);
    // console.log(this.projectsColorYellow);
    // console.log(this.projectsColorRedB);
    // console.log(this.projectsColorGreenB);
    // console.log( this.projectsColorYellowB);
  }
  addToList(event: CdkDragDrop<string[]>) {
    //this.showView = false;
    if (event.previousContainer === event.container) {
        moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    // console.log(this.projectsColorRed);
    // console.log(this.projectsColorGreen);
    // console.log(this.projectsColorYellow);
    // console.log(this.projectsColorRedB);
    // console.log(this.projectsColorGreenB);
    // console.log( this.projectsColorYellowB);
  }
  pauseTimer = () =>{
    this.countupTimerService.pauseTimer();
  }

  startTimer = () =>{
    this.stopTimer();
    this.countupTimerService.startTimer();
  }
  
  startTimerGT  = ()=>{
    this.stopTimer();
    let cdate = new Date();
    cdate.setHours(cdate.getHours() -  2);
    this.countupTimerService.startTimer(cdate);
  }
  stopTimer = () =>{
    this.countupTimerService.stopTimer();
  }
  onDragOver($event) {
    this.showView = false;
    console.log($event);
  }
  test(){
    var x = document.getElementsByClassName("cdk-drop");
    console.log(x);
  }
}
