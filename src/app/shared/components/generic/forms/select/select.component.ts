import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() form!: FormGroup;
  @Input() fieldName!: string;
  @Input() title?: string = '';
  @Input() mandatory?: boolean = false;
  @Input() multiple = false;
  @Input() value = 'id';
  @Input() name = 'name';
  @Input() disabled = '';
  @Input() list: Array<any> = [];
  @Output() emitter = new EventEmitter<string>();


  onChange($event: any) {
    if($event){
      this.emitter.emit(this.list[$event - 1])
    }
  }

}
