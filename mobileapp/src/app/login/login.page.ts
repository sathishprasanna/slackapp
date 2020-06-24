import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userid: string; 
  password: string; 
  error: string;

  constructor(public router:Router) { }
  ngOnInit() {}
  login(){ 
    console.log('userid',this.userid); 
    console.log('password',this.password); 
    if(this.userid ==='sudhakar')
    { if(this.password !=='123456')
    { console.log('userid',this.password); 
      this.error ='invalid password'; }
     else{ this.router.navigate(['channel']); 
    }
   } 
   else if(this.userid === 'prasanna'){ 
     if(this.password !== '123456'){ 
       console.log('userid',this.password); 
       this.error = 'invalid password'; }
        else{ this.router.navigate(['channel']);
       } 
      }
    
    else if(this.userid === 'dinaker vignesh'){ 
      if(this.password !== '123456'){ 
        console.log('userid',this.password); 
        this.error = 'invalid password'; }
         else{ this.router.navigate(['channel']);
        } 
       }
     
     else if(this.userid === 'aasif mohammed'){ 
      if(this.password !== '123456'){ 
        console.log('userid',this.password); 
        this.error = 'invalid password'; }
         else{ this.router.navigate(['channel']);
        } 
       }
     
     else if(this.userid === 'subhash gandhi'){ 
      if(this.password !== '123456'){ 
        console.log('userid',this.password); 
        this.error = 'invalid password'; }
         else{ this.router.navigate(['channel']);
        } 
       }
     }
}
