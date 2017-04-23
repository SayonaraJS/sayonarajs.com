import { Injectable, Inject } from '@angular/core';

//Get the browser document for location
import { DOCUMENT } from '@angular/platform-browser'

//Make Http requests
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//Our environment
import { environment } from '../../../environments/environment';


@Injectable()
export class SayonaraPublicService {

  private sayonaraPublicPath = '/api/public';  // URL to web API

  private sayonaraSiteJson: any;

  private sayonaraError = false;

  constructor(
    private http: Http,
    @Inject(DOCUMENT) private document: any
  ) { }

  //Get the site, and allow passing a callback
  getSayonaraSite() {
    //Get the full Url, dont use port 8000 for production
    let sayonaraUrl;
    if(!environment.production) {
      //Point to dev sayonara
      sayonaraUrl = '//' + this.document.location.hostname + ':8000' + this.sayonaraPublicPath;
    } else {
      //Point to prod sayonara
      sayonaraUrl = '//' + this.document.location.host + this.sayonaraPublicPath;
    }

    //Return an observable
    return new Observable((observer) => {

      //Check if we already have the json
      if(this.sayonaraSiteJson) {
        observer.next(this.sayonaraSiteJson);
        return;
      }

      //If not request it
      this.http.get(sayonaraUrl)
        .map(res => res.json())
        .subscribe((success) => {
          //Success!
          //Save/cache our site json
          this.sayonaraSiteJson = success;

          //return to our observer
          observer.next(success);
        }, (error) => {
          //Error!
          observer.error(error);
        }, () => {
          //Completed
        });
    });
  }

  //Function to toggle the sayonara Error
  toggleSayonaraError() {
      this.sayonaraError = !this.sayonaraError;
  }

  //Function to return the sayonara error
  getSayonaraError() {
      return this.sayonaraError;
  }

  //Function to sort sayonara arrays by the object order attribute
  sortByOrder(sayonaraArray) {
    //Next, sort by the order
    sayonaraArray.sort((alice: any, bob: any) => {
      if (alice['order'] < bob['order'] ) {
        return -1;
      } else if (alice['order']  > bob['order'] ) {
        return 1;
      } else {
        return 0;
      }
    });

    //Return the sorted array by order
    return sayonaraArray;
  }

  //Function to show a page from the site json
  getSayonaraPage(title: String, siteJson: any, callback: any): any {
    //Loop through the site Json
    let foundPage = false;
    siteJson.pages.some((page) => {
      if(page.title.toLowerCase() == title.toLowerCase()) {
        //Page found!
        //Return the page
        foundPage = page;
        if(callback) callback();
        return true;
      }
      //Page not found, keep going
      return false;
    });

    //Return the found page
    return foundPage;
  }

  // Function to return a entry type inside a page, by it's title
  getSayonaraEntryType(pageTitle: string, entryTypeTitle: string,
    siteJson: any, callback: any): any {
    // Get the page
    let sayonaraPage = this.getSayonaraPage(pageTitle, siteJson, false);
    // Then search the page for the entry type
    let foundEntryType = false;
    if(!sayonaraPage.entryTypes) return false;
    sayonaraPage.entryTypes.some((entryType) => {
      if(entryTypeTitle === entryType.title) {
        foundEntryType = entryType;
        return true;
      }
      return false;
    });

    return foundEntryType;
  }

  // Function to return a entry type inside a page, by it's title
  getSayonaraEntry(pageTitle: string, entryTypeTitle: string,
    entryTitle: string, siteJson: any, callback: any): any {
    // Get the entry type
    let sayonaraEntryType = this.getSayonaraEntryType(pageTitle, entryTypeTitle,
      siteJson, false);
    // Then search the page for the entry type
    let foundEntry = false;
    if(!sayonaraEntryType.entries) return false;
    sayonaraEntryType.entries.some((entry) => {
      if(entryTitle === entry.title) {
        foundEntry = entry;
        return true;
      }
      return false;
    });

    return foundEntry;
  }
}
