import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { IframeComponent } from './iframe/iframe.component';
import { FooterComponent } from './footer/footer.component';
import { SafePipe } from './safe.pipe';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MainComponent,
    IframeComponent,
    FooterComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      { path: 'register', component: RegisterComponent },
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
