import { Component, OnInit } from '@angular/core';
import { faStackOverflow,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name;
  imagePath;
  faStackOverflow;
  faGithub;
  faGlobe;
  constructor() {
    this.name="Husen Telwala";
    this.imagePath ="../../assets/images/"
    this.faStackOverflow = faStackOverflow;
    this.faGithub = faGithub;
    this.faGlobe = faGlobe;
   }

  ngOnInit(): void {

  }

}
