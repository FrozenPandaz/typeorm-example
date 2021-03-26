import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: UserProfilePageComponent },
    ]),
  ],
  declarations: [UserProfilePageComponent],
})
export class UsersUserProfilePageModule {}
