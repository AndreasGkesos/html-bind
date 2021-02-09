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

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    AboutComponent,
    SanitizePipe,
    BindComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DetailsResolver,
    AboutResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
