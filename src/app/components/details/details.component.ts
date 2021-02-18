import { ComponentService } from './../../services/component.service';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
  ,encapsulation: ViewEncapsulation.Emulated
})
export class DetailsComponent implements OnInit {

  html: string = '';
  
  constructor(private _routes: ActivatedRoute, private componentService: ComponentService, private changeRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._routes.data.subscribe((response: any) => {
      this.html = response.html;
      // this.componentService.createComponent(this.html);
    })
    
    this.changeRef.detectChanges();
  }

}
