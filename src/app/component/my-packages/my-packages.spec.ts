import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPackages } from './my-packages';

describe('MyPackages', () => {
  let component: MyPackages;
  let fixture: ComponentFixture<MyPackages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPackages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPackages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
