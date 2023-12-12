import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from 'src/app/models/Hero';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  // 1) Define Model
  // 2) Use selector in app.component.ts <app-hero></app-hero>
  // 3) Define array of Type Hero - hardcode data version 1
  // 4) Define CRUD (methods)
  // 5) Write HTML line with ngfor that loops through array
  // 6) version 2 hardcoded (in the end to a service / API)
  // 7) Make CRUD in a service
  // 8) Form - Reactive (Formgroup, FormControl)
  // 9) import {MatIconModule} from '@angular/material/icon';
  // 10) https://fonts.google.com/icons
  // 11) Hvordan finder jeg så ud af hvad jeg skal gøre??
  // 12)

  // 3) version 1
  // heroList:Hero[]=[
  //   {Id:2, Name:"Bo", Place:"road", RealName:"Killer", DebutYear:new Date()},
  //   {Id:12, Name:"ee", Place:"road", RealName:"Killer", DebutYear:new Date()},
  //   {Id:22, Name:"aa", Place:"road", RealName:"Killer", DebutYear:new Date()},
  // ];

  // version 2
    heroList:Hero[]=[
  ];

hero = new FormGroup(
  {
    id:new FormControl(0),
    name:new FormControl(''),
    realName:new FormControl(''),
    place:new FormControl(''),
    debutYear:new FormControl()
  }
)

heroObj = new Hero();
reactiveForms(){
  console.log(this.hero.value);
  this.heroObj={id:2,name:"Bo",realName:"Ib",place:"road",debutYear:new Date()}
  console.log(this.heroObj);
  this.hero.setValue(this.heroObj);
}
  create(hero:Hero):void{
    //this method takes an object and send to API
    //call a method and pass value
    // alternative build an object an pass that...
    console.log(hero);
  }
  //version 1
  // getAll():Hero[]{
  //   console.log(this.heroList);
  //   return this.heroList;
  // }
  getAll():void{
    let list:Hero[]= [
      {id:23, name:"Bo", place:"road", realName:"Killer", debutYear:new Date()},
      {id:12, name:"Ib", place:"road", realName:"Killer", debutYear:new Date()},
      {id:22, name:"Anna", place:"road", realName:"Killer", debutYear:new Date()},
    ];
    this.heroList = list;
    //return list;
  }
  getHeroById(id:number):Hero{
    //search an array
    //var indexOfStevie = myArray.findIndex(i => i.hello === "stevie");
    //var found = this.heroList.findIndex(i=> i.Id == id);
    let aa = this.heroList.filter(h=>h.id==id); // we know that there is only 1
    console.log(aa);
    return aa[0];
  }
  delete(id:number):void{
    let index = this.heroList.findIndex(h=>h.id==id);
    var found = this.heroList.splice(index,1);
    console.log(found);
    // left overs...
    this.heroList.forEach(element => {
      console.log(element);
    });
  }

  update():Hero{
    // need to be implemented!!
    return {id:2, name:"Bo", place:"road", realName:"Killer", debutYear:new Date()};
  }

  ngOnInit(){
    console.log("this run when the page is build.. good for getting data...");
  }
}
