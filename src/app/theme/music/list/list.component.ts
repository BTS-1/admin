import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../_services/music.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public mService: MusicService) { }

  ngOnInit() {
    this.mService.getMusicList().then(
      x => console.log(x),
      err => console.error(err)
    );
  }

}
