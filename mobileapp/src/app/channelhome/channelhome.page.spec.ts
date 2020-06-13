import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChannelhomePage } from './channelhome.page';

describe('ChannelhomePage', () => {
  let component: ChannelhomePage;
  let fixture: ComponentFixture<ChannelhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChannelhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
