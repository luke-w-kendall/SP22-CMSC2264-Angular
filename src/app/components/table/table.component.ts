import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  // @ts-ignore
  @Input() headers: Header[];
  @Input() data: any[];

  constructor() {
    // this.headers = this.headers ?? [];
    this.data = [];
  }

  ngOnInit(): void {
  }


}

export type Header = {
  type: string;
  key: string;
};
