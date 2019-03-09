import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { SellersComponent } from './sellers/sellers.component';
import { PassesComponent } from './passes/passes.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'sellers', component: SellersComponent },
  { path: 'passes', component: PassesComponent },
  { path: 'login', component: AccountComponent },
  { path: 'settings', component: SettingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
