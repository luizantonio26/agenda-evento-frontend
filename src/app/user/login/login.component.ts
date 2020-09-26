import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'

import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioDeLogin: FormGroup
  constructor(public userService:UserService, private fb: FormBuilder, private router:Router) {}

  ngOnInit(): void {
    const userId = sessionStorage.getItem("userId")
    if(userId){
      this.router.navigate(['']);
    }
    this.criarForm(new User())
  }


  logar(){
    this.userService.login(this.formularioDeLogin.value)
    .subscribe(
      user=>{
        sessionStorage.setItem("userId", user.user.id+"")
        this.router.navigate([''])
      },
      erro=>{
        alert("Usuario ou senha invalido "+ erro)
      }
    )
  }

  criarForm(user: User){
    this.formularioDeLogin = this.fb.group({
      email: [user.email],
      password: [user.password],
    });
  }
}
