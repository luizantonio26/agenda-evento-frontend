import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formularioDeCadastro:FormGroup
  constructor(public userService:UserService, private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    const userId = sessionStorage.getItem("userId")
    if(userId){
      this.router.navigate(['']);
    }
    this.criarForm(new User())
  }

  cadastrar(){
    this.userService.cadastro(this.formularioDeCadastro.value)
    .subscribe(
      data=>{
        sessionStorage.setItem("userId", data.user.id+"")
        this.router.navigate([''])
      },
      error=>{
        console.log("Usuario ou senha invalido", error)
      }
    )
  }

  criarForm(user: User){
    this.formularioDeCadastro = this.fb.group({
      nome: [user.nome],
      sobrenome: [user.sobrenome],
      email: [user.email],
      password: [user.password],
    });
  }
}
