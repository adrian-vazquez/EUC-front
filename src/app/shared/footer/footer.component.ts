import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  iconBanco1 = 'assets/images/logoB.jpg';
  iconBanco2 = 'assets/images/LogoC.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}

