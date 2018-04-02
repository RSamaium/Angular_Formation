import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatAutocompleteModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms'

import { NavbarComponent } from './navbar.component';
import { SearchComponent } from './search/search.component'

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  declarations: [
    NavbarComponent,
    SearchComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
