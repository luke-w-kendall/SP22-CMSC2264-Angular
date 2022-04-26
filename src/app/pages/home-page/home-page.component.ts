import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  data: any = {};
  loading = false;
  name = 'Michael';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }

  submit = (name: string) => {
    this.loading = true;
    this.data = {};
    this.http.get<any>(`https://api.agify.io/?name=${name}`).subscribe((data) => {
      setTimeout(() => {
        this.data = data;
        this.loading = false;
      }, 3000);
    }, err => {
      alert('bad request');
    });
  };


}
