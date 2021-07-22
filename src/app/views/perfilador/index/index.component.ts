import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  titulo = 'HERRAMIENTA CUENTAS E INVERSIONES';
  user = 'USER TEST (ADMIN)';
  images = [
    {path: 'assets/images/im1.jpg'},
    {path: 'assets/images/im2.jpg'},
    {path: 'assets/images/im3.jpg'}
  ];
  showBanner:boolean = true;
  showCliente:number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  closeBanner(){
    this.showBanner = false;
  }

  valFormYes() {
    this.showCliente = 0;
  }

  valFormNo() {
    this.showCliente = 1;
  }

}
