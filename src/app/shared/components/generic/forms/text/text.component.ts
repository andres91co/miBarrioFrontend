import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {

  @Input() form!: FormGroup;
  @Input() fieldName!: string;
  @Input() text?: string = '';
  @Input() placeholder?: string = '';
  @Input() title?: string = '';
  @Input() patternValidationText?: string = '';
  @Input() mandatory?: boolean = false;
  @Input() type?: string = 'text';
  @Input() onlyNumber?: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    this.form.get(this.fieldName)?.setValue(this.text);
  }

  validateCharacter(event: KeyboardEvent) { 
    const { key } = event    
    if (this.onlyNumber) {
      return !Number.isNaN(Number(key));
    } 
    return true;
  }
}
