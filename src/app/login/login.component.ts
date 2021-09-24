import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private ds: DataService) { }

  ngOnInit(): void {
  }
 hide = true;

// login 
userInfo:any={}
user_names:any;
user_password:any;

async loginUser() {
  this.userInfo.user_names = this.user_names;
  this.userInfo.user_password = this.user_password;

  await this.ds.sendApiRequest("loginUser", this.userInfo).subscribe((res: any) => {
    console.log(res);
    console.log("working");
   this.route.navigate(["dash"]);
   });
   console.log(this.userInfo);
 }


}
