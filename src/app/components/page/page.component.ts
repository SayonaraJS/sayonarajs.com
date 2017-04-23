import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

//Import our services
import { SayonaraPublicService } from '../../services/sayonara-public/sayonara-public.service';
import { RouteNavigatorService } from '../../services/route-navigator/route-navigator.service';
import { LoggerService } from '../../services/logger/logger.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {

  //If our page is ready to be displayed
  pageLoaded = false;

  page = {};

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
        let currentPageTitle = params['pageTitle'];
        //Reset our page
        this.pageLoaded = false;
        let sayonaraPage = this.sayonaraService
        .getSayonaraPage(currentPageTitle, success, () => {
          setTimeout(() => {
              this.pageLoaded = true;
          }, 100)
        });
        if(sayonaraPage && sayonaraPage.content) {
          this.routeNavigator.goToPage(currentPageTitle);
          this.page = sayonaraPage;
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
