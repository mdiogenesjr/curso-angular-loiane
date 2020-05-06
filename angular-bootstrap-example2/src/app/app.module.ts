import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { DataBindingComponentComponent } from './data-binding-component/data-binding-component.component';
import { OutputPropertiesComponent } from './output-properties/output-properties.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivaIfComponent } from './diretiva-if/diretiva-if.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    TwoWayDataBindingComponent,
    InputPropertiesComponent,
    DataBindingComponentComponent,
    OutputPropertiesComponent,
    CicloComponent,
    DiretivaIfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
