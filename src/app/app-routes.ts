import { Routes, RouterModule } from "@angular/router";

import { SearchComponent } from "./search/search.component";
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent }
];

export default routes;
