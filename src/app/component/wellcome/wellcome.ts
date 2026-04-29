import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wellcome',
  imports: [],
  templateUrl: './wellcome.html',
  styleUrl: './wellcome.scss'
})
export class Wellcome {
   animating = false;

  constructor(private router: Router) {}

  goNext() {
    this.animating = true;

    setTimeout(() => {
      this.router.navigate(['/homePage']);
    }, 1400);
  }
}
