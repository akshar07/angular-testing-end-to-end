import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { Injectable } from "@angular/core";

class MockAuthService {
  authenticated = false;
  isAuthenticated() {
    return this.authenticated;
  }
}
describe("LoginComponent", () => {
  let component: LoginComponent;
  let service: MockAuthService;

  beforeEach(() => {
    service = new MockAuthService();
    component = new LoginComponent(service);
  });
  afterEach(() => {
    component = null;
    service = null;
  });

  it("canLogin should return false when user is not authenticated", () => {
    service.authenticated = false;
    expect(component.needsLogin()).toBeTruthy();
  });
  it("canLogin should return true when user is  authenticated", () => {
    service.authenticated = true;
    expect(component.needsLogin()).toBeFalsy();
  });
});
