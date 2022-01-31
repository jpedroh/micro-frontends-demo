import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryLazyComponent } from './entry-lazy.component';

describe('EntryLazyComponent', () => {
  let component: EntryLazyComponent;
  let fixture: ComponentFixture<EntryLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
