import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiDinosaurioComponent } from './mi-dinosaurio.component';

describe('MiDinosaurioComponent', () => {
  let component: MiDinosaurioComponent;
  let fixture: ComponentFixture<MiDinosaurioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiDinosaurioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiDinosaurioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
