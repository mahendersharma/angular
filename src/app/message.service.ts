import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
console.log("service loaded...")
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class MessageService {

  constructor(private http:HttpClient) { }
  getmesage(){
    return "Hello ....."
  }
  users(){
    const header = {'content-type':'application/json'}
    const body = JSON.stringify({"society_id":"6b147d74-b5ae-633a-4fd1-649befec9a66"});
    return this.http.post('https://servizing.com/service/society/admin/dashboard/data',  body,{'headers':header})
    console.warn(header);
  }
}
