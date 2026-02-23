import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hash } from './hash';

describe('Hash', () => {
  let component: Hash;
  let fixture: ComponentFixture<Hash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
