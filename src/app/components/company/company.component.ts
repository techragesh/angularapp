import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  panelOpenState = true;
  isDialogOpened = true;
  public companyForm: FormGroup;


  constructor( private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CompanyComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {

    this.companyForm = this.formBuilder.group({
      id: [this.data.id],
      companyName: [this.data.companyName, [Validators.required]],
      companyId: [this.data.companyId, [Validators.required]],
      bsn: [this.data.bsn, [Validators.required]],
      subscription: [this.data.subscription, [Validators.required]],
      subscriptionId: [this.data.subscriptionId, [Validators.required]]
    });

  }

  // addAddress() {
  //   this.isDialogOpened = true;
  //   const dialogRef = this.matDialog.open(CompanyComponent, { data: {} });

  //   dialogRef.afterClosed().subscribe(res => {
  //     this.isDialogOpened = false;
  //   });
  // }

  onSubmit() {
    if (isNaN(this.data.id)) {
      //this.addressService.addAddress(this.addressForm.value);
      this.dialogRef.close();
    } else {
      //this.addressService.editAddress(this.addressForm.value);
      this.dialogRef.close();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
