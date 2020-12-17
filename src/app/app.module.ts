import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DefaultAComponent } from './components/default-a/default-a.component';
import { DefaultBComponent } from './components/default-b/default-b.component';
import { DefaultCInputOutputComponent } from './components/default-c-input-output/default-c-input-output.component';
import { DefaultDTestBedComponent } from './components/default-d-test-bed/default-d-test-bed.component';
import { DefaultEDomTestingComponent } from './components/default-e-dom-testing/default-e-dom-testing.component';
import { DefaultFComponentBindingComponent } from './components/default-f-component-binding/default-f-component-binding.component';
import { DefaultFComponentBindingAutomaticChangeDetectionComponent } from './components/default-f-component-binding-automatic-change-detection/default-f-component-binding-automatic-change-detection.component';
import { DefaultFComponentBindingDispathEventComponent } from './components/default-f-component-binding-dispath-event/default-f-component-binding-dispath-event.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultAComponent,
    DefaultBComponent,
    DefaultCInputOutputComponent,
    DefaultDTestBedComponent,
    DefaultEDomTestingComponent,
    DefaultFComponentBindingComponent,
    DefaultFComponentBindingAutomaticChangeDetectionComponent,
    DefaultFComponentBindingDispathEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
