import { Component } from '@angular/core';
import { HeaderInicialComponent } from "../header-inicial/header-inicial.component";
import { FooterComponent } from "../footer/footer.component";
import { FormLoginComponent } from "../form-login/form-login.component";
import { ImgInicialComponent } from "../img-inicial/img-inicial.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderInicialComponent, FooterComponent, FormLoginComponent, ImgInicialComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
