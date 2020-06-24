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
  strslackurl:string = "http://localhost:8082/allchanel" ;
​

​
​
  constructor(private httpClient: HttpClient ) { }
​
 public getChannelsFromSlack(){
  return this.httpClient.get(this.strslackurl);
}
    
 public getchanneldetail(id){
   var url="http://localhost:8082/channeldetail/" +id;
   return this.httpClient.get(url);
 }
​

}