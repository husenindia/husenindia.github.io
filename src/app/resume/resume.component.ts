import { Component, OnInit } from '@angular/core';
import { faLinkedin, faPinterest, faStackOverflow,faGithub, faBehanceSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  faStackOverflow;
  faGithub;
  faGlobe;
  faBehanceSquare;
  faPinterest;
  faLinkedin;
  faEnvelope;
  faPhone;
  constructor() { 
    this.faEnvelope = faEnvelope;
    this.faStackOverflow = faStackOverflow;
    this.faGithub = faGithub;
    this.faGlobe = faGlobe;
    this.faBehanceSquare = faBehanceSquare;
    this.faPinterest = faPinterest;
    this.faLinkedin = faLinkedin;
    this.faPhone = faPhone;
  }

  ngOnInit(): void {
  }

}
