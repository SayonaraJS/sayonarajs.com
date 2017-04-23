import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

//Import our services
import { SayonaraPublicService } from '../../services/sayonara-public/sayonara-public.service';
import { RouteNavigatorService } from '../../services/route-navigator/route-navigator.service';
import { LoggerService } from '../../services/logger/logger.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  pageTitle = '';
  entryTypeTitle = '';
  entry = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private sayonaraService: SayonaraPublicService,
    private routeNavigator: RouteNavigatorService
  ) { }

  ngOnInit() {
    //Get the sayonara site
    this.sayonaraService.getSayonaraSite().subscribe((success) => {
      //Success!
      //Then get our route params
      this.activatedRoute.params.subscribe((params) => {
        let pageTitle = params['pageTitle'];
        let entryTypeTitle = params['entryTypeTitle'];
        let entryTitle = params['entryTitle'];
        if(pageTitle && entryTypeTitle && entryTitle) {
          let sayonaraEntry = this.sayonaraService
          .getSayonaraEntry(pageTitle, entryTypeTitle, entryTitle,
            success, () => {});
          if(!sayonaraEntry) {
            //Go to the default page
            this.routeNavigator.goToDefaultPage();
          }
          this.pageTitle = pageTitle;
          this.entryTypeTitle = entryTypeTitle;
          this.entry = sayonaraEntry;
        } else {
          //Go to the default page
          this.routeNavigator.goToDefaultPage();
        }
      });
    }, (error) => {
      //Toggle the error on sayonara
      LoggerService.error('page error!');
      this.sayonaraService.toggleSayonaraError();
    });
  }

}
