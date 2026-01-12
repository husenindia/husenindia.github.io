import { Component, OnInit } from '@angular/core';
import { faLinkedin, faPinterest, faStackOverflow,faGithub, faBehanceSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Meta,Title } from '@angular/platform-browser';

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
  faEnvelope;
  constructor(private meta: Meta,private title: Title) {
    this.name="Husen Telwala";
    this.imagePath ="../../assets/images/";
    this.faEnvelope = faEnvelope;
    this.faStackOverflow = faStackOverflow;
    this.faGithub = faGithub;
    this.faGlobe = faGlobe;
    this.faBehanceSquare = faBehanceSquare;
    this.faPinterest = faPinterest;
    this.faLinkedin = faLinkedin;
    this.meta.addTags([
      {name: 'description', content: 'Husen Telwala Home page'},
      {name: 'author', content: 'Husen Telwala'},
      {name: 'keywords', content: 'Husen Telwala'}
    ]);
    this.setTitle('Husen Telwala');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
  }
  ngOnInit(): void {
  }

}
