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
  

  constructor(private formbuilder: FormBuilder, private membersService: MembersService ) { }

  ngOnInit() {
    this.membersForm = this.formbuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      age:['',Validators.compose([Validators.required, Validators.maxLength(3)])],
      phone:['',Validators.required],
      email:['',Validators.compose([Validators.required, Validators.email])],
      gender: ['', Validators.required]
    });
  }

    async onAddMembers(){
    console.log(this.membersForm.value);
   const status =  await this.membersService.addMembers(this.membersForm.value)
    console.log('StatusData'+status);
    if(status){
      this.isSaved = true;
    }

  }

}
