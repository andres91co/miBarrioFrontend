import { Component, Type } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  headers = ["ID", "NAME", "DESCRIPTION", "CITY"];
  dataList = [
    {id: 1, name: "Carlos", desc: "Bienvenido a ", city: "Bogotá"},
    {id: 1, name: "Felipe", desc: "Bienvenido a ", city: "Pereira"}
  ]

  fields: string[] = ["name","id","city", "city"];
  

  getValue(data: any, key: string){
    return data[key];
  }
}
