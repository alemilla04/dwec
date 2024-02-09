import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DevelopmentService, FrameworkT } from '../../services/development.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'table-frameworks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-frameworks.component.html',
  styleUrl: './table-frameworks.component.css'
})
export class TableFrameworksComponent implements OnInit{
  //@ts-ignore
  frameworks$: Observable<FrameworkT[]>;

  constructor(private _service: DevelopmentService, private _route: ActivatedRoute) {}
  
  ngOnInit(): void {
    const areaId = this._route.snapshot.paramMap.get('area');
    if(areaId) {
      this.frameworks$ = this._service.getFrameworksByArea$(areaId);
    } else{
      this.frameworks$ = this._service.getFrameworks$();
    }
  }
}
