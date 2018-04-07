import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { AuthServiceService } from "../auth-service.service";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthServiceService;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        providers: [AuthServiceService]
      }).compileComponents();
    })
  );
  beforeEach(() => {
    //create the components and text fixtures
    //fixture is a wrapper for components and its services
    fixture = TestBed.createComponent(LoginComponent);

    //extract test component from fixture
    component = fixture.componentInstance;

    //service provided to testbed
    authService = TestBed.get(AuthServiceService);
  });

  it("canLogin returns false when the user is not authenticated", () => {
    spyOn(authService, "isAuthenticated").and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it("canLogin returns false when the user is not authenticated", () => {
    spyOn(authService, "isAuthenticated").and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
});

/*  When to use Test Bed
It allows us to test the interaction of a directive or component with it’s template.

It allows us to easily test change detection.

It allows us to test and use Angulars DI framework,

It allows us to test using the NgModule configuration we use in our application.

It allows us to test user interaction via clicks & input fields*/
