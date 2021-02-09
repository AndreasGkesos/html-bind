import { AboutResolver } from './resolvers/about.resolve';
import { DetailsResolver } from './resolvers/details.resolve';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'details', component: DetailsComponent, resolve: {
      html: DetailsResolver
    }
  },
  { path: 'about', component: AboutComponent, resolve: {
      html: AboutResolver
    }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
