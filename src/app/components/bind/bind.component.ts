import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  @Input() html: string = '';
  sanitizedHtml: SafeHtml = '';
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(this.html);
  }

}
