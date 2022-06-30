import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private aFireAuth: AngularFireAuth) { }

  register(email: string, password: string) {
    return this.aFireAuth.createUserWithEmailAndPassword(email, password);
}

  login(email: string, password: string) {
    return this.aFireAuth.signInWithEmailAndPassword(email, password);
}

  getUserLogged(){
    return this.aFireAuth.authState;
}

  logout(){
    this.aFireAuth.signOut();
}

}
