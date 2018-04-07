import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { AuthServiceService } from "../auth-service.service";

//A Spy is a feature of Jasmine which lets you take an existing class, function, object and mock it in such a
//way that you can control what gets returned from functions.

describe("LoginComponent", () => {
  let component: LoginComponent;
  let service: AuthServiceService;

  beforeEach(() => {
    service = new AuthServiceService();
    component = new LoginComponent(service);
  });
  afterEach(() => {
    component = null;
    service = null;
  });

  it("canLogin should return false when user is not authenticated", () => {
    spyOn(service, "isAuthenticated").and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });
  it("canLogin should return true when user is  authenticated", () => {
    spyOn(service, "isAuthenticated").and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });
});
