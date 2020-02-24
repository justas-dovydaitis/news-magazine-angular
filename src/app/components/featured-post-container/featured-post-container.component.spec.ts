import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPostContainerComponent } from './featured-post-container.component';

describe('FeaturedPostContainerComponent', () => {
  let component: FeaturedPostContainerComponent;
  let fixture: ComponentFixture<FeaturedPostContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedPostContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
