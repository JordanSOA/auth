import { Component, OnInit, OnDestroy } from '@angular/core';
import { User, Error, MsgResponse, ServerError } from '../multi';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  public user: User;
  public helloMsg: string;
  public privateUserMsg: string;
  public privateAdminMsg: string;

  constructor(private api: ApiService, private router: Router) { }

  
  ngOnInit(): void {
    const profile = this.api.getProfile();
    const subs = profile.subscribe((val: User) => {
      this.user = val;
    });
    
    // subs.unsubscribe();
  }
  
  
  getHelloPublic(){
    const helloPubSub = this.api.getPublicHello().subscribe((val: MsgResponse) => {
        this.helloMsg = val.response;
    }, (error: ServerError) => {
      if (error.status === 403){
        return this.router.navigate(['/forbidden']);
      } else if (error.status === 404){
        return this.router.navigate(['/notfound']);
      }else if (error.status === 500){
        return this.router.navigate(['/notfound']);
      }
    },()=>{})

    //helloPubSub.unsubscribe();
  }

  getMsgPrivateUser(){
    this.api.getPrivateUserHello().subscribe((val: MsgResponse) => {
        return this.privateUserMsg = val.response;
    }, (error: ServerError) => {
      if (error.status === 403){
        return this.router.navigate(['/forbidden']);
      } else if (error.status === 404){
        return this.router.navigate(['/notfound']);
      }else if (error.status === 500){
        return this.router.navigate(['/notfound']);
      }
    },()=>{});
  }
  getMsgPrivateAdmin(){
    this.api.getPrivateAdminHello().subscribe((val: MsgResponse) => {
        return this.privateAdminMsg = val.response;
    },(error: ServerError) => {
      if (error.status === 403){
        return this.router.navigate(['/forbidden']);
      } else if (error.status === 404){
        return this.router.navigate(['/notfound']);
      }else if (error.status === 500){
        return this.router.navigate(['/notfound']);
      }

      // switch (error.status) {
      //   case 403:
      //     return this.router.navigate(['/forbidden']);
      //     break;
      //   case 404:
      //     return this.router.navigate(['/notfound']);
      //     break;
      //   case 500:
      //       return this.router.navigate(['/notfound']);
      //       break;
      //   default:
      //     break;
      // }
    },()=>{})
  }
}
