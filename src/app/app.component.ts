import { ComponentService } from './services/component.service';
import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  ,encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  
  constructor(private cs: ComponentService,
              private vcf: ViewContainerRef) {
  }

  ngOnInit(): void {
    // this.cs.setUpComponentService(this.vcf);
  }

  title = 'html-bind';
}
