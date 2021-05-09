import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HeaderComponent } from 'src/app/components/header/header.component'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PublishOfferAndDemandComponent } from './components/publish-offer-and-demand/publish-offer-and-demand.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './pages/home/home.page';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomePage, PublishOfferAndDemandComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
