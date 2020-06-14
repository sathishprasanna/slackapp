import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RestapiService} from '../restapi.service' ;

@Component({
  selector: 'app-channel',
  templateUrl: './channel.page.html',
  styleUrls: ['./channel.page.scss'],
})
export class ChannelPage  {

  private studentlist ;
  private channels ;
  private slckchnelfrommyslack ;
  constructor(private route: Router , private restapi: RestapiService) {
​
    this.restapi.getStudents().subscribe( (response ) => {
      console.log( response );
      this.studentlist = response;
    });
​
    this.restapi.getChannelsFromSlack().subscribe( (response ) => {
      console.log( response );
      this.channels = response;
    });
​
    this.restapi.slackchannel().subscribe( (response ) => {
      console.log( 'data from slack' );
​
      console.log( response );
      this.slckchnelfrommyslack = response;
    });
    
​
  }
​
  navigate(){
    console.log('button clicked');
   this.route.navigate(['/about', {  }]); 
    
  }
  gotnextpage(id){
​
  }
​

}
