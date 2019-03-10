import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { SellersComponent } from './sellers/sellers.component';
import { PassesComponent } from './passes/passes.component';
import { SettingComponent } from './setting/setting.component';
import { ErrfofComponent } from './errfof/errfof.component';
import { ErrservComponent } from './errserv/errserv.component';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    AccountComponent,
    SellersComponent,
    PassesComponent,
    SettingComponent,
    ErrfofComponent,
    ErrservComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
