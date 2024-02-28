import { Component, Input } from '@angular/core';

@Component({
  selector: 'season-of-year',
  standalone: true,
  imports: [],
  templateUrl: './season-of-year.component.html',
  styleUrl: './season-of-year.component.css'
})
export class SeasonOfYearComponent {
  @Input('season') public season:string = "";
  fechaComienzo = "";
  fechaFinal = "";

  constructor(){
    if(this.season == "summer"){
      this.fechaComienzo = "21 de junio";
      this.fechaFinal = "23 de septiembre";
    }
    if(this.season == "winter"){
      this.fechaComienzo = "21 de diciembre";
      this.fechaFinal = "20 de marzo";
    }
    if(this.season == "fall"){
      this.fechaComienzo = "23 de septiembre";
      this.fechaFinal = "21 de diciembre";
    }
    if(this.season == "spring"){
      this.fechaComienzo = "20 de marzo";
      this.fechaFinal = "21 de junio";
    }
  }
}
