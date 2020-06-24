import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestapiService} from '../restapi.service' ;




@Component({
  selector: 'app-channeldetail',
  templateUrl: './channeldetail.page.html',
  styleUrls: ['./channeldetail.page.scss'],
})
export class ChanneldetailPage implements OnInit {
  private channelid
  private channelinfo
  constructor(public actRoute:ActivatedRoute , private restapi: RestapiService) { 
    this.actRoute.queryParams.subscribe(params=>{
      console.log(params);
      this.channelid = params['channelid'];
      console.log(this.channelid);
    })
    this.restapi.getchanneldetail(this.channelid).subscribe( (response ) => {
      console.log( response );
      this.channelinfo = response;
    }); 
​
  }

  ngOnInit() {
    
  }

}
