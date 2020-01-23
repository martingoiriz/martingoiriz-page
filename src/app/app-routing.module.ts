import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";

const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "about", component: AboutPageComponent },
  { path: "contacto", component: ContactPageComponent },
  { path: "", component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
