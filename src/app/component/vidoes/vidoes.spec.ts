import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vidoes } from './vidoes';

describe('Vidoes', () => {
  let component: Vidoes;
  let fixture: ComponentFixture<Vidoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vidoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vidoes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
