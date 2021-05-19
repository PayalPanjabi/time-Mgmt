import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'ion2-calendar';
// import { SocialSharing } from '@ionic-native/social-sharing';
// import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    ReactiveFormsModule,RouterModule ,
    FormsModule,
    CalendarModule,
    // NgxDropzoneModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // SocialSharing
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
