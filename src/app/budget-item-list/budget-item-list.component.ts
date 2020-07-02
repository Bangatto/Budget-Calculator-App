import { EditItemModalComponent } from './../edit-item-modal/edit-item-modal.component';
import { BudgetItem } from './../../shared/model/budget-item-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDeleteButtonClick(item: BudgetItem){
    this.delete.emit(item);
  }

  onCardClick(){
    //show the edit modal
    const dialogRef = this.dialog.open(EditItemModalComponent,{
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subcribe(result => {
      //check if result has a value
      if(result){
        this.update.emit({
          old: isNgTemplate,
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
