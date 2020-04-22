import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaastElkaarComponent } from './naast-elkaar/naast-elkaar.component';
import { FirstComponent } from './naast-elkaar/first/first.component';
import { SecondComponent } from './naast-elkaar/second/second.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';
import { MasterComponent } from './master-detail/master/master.component';
import { DetailComponent } from './master-detail/detail/detail.component';
import { RouterComponent } from './router/router.component';
import { AComponent } from './router/a/a.component';
import { BComponent } from './router/b/b.component';
import { ViaServiceComponent } from './via-service/via-service.component';
import { SenderComponent } from './via-service/sender/sender.component';
import { ReceiverComponent } from './via-service/receiver/receiver.component';

@NgModule({
  declarations: [
    AppComponent,
    NaastElkaarComponent,
    FirstComponent,
    SecondComponent,
    MasterDetailComponent,
    MasterComponent,
    DetailComponent,
    RouterComponent,
    AComponent,
    BComponent,
    ViaServiceComponent,
    SenderComponent,
    ReceiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
