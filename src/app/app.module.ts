import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { BirdsComponent } from './birds/birds.component';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    BirdsComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
