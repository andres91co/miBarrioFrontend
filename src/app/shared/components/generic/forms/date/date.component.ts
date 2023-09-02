import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { format } from 'date-fns';
import { formatDateForm, maxDate, minDate } from 'src/app/constants';
import { Output, EventEmitter } from '@angular/core';
import { dateIsValid, toFormat } from 'src/app/utils/date-functions';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {

  @Input() form!: FormGroup;
  @Input() fieldName!: string;
  @Input() title?: string = '';
  @Input() minDate: string = minDate;
  @Input() maxDate: string = maxDate;
  @Input() mandatory?: boolean = false;
  @Output() emitter = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit(): void {
    if(!this.form.get(this.fieldName)?.value){
      this.form.get(this.fieldName)?.setValue(format(new Date(), formatDateForm));
    }
  }

  change(){
    let date = this.form.get(this.fieldName)?.value;
    if(dateIsValid(date)){
      this.emitter.emit(toFormat(date));
    }
  }

}
