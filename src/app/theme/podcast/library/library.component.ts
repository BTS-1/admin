import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../../_services/podcast.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor(public pService: PodcastService) { }

  ngOnInit() {
    this.pService.getPodcasts().then(
      x => console.log(x),
      err => console.error(err)
    );
  }

}
