import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestapiService} from '../restapi.service' ;




@Component({
  selector: 'app-channeldetail',
  templateUrl: './channeldetail.page.html',
  styleUrls: ['./channeldetail.page.scss'],
})
export class ChanneldetailPage {
  public channelid
  private channelinfo
  public members;
  public memberNames=[];
  public chatmsg;
  constructor(public actRoute:ActivatedRoute , private restapi: RestapiService) { 
    this.actRoute.queryParams.subscribe(params=>{
      console.log(params);
      this.channelid = params['channelid'];
      console.log(this.channelid);
      console.log("Channel detail retrieving from API");
    
      this.restapi.getchanneldetail(this.channelid).subscribe( (response ) => {
        console.log( response );
        this.members = response;
      })
    })
   
​
  }

  ngOnInit() {
    
  }


  postmsg()
  {
    console.log("channel detail page :: Post Msg==>" +this.chatmsg);
    this.restapi.postMessage(this.channelid,this.chatmsg).subscribe(response=>
      console.log(response));
  }

}
