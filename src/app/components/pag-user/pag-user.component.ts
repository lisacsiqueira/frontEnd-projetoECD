import { Component } from '@angular/core';
import { HeaderUserComponent } from "../header-user/header-user.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-pag-user',
  standalone: true,
  imports: [HeaderUserComponent, FooterComponent, RouterLink],
  templateUrl: './pag-user.component.html',
  styleUrl: './pag-user.component.css'
})
export class PagUserComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToAnchor(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
