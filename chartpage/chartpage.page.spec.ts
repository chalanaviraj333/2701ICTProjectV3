import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChartpagePage } from './chartpage.page';

describe('ChartpagePage', () => {
  let component: ChartpagePage;
  let fixture: ComponentFixture<ChartpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
