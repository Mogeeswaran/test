import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MembersService } from './members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  membersList:any;
  membersSubscription: Subscription;
  constructor(private membersService: MembersService) { }

  ngOnInit() {
    this.membersSubscription = this.membersService.getMembers()
      .subscribe((res: any) => {
        console.log(res);
        this.membersList = res;
      });
  }

  ngOnDestroy() {
    console.log('Into Destroy Lifecycle hook');
    // ideal place for us to unscubscribe and empty the data
    this.membersSubscription.unsubscribe();

    if (this.membersList && this.membersList.length > 0) {
      this.membersList.length = 0;
    }
  }

  onEdit() {
    console.log('inside edit menu');
  }

}
