import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {
	albumId:string;
	album:AlbumData;
	tracks:TrackData[];


  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) { }

  async ngOnInit() {
  	this.albumId = this.route.snapshot.paramMap.get('id');
  	//TODO: inject spotifyService and use it to get the album data and the tracks for the album
    //let [alb, tr] = await Promise.all([this.spotifyService.getAlbum(this.albumId), this.spotifyService.getTracksForAlbum(this.albumId)]);
    //this.album = alb;
    //this.tracks = tr;
    this.album = await this.spotifyService.getAlbum(this.albumId);
    this.tracks = await this.spotifyService.getTracksForAlbum(this.albumId);
    for (var track of this.tracks) {
      track.album = this.album;
    }
    return;
  
  }

}
