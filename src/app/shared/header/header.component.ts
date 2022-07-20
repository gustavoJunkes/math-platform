import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToDate() {
    window.alert("Funcionalidade indisponível nesta versão. Estamos trabalhando nisso...")
    //this.router.navigate(['matematica/datas'])
  }

  redirectToInterest() {
    this.router.navigate(['matematica/juros'])
  }

  redirectToPercentage() {
    this.router.navigate(['matematica/porcentagem'])
  }
}
