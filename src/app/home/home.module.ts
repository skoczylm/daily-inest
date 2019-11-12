import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from 'app/core';
import { SharedModule } from 'app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { E1 } from './E1/e1.component';
import { E2 } from './E2/e2.component';
import { E3 } from './E3/e3.component';
import { E4 } from './E4/e4.component';
import { E5 } from './E5/e5.component';
import { Pokeball } from './components/pokeball/pokeball.component';
import { FirstPost } from './first-post/first-post.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, HomeRoutingModule],
  declarations: [HomeComponent, E1, E2, E3, E4, E5, Pokeball, FirstPost]
})
export class HomeModule {}
