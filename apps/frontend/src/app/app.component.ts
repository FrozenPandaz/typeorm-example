import { Component } from '@angular/core';

import { GetUserGQL } from '@typeorm-test/users/data-access';

@Component({
  selector: 'typeorm-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user$ = this.usersGql.watch().valueChanges;

  constructor(private usersGql: GetUserGQL) {}
}
