import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AuthService} from  './auth.service';
import {AngularFireAuthModule} from 'angularFire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule { }
