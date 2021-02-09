import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DetailsComponent implements OnInit {

  html: string = '';

  constructor(private _routes: ActivatedRoute) { }

  ngOnInit(): void {
    this._routes.data.subscribe((response: any) => {
      this.html = response.html;
    })
  }

}
