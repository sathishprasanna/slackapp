import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
​
@Injectable({
  providedIn: 'root'
})
export class RestapiService {
​
  
​
  strslackurl:string = "http://localhost:8081/allchanel" ;
​

​
​
  constructor(private httpClient: HttpClient ) { }
​
 public getChannelsFromSlack(){
  return this.httpClient.get(this.strslackurl);
}
    
 public getchanneldetail(id){
   var url="http://localhost:8081/channeldetail/" +id;
   return this.httpClient.get(url);
 }
 public postMessage(id,msg)
 {
     var url = "http://localhost:8082/postmessage/"+id+"/"+msg;
     //var jsonmsg = {"message":msg};
     console.log(url);
     return this.httpClient.get(url);
 
 }
 }
​

