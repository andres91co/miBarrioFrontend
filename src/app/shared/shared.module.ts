import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { TextComponent } from './components/generic/forms/text/text.component';
import { DateComponent } from './components/generic/forms/date/date.component';
import { SelectComponent } from './components/generic/forms/select/select.component';
import { TableComponent } from './components/generic/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
    declarations: [ProductComponent, TextComponent, DateComponent, SelectComponent, TableComponent],
    imports: [
        CommonModule,
        FormsModule,
        NgSelectModule,
        ReactiveFormsModule,
    ],
    exports: [ProductComponent, TextComponent, DateComponent, SelectComponent, TableComponent]
})
export class ShareModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: ShareModule,
        };
    }
}
