import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from "@angular/router"
import { APP_BASE_HREF } from "@angular/common";
import { CommonService } from './shared/common.service'

import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AddAccountsComponent } from './add-accounts/add-accounts.component';

const router: Routes = [
  {path: '', redirectTo: 'new-post', pathMatch: 'full'},
  {path: 'new-post', component: CreatePostComponent},
  {path: 'add-accounts', component: AddAccountsComponent}
];
const routes: ModuleWithProviders = RouterModule.forRoot(router);

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    CreatePostComponent,
    AddAccountsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [CommonService, {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
