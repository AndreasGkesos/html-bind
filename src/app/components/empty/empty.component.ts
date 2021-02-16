import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
  ,
  encapsulation: ViewEncapsulation.None
})
export class EmptyComponent implements OnInit {
  @ViewChild('content') content: any;
  @ViewChild('viewContainer') viewContainer: any;

  html: any = null;
  constructor(private sanitizer: DomSanitizer) { 

    this.content = { "nativeElement": '' };
  }

  ngOnInit(): void {
    const div = document.createElement('div');
    const split = this.sanitizer.bypassSecurityTrustHtml(this.html).toString().split('"');
    const c = `<h1 class="header">Test header</h1>
    <br>
    <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
        <mat-button-toggle value="bold">Bold</mat-button-toggle>
        <mat-button-toggle value="italic">Italic</mat-button-toggle>
        <mat-button-toggle value="underline">Underline</mat-button-toggle>
    </mat-button-toggle-group>`;
    div.innerHTML = c;
    // this.content.nativeElement.appendChild(div);
    this.content.nativeElement.outerHTML = c;
    this.content.creae

    // this.content.nativeElement.outerHTML = this.html;
  }

}
