import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirsdagComponent } from './tirsdag.component';

describe('TirsdagComponent', () => {
  let component: TirsdagComponent;
  let fixture: ComponentFixture<TirsdagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TirsdagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TirsdagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
