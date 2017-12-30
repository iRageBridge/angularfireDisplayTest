import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import {FormsModule} from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyBY7dFCgZ5V-5qbhngCuvjsaf47Vae_zwI",
  authDomain: "crud-test-8728b.firebaseapp.com",
  databaseURL: "https://crud-test-8728b.firebaseio.com",
  projectId: "crud-test-8728b",
  storageBucket: "crud-test-8728b.appspot.com",
  messagingSenderId: "618746919860"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
