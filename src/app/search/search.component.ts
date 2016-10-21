import { Component } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Artist} from '../artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  searchStr: string;
  searchRes: Artist[];

  constructor(private _spotifyService:SpotifyService) { 

  }

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
      console.log(res.artists.items);
      this.searchRes = res.artists.items;
    });
  }

}
