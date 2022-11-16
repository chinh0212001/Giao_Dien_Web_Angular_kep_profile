import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanbeComponent } from './banbe.component';

describe('BanbeComponent', () => {
  let component: BanbeComponent;
  let fixture: ComponentFixture<BanbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanbeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
