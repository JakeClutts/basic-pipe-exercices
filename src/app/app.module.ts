import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLowercasePipePipe } from './my-lowercase-pipe.pipe';
import { XAmountOfCharactersPipe } from './x-amount-of-characters.pipe';
import { resourceLimits } from 'worker_threads';

@NgModule({
  declarations: [
    AppComponent,
    MyLowercasePipePipe,
    XAmountOfCharactersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
