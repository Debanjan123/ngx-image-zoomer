import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-red-zoom';
  image:Blob
  imageURL:any
  URL: string = `https://fireflysemantics.github.io/i/service-parts-help/electrocardiogram-36732.png`;
  constructor(private h:HttpClient, private sanitizer: DomSanitizer){
  this.loadImage().subscribe(i=>
    {
      this.image = i
      this.imageURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.image));
      console.log(this.imageURL)
    })
  }
  call(){
    console.log(this.imageURL?.changingThisBreaksApplicationSecurity)
    return this.imageURL;
  }
  loadImage():Observable<Blob> {
    return this.h.get(this.URL, {
    responseType: "blob"
  });
}
}
