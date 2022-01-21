import { Component, OnInit } from '@angular/core';
import { faLinkedin, faPinterest, faStackOverflow,faGithub, faBehanceSquare } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
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
  constructor(private meta: Meta,private title: Title) {
    this.name="Husen Telwala";
    this.imagePath ="../../assets/images/"
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
    this.setTitle('Home Page');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
  }
  ngOnInit(): void {
  }

}
