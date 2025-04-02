import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { ContactComponent } from "./contact/contact.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'contact', component: ContactComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}