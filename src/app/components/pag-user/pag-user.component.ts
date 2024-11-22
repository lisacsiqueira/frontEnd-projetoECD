import { Component } from '@angular/core';
import { HeaderUserComponent } from "../header-user/header-user.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pag-user',
  standalone: true,
  imports: [HeaderUserComponent, FooterComponent, RouterLink],
  templateUrl: './pag-user.component.html',
  styleUrl: './pag-user.component.css'
})
export class PagUserComponent {

}
