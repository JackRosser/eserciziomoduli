import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return true; // Qui potresti aggiungere logica di controllo se ti serve
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const isLoggedIn = false; // Simuliamo una logica per controllare se l'utente è loggato

    if (!isLoggedIn) {
      // Se l'utente non è loggato, reindirizzalo alla Home
      this.router.navigate(['/home']);
      return false;
    }

    return true; // Se l'utente è loggato, consenti l'accesso
  }
}
