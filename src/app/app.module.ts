import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatInputModule, MatListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { DynamicNgrxModule, DynamicStoreConfig } from 'dynamic-ngrx';

const config: DynamicStoreConfig = {
  entities: [{ entity: 'Todo' }],
  providers: [],
  enableOfflineSync: true,
};

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
    DynamicNgrxModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
