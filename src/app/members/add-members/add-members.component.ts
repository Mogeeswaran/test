import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {

  isSaved: boolean;
  membersForm: FormGroup;
  status :any;

  constructor(private formbuilder: FormBuilder, private membersService: MembersService ) { }

  ngOnInit() {
    this.membersForm = this.formbuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      age:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required, Validators.email],
      gender: ['', Validators.required]
    });
  }

    async onAddMembers(){
    console.log(this.membersForm.value);
   this.status =  await this.membersService.addMembers(this.membersForm.value);
    // console.log(status);
    if(status){
      this.isSaved = true;
    }

  }

}
