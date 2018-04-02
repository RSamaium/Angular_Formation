import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';

import { MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  declarations: [UsersComponent],
  exports: [UsersComponent]
})
export class UsersModule { }
