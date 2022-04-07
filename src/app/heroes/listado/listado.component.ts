import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman','Batman','Thor'];

  heroeBorrado: string = "";
  constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  borrarHeroe():void{
   const heroeBorrado =  this.heroes.pop();
   this.heroeBorrado = heroeBorrado || '';
  }

}
