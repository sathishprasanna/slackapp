import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
​
@Injectable({
  providedIn: 'root'
})
export class RestapiService {
​
  strurl:string = "http://localhost:8081/studentlsit" ;
​
  strslackurl:string = "http://localhost:8081/allchanel" ;
​
  slackurl:string = "https://slack.com/api/channels.list?token=xoxb-514915302310-1148002808389-L8KTQHajr4z3IFi3e5ynXigp";
​
​
  constructor(private httpClient: HttpClient ) { }
​
 public getStudents(){
   return this.httpClient.get(this.strurl);
 }
​
 public getChannelsFromSlack(){
  return this.httpClient.get(this.strslackurl);
}
​
public  slackchannel(){
​
  return this.httpClient.get(this.slackurl);
​
}
}