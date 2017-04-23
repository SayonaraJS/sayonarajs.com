import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

//Import our services
import { SayonaraPublicService } from '../../services/sayonara-public/sayonara-public.service';
import { RouteNavigatorService } from '../../services/route-navigator/route-navigator.service';
import { LoggerService } from '../../services/logger/logger.service';

@Component({
  selector: 'app-entry-type',
  templateUrl: './entry-type.component.html',
  styleUrls: ['./entry-type.component.scss']
})
export class EntryTypeComponent implements OnInit {

  pageTitle = '';
  entryType = {};

  //Bind Html
  //http://stackoverflow.com/questions/31548311/angular-2-html-binding
  entryTypeContent = '<h1>Loading Page...</h1>'

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
        if(pageTitle && entryTypeTitle) {
          let sayonaraEntryType = this.sayonaraService
          .getSayonaraEntryType(pageTitle, entryTypeTitle,
            success, () => {});
          if(!sayonaraEntryType) {
            //Go to the default page
            this.routeNavigator.goToDefaultPage();
          }
          this.pageTitle = pageTitle;
          this.entryType = sayonaraEntryType;
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
