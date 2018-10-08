import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, 
  MatToolbarModule, MatProgressSpinnerModule, MatDialogModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule,MatToolbarModule, MatNativeDateModule, 
    MatIconModule, MatSidenavModule, MatListModule, MatProgressSpinnerModule, MatDialogModule,MatCardModule, MatFormFieldModule, MatInputModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, 
    MatSidenavModule, MatListModule, MatProgressSpinnerModule, MatDialogModule, MatCardModule, MatFormFieldModule, MatInputModule],
})
export class CustomMaterialModule { }