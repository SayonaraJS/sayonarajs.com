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
  templateUrl: './entry-type.component.html'
})
export class EntryTypeComponent implements OnInit {

  pageTitle = '';
  entryType = {};
  docFilter = '';

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

  // Function to return if the entry is valid for the filter
  entryFilter(entry) {
    // Set all compared string to lower case and replace whitespace
    const entryTitle = entry.title.toLowerCase().replace(/\s+/g, '');
    let entryField = '';
    if(entry.customFields &&
    entry.customFields.fields &&
    entry.customFields.fields.length > 0) {
      entryField = entry.customFields.fields[0].toLowerCase().replace(/\s+/g, '');
    }

    const lowerCaseFilter = this.docFilter.toLowerCase().replace(/\s+/g, '');

    return entryTitle.includes(lowerCaseFilter) ||
      entryField.includes(lowerCaseFilter);
  }
}
