import { Component, OnInit } from '@angular/core';
import { urlService } from '../services/url.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  allUrls: any = []

  constructor(private urlService: urlService) { }

  ngOnInit(): void {
    this.getAllLink()
  }

  getAllLink() {
    this.urlService.getUrls().subscribe(response => {
      this.allUrls = response;
    }, 
    error => {
      console.error("Error occured")
    })
  }

}
