import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MembersService } from '../members/members.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  constructor(private fb: FormBuilder, private membersService: MembersService, private router: Router) { }

  ngOnInit() {
    this.loginform = this.fb.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      date: ['', Validators.required]
    })
  }
   async onsubmit() {
    console.log('value', this.loginform.value);
    var loginstatus = await this.membersService.loginuser(this.loginform.value);
    console.log(loginstatus);
    this.router.navigate(['/home'])

  }
}
