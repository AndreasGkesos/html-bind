import { EmptyComponent } from './../components/empty/empty.component';
import { ComponentFactoryResolver, Injectable, Injector, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
 
    private vcf: ViewContainerRef | undefined;

    constructor(private factoryResolver: ComponentFactoryResolver) { }

    setUpComponentService(container: ViewContainerRef) {
        this.vcf = container;
    }

    createComponent(data: any) {
        const factory = this.factoryResolver.resolveComponentFactory(EmptyComponent)
        const component = factory.create(this.vcf?.injector as Injector);

        component.instance.html = data;

        this.vcf?.insert(component.hostView);
    }
}