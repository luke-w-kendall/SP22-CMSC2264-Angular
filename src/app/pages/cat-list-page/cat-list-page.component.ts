import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-list-page',
  templateUrl: './cat-list-page.component.html',
  styleUrls: ['./cat-list-page.component.scss']
})
export class CatListPageComponent implements OnInit {

  public headers = [
    {key: 'unieye', type: 'boolean'},
    {key: 'name', type: 'text'}
  ];

  public showTable = false;

  public cats: { unieye: boolean, name: string }[] = [
    {unieye: true, name: 'Missy'},
    {unieye: true, name: 'George'},
    {unieye: false, name: 'Batman'},
    {unieye: false, name: 'Matilda'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}

