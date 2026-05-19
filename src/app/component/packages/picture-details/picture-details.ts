import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PicturesModule } from '../../../models/pictures/pictures-module';

@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.html',
  styleUrls: ['./picture-details.scss'],
})
export class PictureDetails {
@Input()
  pictures: PicturesModule[] = [];
 images:PicturesModule[]=[]
  constructor(private route: ActivatedRoute) {}


ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  this.images=history.state?.images
  console.log(this.images);
  
}
  
  currentIndex = 0;

  scale: number = 1;
  translateX: number = 0;
  translateY: number = 0;
  isDragging: boolean = false;
  startX: number = 0;
  startY: number = 0;
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

    if (this.scale < 0.5) this.scale = 0.5; // מסגרת שחורה כשהקטן מדי
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

  // לחיצה מחוץ לתמונה מחזירה לגודל המקורי
  onContainerClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('image-main')) {
      this.resetTransform();
    }
  }

  next() {
  this.resetTransform();

  this.currentIndex =
    (this.currentIndex + 1) % this.pictures.length;
}

prev() {
  this.resetTransform();

  this.currentIndex =
    (this.currentIndex - 1 + this.pictures.length) %
    this.pictures.length;
}
}