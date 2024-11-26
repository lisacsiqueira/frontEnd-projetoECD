import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pag-oracoes',
  standalone: true,
  imports: [FooterComponent, RouterLink],
  templateUrl: './pag-oracoes.component.html',
  styleUrl: './pag-oracoes.component.css'
})
export class PagOracoesComponent {

}
