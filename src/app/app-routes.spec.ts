import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { AppComponent } from "./app.component";
import routes from "./app-routes";
import { fail } from "assert";

describe("Router:App", () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [HomeComponent, SearchComponent, AppComponent]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  //for home
  it(
    "should redirect you to home",
    fakeAsync(() => {
      router.navigate(["home"]).then(
        () => {
          expect(router.url).toBe("/home");
        },
        () => {
          fail(router.url, "/home", "failed to open page");
        }
      );
    })
  );
  it(
    "should navigate you to search",
    fakeAsync(() => {
      router.navigate(["search"]).then(
        () => {
          expect(router.url).toBe("/search");
        },
        () => {
          fail(router.url, "/search", "failed to load the page");
        }
      );
    })
  );
});
