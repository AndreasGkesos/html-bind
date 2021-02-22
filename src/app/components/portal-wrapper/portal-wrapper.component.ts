import { Component, AfterViewInit, OnDestroy, ViewChild, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import {CdkPortal, DomPortalOutlet} from '@angular/cdk/portal';

@Component({
  selector: 'app-portal-wrapper',
  templateUrl: './portal-wrapper.component.html',
  styleUrls: ['./portal-wrapper.component.css']
})
export class PortalWrapperComponent implements AfterViewInit, OnDestroy {
  @ViewChild(CdkPortal)
  private portal!: CdkPortal;

  private host!: DomPortalOutlet;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef,
              private injector: Injector) { }



  ngAfterViewInit() {
    this.host = new DomPortalOutlet(
      document.querySelector('#portal-hook')!,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector)
      this.host.attach(this.portal);
  }

   ngOnDestroy() {
     this.host.detach();
  }
}
