import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  link : any

  getValues(data:any){
      this.link = data.link
      this.router.navigate(['/generate',{"link":this.link}])
  }

}
