import { Component } from '@angular/core';
import { HeaderInicialComponent } from "../header-inicial/header-inicial.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderInicialComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
