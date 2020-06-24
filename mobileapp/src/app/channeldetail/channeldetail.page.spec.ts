import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChanneldetailPage } from './channeldetail.page';

describe('ChanneldetailPage', () => {
  let component: ChanneldetailPage;
  let fixture: ComponentFixture<ChanneldetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanneldetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChanneldetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
