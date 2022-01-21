import { Component, OnInit } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  name ="Husen Telwala"
  constructor(private meta: Meta,private title: Title) {
    this.name="Husen Telwala";
    this.meta.addTags([
      {name: 'description', content: 'Husen Telwala about information'},
      {name: 'author', content: 'Husen Telwala'},
      {name: 'keywords', content: 'Husen Telwala'}
    ]);
    this.setTitle('About Husen Telwala');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
  }

  ngOnInit(): void {
  }

}
