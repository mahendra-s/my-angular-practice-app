import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EventBindingExampleComponent } from './event-binding-example/event-binding-example.component';
import { TemplateExampleComponent } from './template-example/template-example.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}
  , {path: 'about', component: AboutMeComponent}
  , {path: 'event-binding-example', component: EventBindingExampleComponent}
  , {path: 'template-example', component: TemplateExampleComponent}
  , {path: 'directive-example', component: TemplateExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
