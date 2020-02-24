import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostContainerComponent } from './latest-post-container.component';

describe('LatestPostContainerComponent', () => {
  let component: LatestPostContainerComponent;
  let fixture: ComponentFixture<LatestPostContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestPostContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
