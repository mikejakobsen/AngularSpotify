import { Component } from '@angular/core';
import {SpotifyService} from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [SpotifyService]
})
export class AppComponent {
  title = 'Live update?';
}
