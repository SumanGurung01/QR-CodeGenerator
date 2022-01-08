import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  link : any

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((receiveddata:any)=>{
      this.link = receiveddata.link
    })
  }

}
