import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCountryPage } from './list-country.page';

describe('ListCountryPage', () => {
  let component: ListCountryPage;
  let fixture: ComponentFixture<ListCountryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
