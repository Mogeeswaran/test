import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MembersService } from './members.service';
import { MatDialog } from '@angular/material';
import {EditComponent} from '../mymodal/edit/edit.component';
import { DeleteComponent } from '../mymodal/delete/delete.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  membersList: any;
  membersSubscription: Subscription;
  isEdited:boolean;
  isDeleted:boolean;

  constructor(private membersService: MembersService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadMemberData();
    
  }

  loadMemberData(){
    this.membersSubscription = this.membersService.getMembers()
      .subscribe((res: any) => {
        console.log(res);
        this.membersList = res;
      });
  }

  ngOnDestroy() {
    console.log('Into Destroy Lifecycle hook');
    this.membersSubscription.unsubscribe();
    if (this.membersList && this.membersList.length > 0) {
      this.membersList.length = 0;
    }
  }

  onEdit(memberData) {
    console.log(memberData);
    console.log('inside edit menu');
    const dialogRef = this.dialog.open(EditComponent,
      {
        width: '400px',
        data: JSON.parse(JSON.stringify(memberData))
      });

      dialogRef.afterClosed().subscribe(async (updatedMemberData: any) => {
        // alert('check');
        console.log(updatedMemberData);
        if (updatedMemberData != 'nope') {
          const status: any = await this.membersService.updateMember(updatedMemberData)
          if (status && status.memberId) {
            this.loadMemberData();
            console.log('status');
            this.isEdited = true;
          } else {
            console.log('status');
          }
  
          console.log('The dialog was closed');
  
        } else {
  
        }
  
      });
  }


  onDelete(memberData) {
  console.log(memberData);
  console.log('inside delete menu');
  const dialogRef = this.dialog.open(DeleteComponent,
    {
      width: '400px',
      data: JSON.parse(JSON.stringify(memberData))
    });

    dialogRef.afterClosed().subscribe(async (deleteMemberData) => {
      // alert('check');
      console.log();
      if (deleteMemberData != 'nope') {
        const status: any = await this.membersService.deleteMember(deleteMemberData)
        console.log(status);
        if (status) {
          this.loadMemberData();
          this.isDeleted = true;
        } else {
          console.log('status');
        }
        console.log('The dialog was closed');
      } else {

      }
    });
  }

}
