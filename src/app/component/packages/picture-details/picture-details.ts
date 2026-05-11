import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Service } from '../../../services/service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.html',
  styleUrls: ['./picture-details.scss'],
})
export class PictureDetails implements OnInit, OnDestroy {

   srv: Service = inject(Service)
  router = inject(Router)
  activeRoute = inject(ActivatedRoute);
  images: string[] = [
    "מטבח/1.png",
    "מטבח/2.png",
    "מטבח/3.png",
    "מטבח/5.png",
    "מטבח/6.png",
    "מטבח/8.jpg",
  ];

  currentIndex = 0;
  scale: number = 1;
  translateX: number = 0;
  translateY: number = 0;
  isDragging: boolean = false;
  startX: number = 0;
  startY: number = 0;

  autoPlayInterval: any;
  autoPlaySpeed: number = 5000;

  isGridView: boolean = false;
  homePage() { this.router.navigate(['/packages']) }

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  next() {
    this.resetTransform();
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.resetTransform();
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  select(index: number) {
    this.resetTransform();
    this.currentIndex = index;
  }

  resetTransform() {
    this.scale = 1;
    this.translateX = 0;
    this.translateY = 0;
  }

  onWheel(event: WheelEvent) {
    event.preventDefault();
    const zoomSpeed = 0.001;
    this.scale += -event.deltaY * zoomSpeed;
    if (this.scale < 0.5) this.scale = 0.5;
    if (this.scale > 5) this.scale = 5;
  }

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX - this.translateX;
    this.startY = event.clientY - this.translateY;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    this.translateX = event.clientX - this.startX;
    this.translateY = event.clientY - this.startY;
  }

  onMouseUp(event: MouseEvent) {
    this.isDragging = false;
  }

  onContainerClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('image-main')) {
      this.resetTransform();
    }
  }

  zoomIn() { this.scale += 0.2; }
  zoomOut() { this.scale -= 0.2; }
  fitScreen() { this.resetTransform(); }

  toggleGrid() { this.isGridView = !this.isGridView; }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => this.next(), this.autoPlaySpeed);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
  }
}