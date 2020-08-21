import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MoovieCardComponent } from './moovie/moovie-card/moovie-card.component';
import { Example1Component } from './infiniteScroll/example1/example1.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ExampleMovie2Component } from './infiniteScroll/example-movie2/example-movie2.component';
import {DataScrollerModule} from 'primeng/datascroller';

@NgModule({
  declarations: [
    AppComponent,
    MoovieCardComponent,
    Example1Component,
    ExampleMovie2Component
    
  ],
  imports: [
    BrowserModule,
    TableModule,
    CardModule,
    HttpClientModule,
    InfiniteScrollModule,
    DataScrollerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
