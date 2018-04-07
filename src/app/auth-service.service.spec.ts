import { TestBed, inject } from "@angular/core/testing";

import { AuthServiceService } from "./auth-service.service";

describe("AuthServiceService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthServiceService]
    });
  });

  it(
    "should be created",
    inject([AuthServiceService], (service: AuthServiceService) => {
      expect(service).toBeTruthy();
    })
  );
});

describe("Service:Auth", () => {
  let service: AuthServiceService;
  beforeEach(() => {
    service = new AuthServiceService();
  });
  afterEach(() => {
    service = null;
    localStorage.removeItem("token");
  });

  it("should return true when there is a token", () => {
    localStorage.setItem("token", "1234");
    expect(service.isAuthenticated()).toBeTruthy();
  });
  it("should return false if token not present", () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });
});
