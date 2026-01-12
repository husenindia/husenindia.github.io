import { Component } from '@angular/core';
import { faCoffee, faHome, faUser, faSuitcase, faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faCoffee = faCoffee;
  faHome = faHome;
  faUser = faUser;
  faSuitcase = faSuitcase;
  faFileAlt = faFileAlt;
  faEnvelope = faEnvelope;
  title = 'Husen Telwala';
}
