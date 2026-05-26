import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.html',
  styleUrls: ['./order-confirmation.scss']
})
export class OrderConfirmation implements AfterViewInit {
   router = inject(Router);
  @ViewChild('bgMusic') bgMusic!: ElementRef<HTMLAudioElement>;

  ngAfterViewInit(): void {
    const audio = this.bgMusic.nativeElement;
    audio.volume = 0.5;

    audio.play().catch(() => {
      document.body.addEventListener('click', () => audio.play(), { once: true });
    });
  }
  homePage() {
    this.router.navigate(['/homePage']);
  }
}

