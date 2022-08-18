import { Router } from '@angular/router';
import { Post } from 'src/app/core/model/post.model';
import { Formula } from './../../core/model/formula.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation-post',
  templateUrl: './calculation-post.component.html',
  styleUrls: ['./calculation-post.component.css']
})
export class CalculationPostComponent implements OnInit {

  @Input()
  post!: Post;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickUseFormula(post: Post) {
    // esse router deve mandar pra tela de cálculo usando uma fórmula
    this.router.navigate(['social/formula/nova-formula'])
  }

}
