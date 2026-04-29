import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatepackage } from './updatepackage';

describe('Updatepackage', () => {
  let component: Updatepackage;
  let fixture: ComponentFixture<Updatepackage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatepackage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatepackage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
