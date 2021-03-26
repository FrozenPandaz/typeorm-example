import { Component } from '@angular/core';

import { GetUserGQL, GetUserQuery } from '@typeorm-test/users/data-access';
import { ApolloQueryResult } from '@apollo/client';
import { Observable } from 'rxjs';

@Component({
  selector: 'typeorm-test-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css'],
})
export class UserProfilePageComponent {
  user$: Observable<ApolloQueryResult<GetUserQuery>> = this.getUserGql.watch()
    .valueChanges;

  constructor(private getUserGql: GetUserGQL) {}
}
