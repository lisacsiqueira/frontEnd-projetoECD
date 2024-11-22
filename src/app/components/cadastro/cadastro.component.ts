import { Component } from '@angular/core';
import { FormCadastroComponent } from "../form-cadastro/form-cadastro.component";
import { HeaderInicialComponent } from "../header-inicial/header-inicial.component";
import { ImgInicialComponent } from "../img-inicial/img-inicial.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormCadastroComponent, HeaderInicialComponent, ImgInicialComponent, FooterComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

}
