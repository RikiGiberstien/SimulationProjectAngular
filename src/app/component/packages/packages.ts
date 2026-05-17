import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- עבור ngModel
import { Service } from '../../services/service';
import { Customers } from '../customers/customers';
import { Orders } from '../orders/orders';
import { CommonModule } from '@angular/common'; // <-- חשוב ל-ngFor וכו'

@Component({
  selector: 'app-packages',
  standalone: true, // אם מדובר בקומפוננטה standalone
  imports: [
    CommonModule,       // ngFor, ngIf
    FormsModule,        // ngModel
    RouterOutlet,       // router-outlet
    Customers,
    Orders
  ],
  templateUrl: './packages.html',
  styleUrls: ['./packages.scss']
})
export class Packages {
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  srv: Service = inject(Service);

  projects = [
    {
      id: 1,
      title: 'מטבח יפיפה',
      description:"מעוצב בטוב טעם בסגנון איטלקי מודרני",
      image: "מטבח/4.png"
    },
    {
      id: 2,
      title: 'עיצוב משרד מודרני',
      description: 'הדמיה למשרד בעיצוב מודרני ונקי.',
      image: "מטבח/2.png"
    },
    {
      id: 3,
      title: 'וילה כפרית',
      description: 'הדמיה חיצונית ופנימית לוילה בסגנון כפרי.',
      image: "מטבח/3.png"
    }
  ];

  selectedProjectTitle: string = 'all';
  filteredProjects = [...this.projects];

  homePage() { this.router.navigate(['/homePage']); }
  mypac() { this.router.navigate(['/myPackages']); }
  cust() { this.router.navigate(['/customers']); }
  recomms() { this.router.navigate(['/recommendations']); }
  vieworders() { this.router.navigate(['/vieworders']); }
  about() { this.router.navigate(['/about']); }
  pictureDetails(id: number) { this.router.navigate(['/pictureDetails']); }

  filterProjects() {
    if (this.selectedProjectTitle === 'all') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(
        p => p.title === this.selectedProjectTitle
      );
    }
  }
}
