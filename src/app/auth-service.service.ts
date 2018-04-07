import { Injectable } from "@angular/core";

@Injectable()
export class AuthServiceService {
  constructor() {}
  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }
}
