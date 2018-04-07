import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SearchComponent } from "./search/search.component";
import { HomeComponent } from "./home/home.component";
import routes from "./app-routes";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, LoginComponent, SearchComponent, HomeComponent],
  imports: [BrowserModule, RouterModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
