import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileImageComponent } from './proile-image/profile-image.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProfileImageComponent],
  exports: [ProfileImageComponent],
})
export class UsersUiModule {}
