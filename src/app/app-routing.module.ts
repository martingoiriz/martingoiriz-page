import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "about-8218", component: AboutPageComponent },
  { path: "contacto", component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
