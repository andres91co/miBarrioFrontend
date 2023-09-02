import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cargando = true;
  image = this.getUrlImage();
  showMessage = false;

  constructor(){
    if(localStorage.getItem('getIn')){
      this.cargando = false;
    } else {
      this.showMessage = true;
    }
  }

  ngOnInit(): void {
    if(!localStorage.getItem('getIn')){
      setTimeout(() => {
        this.cargando = false;
        this.showMessage = false;
        localStorage.setItem('getIn', 'true');
      }, 3000);
    }
  }

  getUrlImage(){
    let imgNumber = Math.floor(Math.random() * 3) + 1;
    return '../../assets/images/super'+imgNumber+'.jpg';
  }
}
