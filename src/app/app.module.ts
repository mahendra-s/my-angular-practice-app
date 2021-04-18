import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EventBindingExampleComponent } from './event-binding-example/event-binding-example.component';
import { TemplateExampleComponent } from './template-example/template-example.component';
import { DirectiveExampleDirective } from './directive-example.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    EventBindingExampleComponent,
    TemplateExampleComponent,
    DirectiveExampleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule {}
