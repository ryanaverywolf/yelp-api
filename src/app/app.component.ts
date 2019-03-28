import { Component, OnInit } from '@angular/core';
import { Restaurants } from './restaurants';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  restaurants$: Restaurants[]
  constructor(private dataService: DataService)
{}

ngOnInit()
{
  return this.dataService.getRestaurants()
  .subscribe(data => this.restaurants$ = data)
}
title = 'Yelp API';
}
