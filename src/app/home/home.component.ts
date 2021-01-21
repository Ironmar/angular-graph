import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {RocketModel} from '../../models/rocket.model';
import {ResponseModel} from '../../models/response.model';
import {GET_ROCKETS} from 'src/services/rockets.graphql';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rockets: Observable<RocketModel[]> | undefined;
  constructor(private apollo:Apollo) { }

  ngOnInit(): void {
    this.synch();
  }

  synch(): void{
    this.rockets = this.apollo.watchQuery<ResponseModel>({
      query: GET_ROCKETS,

    }).valueChanges.pipe(
      map((result) => result.data.rockets)
    );
  }

}
