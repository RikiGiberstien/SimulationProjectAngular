import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wellcome } from './wellcome';

describe('Wellcome', () => {
  let component: Wellcome;
  let fixture: ComponentFixture<Wellcome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wellcome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wellcome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
