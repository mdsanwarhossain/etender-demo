import { TestBed } from '@angular/core/testing';
import {AuthService} from "./auth-service.service";

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for isAuthenticated', () => {
    expect(service.isAuthenticated()).toBe(true);
  });
});
