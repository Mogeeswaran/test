import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  REST_API_URL = 'http://localhost:3000/members'
  constructor(private http: HttpClient) { }

  addMembers(formData: any){
    console.log(formData);

    const addMembersPromise = new Promise( (resolve, reject) =>{
      this.http.post(this.REST_API_URL, formData)
            .toPromise()
            .then( ( res: any) => {
              console.log(res);
              resolve(res);
            })
            .catch( (err: any) => {
              console.log(err);
              reject(err);
            })
            .finally( () =>{
              console.log('Its Over');
            });
    });    
    return addMembersPromise as Promise<any>;
  }


  getMembers(){
    return this.http.get(this.REST_API_URL)
    .pipe( map((res: any) =>{
        console.log(res);      
        return res;
      }));
  }
}
