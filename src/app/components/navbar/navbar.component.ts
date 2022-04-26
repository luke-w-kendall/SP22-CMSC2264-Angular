import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  url = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goTo = (url: string): void => {
    this.url = url;
    this.router.navigate([`/${url}`]).then();
  };
}
