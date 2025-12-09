import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsList } from './tips-list';

describe('TipsList', () => {
  let component: TipsList;
  let fixture: ComponentFixture<TipsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
