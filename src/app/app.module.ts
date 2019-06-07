import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatInputModule, MatListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { DynamicNgrxModule } from 'dynamic-ngrx';
import { config } from './dynamic-ngrx.config';

export interface Todo {
  id: string;
  text: string;
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    HttpClientModule,
    DynamicNgrxModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
