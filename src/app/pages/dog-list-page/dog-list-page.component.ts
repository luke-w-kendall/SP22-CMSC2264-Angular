import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-list-page',
  templateUrl: './dog-list-page.component.html',
  styleUrls: ['./dog-list-page.component.scss']
})
export class DogListPageComponent implements OnInit {

  public headers = [
    {key: 'breed', type: 'text'},
    {key: 'color', type: 'color'},
    {key: 'price', type: 'currency'},
    {key: 'birthdate', type: 'date'},
    {key: 'weight', type: 'number'},
  ];

  public showTable = false;

  public dogs: { breed: string, birthdate: Date, color: string, weight: number, price: number }[] = [
    {breed: 'German Shepard', birthdate: new Date('April 3, 2017 03:24:00'), color: 'Black', weight: 56, price: 100},
    {breed: 'Husky', birthdate: new Date('February 3, 2019 03:24:00'), color: 'White', weight: 80, price: 1000},
    {breed: 'Chihuahua', birthdate: new Date('December 25, 0 12:00:00'), color: 'Blue', weight: -30, price: 6000000}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}

