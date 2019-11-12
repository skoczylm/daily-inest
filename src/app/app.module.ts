import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { E1 } from "./E1/e1.component";
import { E2 } from "./E2/e2.component";
import { E3 } from "./E3/e3.component";
import { E4 } from "./E4/e4.component";
import { E5 } from "./E5/e5.component";

import { RouterModule } from "@angular/router";
import { NzButtonModule } from "ng-zorro-antd/button";

import { NzFormModule } from "ng-zorro-antd/form";
import { NgZorroAntdModule } from "ng-zorro-antd";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NzButtonModule,
    NzFormModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot([
      { path: "", component: E1 },
      { path: "e1", component: E1 },
      { path: "e2", component: E2 },
      { path: "e3", component: E3 },
      { path: "e4", component: E4 },
      { path: "e5", component: E5 }
    ])
  ],
  declarations: [AppComponent, HelloComponent, E1, E2, E3, E4, E5],
  bootstrap: [AppComponent]
})
export class AppModule {}
