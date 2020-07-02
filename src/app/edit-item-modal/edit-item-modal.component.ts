import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BudgetItem } from './../../shared/model/budget-item-model';
import { Component, OnInit} from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditItemModalComponent>,
    @inject(MAT_DIALOG_DATA) public item: BudgetItem) { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: BudgetItem){
    this.dialogRef.close(updatedItem);

  }
}
