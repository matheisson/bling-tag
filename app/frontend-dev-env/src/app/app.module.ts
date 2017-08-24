import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';
import { FormsModule } from '@angular/forms';
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
  LoginComponent,
  HomeComponent
} from './components/_index'
import {
    UserService,
    FirmService,
    CommodityService,
    MailService,
    UnitService
} from './_services/_index';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        routing,
        DataTableModule,
        InputTextareaModule,
        FormsModule,
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
        LoginComponent,
        HomeComponent
    ],
    providers: [
        AuthGuard,
        GlobalEventsManager,
        HttpClient,
        UserService,
        FirmService,
        CommodityService,
        MailService,
        UnitService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {
}
