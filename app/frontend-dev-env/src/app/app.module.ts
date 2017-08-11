import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';
import { AuthGuard } from './_guards/_index';
import {
  DataTableModule,
  InputTextareaModule,
  PanelModule,
  DropdownModule,
  PickListModule,
  CalendarModule,
  GrowlModule,
  SharedModule,
  Message
} from 'primeng/primeng';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalEventsManager } from './_eventsmanager/global.eventsmanager';
import { HttpClient } from './_httpclient/httpclient';
import { AppComponent } from './app.component';
import {
  NavBarComponent,
  ProfileComponent,
  InitComponent,
  LoginComponent,
  HomeComponent
} from './components/_index'
import {
    UserService,
    FirmService,
    CommodityService
} from './_services/_index';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        routing,
        DataTableModule,
        InputTextareaModule,
        PanelModule,
        DropdownModule,
        SharedModule,
        PickListModule,
        CalendarModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        NavBarComponent,
        ProfileComponent,
        InitComponent,
        LoginComponent,
        HomeComponent
    ],
    providers: [
        AuthGuard,
        GlobalEventsManager,
        HttpClient,
        UserService,
        FirmService,
        CommodityService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {
}
