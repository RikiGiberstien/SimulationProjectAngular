import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Service } from '../../services/service';
import { dealsillustrationmoudule } from '../../models/deal/deals-illustration-moudule';

@Component({
  selector: 'app-illustration',
  imports: [AsyncPipe],
  templateUrl: './illustration.html',
  styleUrl: './illustration.scss'
})
export class Illustration {
  srv: Service = inject(Service)
  myCust: dealsillustrationmoudule = new dealsillustrationmoudule();

  ngOnInit() {
    this.srv.refresh()
  }
}
