import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtoNComponent } from './cto-n.component';

describe('CtoNComponent', () => {
  let component: CtoNComponent;
  let fixture: ComponentFixture<CtoNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtoNComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CtoNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
