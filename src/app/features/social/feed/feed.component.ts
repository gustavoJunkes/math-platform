import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Formula } from 'src/app/core/model/formula.model';
import { Post } from 'src/app/core/model/post.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts!: Post[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.posts = [
      new Post("Cálculo de salário", "14/08/2022", new Formula("A = B + C", "Cálculo base para calcular salário de carteira assinada no Brasil segundo CLT. Fiz este cálculo para poder calcular meu próprio salário ao fim do mês. Espero que ajude alguêm :).", [])),
      new Post("Cálculo de transportes", "14/08/2022", new Formula("A = B + C", "Cálculo base para calcular salário de carteira assinada no Brasil segundo CLT. Fiz este cálculo para poder calcular meu próprio salário ao fim do mês. Espero que ajude alguêm :).", [])),
      new Post("Cálculo de juros baseado em...", "14/08/2022", new Formula("A = B + C", "Cálculo base para calcular salário de carteira assinada no Brasil segundo CLT. Fiz este cálculo para poder calcular meu próprio salário ao fim do mês. Espero que ajude alguêm :).", [])),
      new Post("Cálculo de taxa fob", "14/08/2022", new Formula("A = B + C", "Cálculo base para calcular salário de carteira assinada no Brasil segundo CLT. Fiz este cálculo para poder calcular meu próprio salário ao fim do mês. Espero que ajude alguêm :).", [])),

    ]
  }

  redirectToNewFormula() {
    this.router.navigate(['social/formula/nova-formula'])
  }

}
