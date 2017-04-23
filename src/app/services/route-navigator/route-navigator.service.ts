import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

//Import our sayonara service
import { SayonaraPublicService } from '../sayonara-public/sayonara-public.service';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class RouteNavigatorService {

  //Our pages Array
  private sayonaraPages: any;
  //Our current page
  private currentPage = '';
  // Our current Entry Type
  private currentEntryType = '';
  // Our current Entry
  private currentEntry = '';

  constructor(
    private router: Router,
    private sayonaraService: SayonaraPublicService
  ) {
    this.sayonaraService.getSayonaraSite().subscribe((success: any) => {
      this.sayonaraPages = success.pages;
    })
  }

  //Function to go to the default page
  goToDefaultPage() {
    //Get the default page (zero index)
    let defaultPageTitle = this.sayonaraPages[0].title
    this.goToPage(defaultPageTitle);
  }

  //Function to go to a page from the sidenav
  goToPage(pageTitle: string, sidenav?: any) {
      //Go to the route
      this.router.navigate(['/page/' + pageTitle]);
      this.currentPage = pageTitle;
      this.currentEntryType = '';
      this.currentEntry = '';
      //Toggle the sidenav
      if(sidenav) sidenav.toggle();
  }

  //Function to go to an entryType
  goToEntryType(pageTitle: string, entryTypeTitle: string) {
      //Go to the route
      this.router.navigate(['/page/' + pageTitle + '/type/' + entryTypeTitle]);
      this.currentEntryType = entryTypeTitle;
      this.currentEntry = '';
  }

  //Function to go to an entry
  goToEntry(pageTitle: string, entryTypeTitle: string, entryTitle: string) {
      //Go to the route
      this.router.navigate(['/page/' + pageTitle + '/type/' +
        entryTypeTitle + '/entry/' + entryTypeTitle]);
      this.currentEntry = entryTitle;
  }

  //Function to return if the current title refers to the current page
  isCurrentPage(title: string) {
      return title == this.currentPage;
  }

  // Function to return the current page
  getCurrentPage() {
    return this.currentPage;
  }

}
