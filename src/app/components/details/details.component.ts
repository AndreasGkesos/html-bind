import { getTestproperty, getDetailsContent } from './../../reducers/content.reducer';
import { ComponentService } from './../../services/component.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
  ,encapsulation: ViewEncapsulation.Emulated
})
export class DetailsComponent implements OnInit {
  html: string = '';

  
  constructor(private _routes: ActivatedRoute,
              private componentService: ComponentService,
              private store: Store<any>) { }

  ngOnInit(): void {  
    this.store.select(getTestproperty)
      .subscribe(
        data => {
          console.log(data);
        }
    );

    this.store.select(getDetailsContent)
      .subscribe(
        data => {
          console.log(data);
          if (data.content.length > 0) {
            this.html = data.content;
          }
        }
    );
  }

}
