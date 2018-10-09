import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CompanyComponent } from '../company/company.component';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  panelOpenState = true;
  isDialogOpened = true;

  constructor(private matDialog: MatDialog) {}

  ngOnInit() {}

  addAddress() {
    this.isDialogOpened = true;
    const dialogRef = this.matDialog.open(CompanyComponent, { data: {} });

    dialogRef.afterClosed().subscribe(res => {
      this.isDialogOpened = false;
    });
  }
}
