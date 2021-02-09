import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AboutComponent implements OnInit {

  html: string = '';
  
  constructor(private _routes: ActivatedRoute) { }

  ngOnInit(): void {
    this._routes.data.subscribe((response: any) => {
      this.html = response.html;
    })
  }

}
