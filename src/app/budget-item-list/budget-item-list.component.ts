import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from './../edit-item-modal/edit-item-modal.component';
import { BudgetItem } from './../../shared/model/budget-item-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onDeleteButtonClick(item: BudgetItem){
    this.delete.emit(item);
  }

  onCardClick(item: BudgetItem){
    //show the edit modal
    const dialogRef = this.dialog.open(EditItemModalComponent,{
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      //check if result has a value
      if(result){
        this.update.emit({
          old: item,
          new: result
        });
      }
    })
  }
}
export interface UpdateEvent{
  old: BudgetItem;
  new: BudgetItem;
}
