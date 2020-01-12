import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  

  REST_API_URL = 'http://localhost:3000/members'
  constructor(private http: HttpClient) { }


  loginuser(userData: any) {
    console.log(userData);
    var loginuser = new Promise((resolve,reject) => {
      this.http.post(this.REST_API_URL,userData).toPromise().then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      }).finally(() => {
        console.log('login successfully')
      })
    })
    return loginuser;
  }
  

  addMembers(formData: any){
    console.log(formData);    

    const addMembersPromise = new Promise( (resolve, reject) =>{
      this.http.post(this.REST_API_URL+'/addmember', formData)
            .toPromise()
            .then(( res: any) => {
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
    return this.http.get(this.REST_API_URL+'/getmember')
    .pipe( map((res: any) =>{
        console.log(res);      
        return res;
      }));
  }

  updateMember(upddateableMemberData){
    console.log(upddateableMemberData);
    console.log(upddateableMemberData.memberId);

    const updateMemberPromise = new Promise( (resolve, reject) =>{  
      this.http.put(this.REST_API_URL+'/'+upddateableMemberData.memberId, upddateableMemberData)
        .toPromise()
        .then((res: any) => {
          console.log(res);
          resolve(res);
        })
        .catch((err: any) => {
          console.log(err);
          reject(err);
        })
        .finally(() => {
          console.log('Its Over');
        });
    });
    return updateMemberPromise as Promise<any>;
  }

  deleteMember(deleteMemberData){
    console.log(deleteMemberData);

    
    var deleteuser = new Promise((resolve,reject) => {
      this.http.post(this.REST_API_URL +'/'+'delete',deleteMemberData).toPromise()
      .then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      })
    })
    return deleteuser;
  }

  

  
}
