import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../_services/general.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', 
  '../auth.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public gService: GeneralService) { }

  ngOnInit() {
  }

}
