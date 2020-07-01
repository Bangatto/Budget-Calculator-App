import { BudgetItem } from '../../shared/model/budget-item-model';
import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-additem-form',
  templateUrl: './additem-form.component.html',
  styleUrls: ['./additem-form.component.scss']
})
export class AdditemFormComponent implements OnInit {
  @Input() item: BudgetItem = new BudgetItem('', null);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
  }

}
