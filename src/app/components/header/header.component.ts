import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any
  constructor(private route:Router, private userService:UserService) { }

  ngOnInit(): void {
    const userId = sessionStorage.getItem("userId")

    this.userService.getUser(+userId).subscribe(
      data=>{
        this.user = data
      }
    )
  }


  logout(){
    sessionStorage.removeItem("userId")
    this.route.navigate(["/login"])
  }
}
