import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  iconBanco = 'assets/images/CITIBANAMEX-01.svg';
  iconHome = 'assets/images/home.svg'
  classMenu = 'dropdown';

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){
    if(this.classMenu !== 'dropdown')
      this.classMenu = 'dropdown';
  }

  hideMenu(){
    this.classMenu = 'dropdown close-menu';
  }

}
