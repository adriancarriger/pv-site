import { provideRouter, RouterConfig } from '@angular/router';
import { SermonsPageComponent } from './+sermons-page';
import { DefaultPageComponent } from './+default-page';
import { TestTemplateComponent } from './+test-template';
import { HomeComponent } from './+home';

const appRoutes: RouterConfig = [
  {path: '', component: HomeComponent},
  {path: 'resources/sermons', component: SermonsPageComponent},
  {path: 'resources/:type', component: TestTemplateComponent},
  {path: 'ministries/:type', component: DefaultPageComponent},
  {path: 'outreaches/:type', component: DefaultPageComponent},
  {path: 'about/:type', component: TestTemplateComponent},
  {path: 'test-template', component: TestTemplateComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(appRoutes)
];
