import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RestapiService} from '../restapi.service' ;

@Component({
  selector: 'app-channel',
  templateUrl: './channel.page.html',
  styleUrls: ['./channel.page.scss'],
})
export class ChannelPage  {


  private channels ;
  private slckchnelfrommyslack ;
  constructor(private route: Router , private restapi: RestapiService) {
​
    
​
    this.restapi.getChannelsFromSlack().subscribe( (response ) => {
      console.log( response );
      this.channels = response;
    }); 
​
  }
​
  navigate(){
    console.log('button clicked');
   this.route.navigate(['/channeldetail', {  }]); 
    
  }
  gotnextpage(id){
    console.log('button clicked');
    this.route.navigate(['/channeldetail', {  }]); 
     
​
  }
​

}
