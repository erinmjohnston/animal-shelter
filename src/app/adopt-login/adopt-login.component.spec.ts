import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdoptLoginComponent } from './adopt-login.component';

describe('AdoptLoginComponent', () => {
  let component: AdoptLoginComponent;
  let fixture: ComponentFixture<AdoptLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
