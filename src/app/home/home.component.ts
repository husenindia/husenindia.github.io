import { Component, OnInit } from '@angular/core';
import { faLinkedin, faPinterest, faStackOverflow,faGithub, faBehanceSquare } from '@fortawesome/free-brands-svg-icons';
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
  faBehanceSquare;
  faPinterest;
  faLinkedin;
  constructor() {
    this.name="Husen Telwala";
    this.imagePath ="../../assets/images/"
    this.faStackOverflow = faStackOverflow;
    this.faGithub = faGithub;
    this.faGlobe = faGlobe;
    this.faBehanceSquare = faBehanceSquare;
    this.faPinterest = faPinterest;
    this.faLinkedin = faLinkedin;
  }

  ngOnInit(): void {

  }

}
