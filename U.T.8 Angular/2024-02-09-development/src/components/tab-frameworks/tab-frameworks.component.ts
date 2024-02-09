import { Component, OnInit } from '@angular/core';
import { TableFrameworksComponent } from '../table-frameworks/table-frameworks.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tab-frameworks',
  standalone: true,
  imports: [TableFrameworksComponent],
  templateUrl: './tab-frameworks.component.html',
  styleUrl: './tab-frameworks.component.css'
})
export class TabFrameworksComponent implements OnInit{
  //analiza la url
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void{
    this._route.snapshot.paramMap.get('area');
  }
}
