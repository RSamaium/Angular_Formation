import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appName:string = 'My App'

  constructor() { }

  ngOnInit() {
  }

  onSearch(str) {
     console.log(str)
  }

}
