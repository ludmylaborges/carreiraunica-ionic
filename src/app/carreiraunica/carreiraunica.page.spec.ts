import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarreiraunicaPage } from './carreiraunica.page';

describe('CarreiraunicaPage', () => {
  let component: CarreiraunicaPage;
  let fixture: ComponentFixture<CarreiraunicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarreiraunicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarreiraunicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
