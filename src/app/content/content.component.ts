import { AppService } from './../appservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  page= 1;

  restaurantData= [];
  constructor(public appService:AppService) {



  }


  ngOnInit() {
    this.appService.getRestaurantData(this.page)
      .subscribe(
        value=>{
          console.log(value);
          this.restaurantData=[...value.data]
        },
        err=>console.log(err)
      )
  }

  p(event){
    this.appService.getRestaurantData(event)
    .subscribe(
      value=>{
        console.log(value);
        this.restaurantData=[...value.data];
        this.page=event;

      },
      err=>console.log(err)
    )

  }



}
