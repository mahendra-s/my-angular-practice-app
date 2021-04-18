import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EventBindingExampleComponent } from './event-binding-example/event-binding-example.component';
import { TemplateExampleComponent } from './template-example/template-example.component';
import { DirectiveExampleDirective } from './directive-example.directive';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { PipModule } from './pipe-module/pip-module';
import { MyDateServiceUseComponentComponent } from './my-date-service-use-component/my-date-service-use-component.component';
import { ServicesModule } from './services-module/services-module';
import { HttpClientExampleComponent } from './http-client-example/http-client-example.component';

@NgModule({
  declarations: [
    AppComponent
    , HomeComponent
    , AboutMeComponent
    , EventBindingExampleComponent
    , TemplateExampleComponent
    , DirectiveExampleDirective
    , PipeExampleComponent
    , MyDateServiceUseComponentComponent
    , HttpClientExampleComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , PipModule
    , ServicesModule
  ],
  bootstrap: [HomeComponent]
})
export class AppModule {}
