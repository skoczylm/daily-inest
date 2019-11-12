import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from 'app/core';
import { HomeComponent } from './home.component';
import { Shell } from 'app/shell/shell.service';
import { E1 } from './E1/e1.component';
import { E2 } from './E2/e2.component';
import { E3 } from './E3/e3.component';
import { E4 } from './E4/e4.component';
import { E5 } from './E5/e5.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/e1', pathMatch: 'full' },
    { path: 'e1', component: E1 },
    { path: 'e2', component: E2 },
    { path: 'e3', component: E3 },
    { path: 'e4', component: E4 },
    { path: 'e5', component: E5 }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {}
