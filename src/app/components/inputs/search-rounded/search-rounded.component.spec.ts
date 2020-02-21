import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRoundedComponent } from './search-rounded.component';

describe('SearchRoundedComponent', () => {
  let component: SearchRoundedComponent;
  let fixture: ComponentFixture<SearchRoundedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRoundedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
