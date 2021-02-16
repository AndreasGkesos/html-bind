import { AboutResolver } from './resolvers/about.resolve';
import { DetailsResolver } from './resolvers/details.resolve';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { AboutComponent } from './components/about/about.component';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { BindComponent } from './components/bind/bind.component';
import { EmptyComponent } from './components/empty/empty.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortalModule } from '@angular/cdk/portal';

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    AboutComponent,
    SanitizePipe,
    BindComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PortalModule,
    MatSliderModule,
    MatCardModule,
    MatButtonToggleModule,
    MatInputModule
  ],
  providers: [
    DetailsResolver,
    AboutResolver
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EmptyComponent
  ]
})
export class AppModule { }
