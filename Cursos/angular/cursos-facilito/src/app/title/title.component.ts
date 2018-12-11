import{ Component,OnInit } from '@angular/core';

@Component({
  selector:'app-title',
  templateUrl:'title.component.html',
  styleUrls:['title.component.css']
})

export class TitleComponent implements OnInit {
  public name :string = 'juan camilo';
  public edad:number;
  public edades:number[];


  constructor(){

  }


  ngOnInit(){
    this.name='juancho';
    this.edad=29;
  }


  getEdadNombre(): string  {
    return `${this.name} : ${this.edad}`;
  }

}
