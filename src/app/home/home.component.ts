import { Component } from '@angular/core';
import { urlService } from '../services/url.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Regex for URL validation
  urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
  isUrlValid = true
  longUrl = "";
  shortUrl=""

  constructor(private urlService: urlService) {}

  validateInput(event: any) {
    this.isUrlValid = this.urlRegex.test(event.target.value)
  }

  submit() {
    if(!this.isUrlValid) {
      return
    }
    this.urlService.createShortUrl(this.longUrl).subscribe(result => {
      this.shortUrl = result.shortUrl;
    }, error => {
      console.error(error)
    },)
  }
}
