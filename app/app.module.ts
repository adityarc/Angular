import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ArcComponent } from './arc.component';


@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[
        AppComponent, ArcComponent
    ],
    bootstrap:[
        AppComponent
    ] 
})
export class AppModule{}