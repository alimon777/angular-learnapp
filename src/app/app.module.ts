import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { BirdsComponent } from './birds/birds.component';
import { HttpComponent } from './http/http.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { CreateComponent } from './create/create.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    BirdsComponent,
    HttpComponent,
    ReactiveComponent,
    CreateComponent,
    FormbuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
