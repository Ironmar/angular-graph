import { Component } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GET_ROCKETS} from 'src/services/rockets.graphql';
import {RocketModel} from '../models/rocket.model';
import {ResponseModel} from '../models/response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: 'graph-angular';

}
