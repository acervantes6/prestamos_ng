import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private aFaireAuth: AngularFireAuth) { }

  register(email: string, password: string) {
    return this.aFaireAuth.createUserWithEmailAndPassword(email, password);
}

  login(email: string, password: string) {
    return this.aFaireAuth.signInWithEmailAndPassword(email, password);
}

  getUserLogged(){
    return this.aFaireAuth.authState;
}

  logout(){
    this.aFaireAuth.signOut();
}

}
