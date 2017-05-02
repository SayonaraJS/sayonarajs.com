webpackJsonp([0,3],{

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 153;


/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(166);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/aaron/vagrantBox/source/sayonarajs.com/src/main.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_sayonara_error_sayonara_error_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_safe_html_safe_html_pipe__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_entry_type_entry_type_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_entry_entry_component__ = __webpack_require__(163);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Material Design
//https://github.com/jelbourn/material2-app








//Declare our routes
//https://angular.io/docs/ts/latest/guide/router.html
var appRoutes = [
    { path: 'page/:pageTitle', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_component__["a" /* PageComponent */] },
    { path: 'page/:pageTitle/type/:entryTypeTitle', component: __WEBPACK_IMPORTED_MODULE_11__components_entry_type_entry_type_component__["a" /* EntryTypeComponent */] },
    { path: 'page/:pageTitle/type/:entryTypeTitle/entry/:entryTitle', component: __WEBPACK_IMPORTED_MODULE_12__components_entry_entry_component__["a" /* EntryComponent */] },
    { path: '**', redirectTo: 'page/notfound' },
];
// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: '**', component: PageNotFoundComponent }
// ];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_page_page_component__["a" /* PageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_sayonara_error_sayonara_error_component__["a" /* SayonaraErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pipes_safe_html_safe_html_pipe__["a" /* SafeHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_11__components_entry_type_entry_type_component__["a" /* EntryTypeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_entry_entry_component__["a" /* EntryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */].forRoot()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/aaron/vagrantBox/source/sayonarajs.com/src/app.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sayonara_public_sayonara_public_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_route_navigator_route_navigator_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_logger_logger_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryTypeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Import our services



var EntryTypeComponent = (function () {
    function EntryTypeComponent(activatedRoute, sayonaraService, routeNavigator) {
        this.activatedRoute = activatedRoute;
        this.sayonaraService = sayonaraService;
        this.routeNavigator = routeNavigator;
        this.pageTitle = '';
        this.docFilter = '';
    }
    EntryTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get the sayonara site
        this.sayonaraService.getSayonaraSite().subscribe(function (success) {
            //Success!
            //Then get our route params
            _this.activatedRoute.params.subscribe(function (params) {
                var pageTitle = params['pageTitle'];
                var entryTypeTitle = params['entryTypeTitle'];
                if (pageTitle && entryTypeTitle) {
                    var sayonaraEntryType = _this.sayonaraService
                        .getSayonaraEntryType(pageTitle, entryTypeTitle, success, function () { });
                    if (!sayonaraEntryType) {
                        //Go to the default page
                        _this.routeNavigator.goToDefaultPage();
                    }
                    _this.pageTitle = pageTitle;
                    _this.entryType = sayonaraEntryType;
                }
                else {
                    //Go to the default page
                    _this.routeNavigator.goToDefaultPage();
                }
            });
        }, function (error) {
            //Toggle the error on sayonara
            __WEBPACK_IMPORTED_MODULE_5__services_logger_logger_service__["a" /* LoggerService */].error('page error!');
            _this.sayonaraService.toggleSayonaraError();
        });
    };
    // Function to return entries sorted by their titles
    EntryTypeComponent.prototype.getSortedEntries = function () {
        // Ensure we have the correct values
        if (!this.entryType ||
            !this.entryType.entries)
            return false;
        // Return the sorted entry list
        return this.entryType.entries.sort(function (left, right) {
            if (left.name < right.name)
                return -1;
            if (left.name > right.name)
                return 1;
            return 0;
        });
    };
    // Function to return if the entry is valid for the filter
    EntryTypeComponent.prototype.entryFilter = function (entry) {
        // Set all compared string to lower case and replace whitespace
        var entryTitle = entry.title.toLowerCase().replace(/\s+/g, '');
        var entryField = '';
        if (entry.customFields &&
            entry.customFields.fields &&
            entry.customFields.fields.length > 0) {
            entryField = entry.customFields.fields[0].toLowerCase().replace(/\s+/g, '');
        }
        var lowerCaseFilter = this.docFilter.toLowerCase().replace(/\s+/g, '');
        return entryTitle.includes(lowerCaseFilter) ||
            entryField.includes(lowerCaseFilter);
    };
    return EntryTypeComponent;
}());
EntryTypeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-entry-type',
        template: __webpack_require__(323)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_sayonara_public_sayonara_public_service__["a" /* SayonaraPublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_sayonara_public_sayonara_public_service__["a" /* SayonaraPublicService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_route_navigator_route_navigator_service__["a" /* RouteNavigatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_route_navigator_route_navigator_service__["a" /* RouteNavigatorService */]) === "function" && _c || Object])
], EntryTypeComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/aaron/vagrantBox/source/sayonarajs.com/src/entry-type.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sayonara_public_sayonara_public_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_route_navigator_route_navigator_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_logger_logger_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Import our services



var EntryComponent = (function () {
    function EntryComponent(activatedRoute, sayonaraService, routeNavigator) {
        this.activatedRoute = activatedRoute;
        this.sayonaraService = sayonaraService;
        this.routeNavigator = routeNavigator;
        this.pageTitle = '';
        this.entryTypeTitle = '';
        this.entry = {};
    }
    EntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get the sayonara site
        this.sayonaraService.getSayonaraSite().subscribe(function (success) {
            //Success!
            //Then get our route params
            _this.activatedRoute.params.subscribe(function (params) {
                var pageTitle = params['pageTitle'];
                var entryTypeTitle = params['entryTypeTitle'];
                var entryTitle = params['entryTitle'];
                if (pageTitle && entryTypeTitle && entryTitle) {
                    var sayonaraEntry = _this.sayonaraService
                        .getSayonaraEntry(pageTitle, entryTypeTitle, entryTitle, success, function () { });
                    if (!sayonaraEntry) {
                        //Go to the default page
                        _this.routeNavigator.goToDefaultPage();
                    }
                    _this.pageTitle = pageTitle;
                    _this.entryTypeTitle = entryTypeTitle;
                    _this.entry = sayonaraEntry;
                }
                else {
                    //Go to the default page
                    _this.routeNavigator.goToDefaultPage();
                }
            });
        }, function (error) {
            //Toggle the error on sayonara
            __WEBPACK_IMPORTED_MODULE_5__services_logger_logger_service__["a" /* LoggerService */].error('page error!');
            _this.sayonaraService.toggleSayonaraError();
        });
    };
    return EntryComponent;
}());
EntryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-entry',
        template: __webpack_require__(324)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_sayonara_public_sayonara_public_service__["a" /* SayonaraPublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_sayonara_public_sayonara_public_service__["a" /* SayonaraPublicService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_route_navigator_route_navigator_service__["a" /* RouteNavigatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_route_navigator_route_navigator_service__["a" /* RouteNavigatorService */]) === "function" && _c || Object])
], EntryComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/aaron/vagrantBox/source/sayonarajs.com/src/entry.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sayonara_public_sayonara_public_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_route_navigator_route_navigator_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_logger_logger_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Import our services



var PageComponent = (function () {
    function PageComponent(activatedRoute, sayonaraService, routeNavigator) {
        this.activatedRoute = activatedRoute;
        this.sayonaraService = sayonaraService;
        this.routeNavigator = routeNavigator;
        //If our page is ready to be displayed
        this.pageLoaded = false;
        this.page = {};
    }
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get the sayonara site
        this.sayonaraService.getSayonaraSite().subscribe(function (success) {
            //Success!
            //Then get our route params
            _this.activatedRoute.params.subscribe(function (params) {
                var currentPageTitle = params['pageTitle'];
                //Reset our page
                _this.pageLoaded = false;
                var sayonaraPage = _this.sayonaraService
                    .getSayonaraPage(currentPageTitle, success, function () {
                    setTimeout(function () {
                        _this.pageLoaded = true;
                    }, 100);
                });
                if (sayonaraPage && sayonaraPage.content) {
                    _this.routeNavigator.goToPage(currentPageTitle);
                    _this.page = sayonaraPage;
                }
                else {
                    //Go to the default page
                    _this.routeNavigator.goToDefaultPage();
                }
            });
        }, function (error) {
            //Toggle the error on sayonara
            __WEBPACK_IMPORTED_MODULE_5__services_logger_logger_service__["a" /* LoggerService */].error('page error!');
            _this.sayonaraService.toggleSayonaraError();
        });
    };
    return PageComponent;
}());
PageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-page',
        template: __webpack_require__(325)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_sayonara_public_sayonara_public_service__["a" /* SayonaraPublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_sayonara_public_sayonara_public_service__["a" /* SayonaraPublicService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_route_navigator_route_navigator_service__["a" /* RouteNavigatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_route_navigator_route_navigator_service__["a" /* RouteNavigatorService */]) === "function" && _c || Object])
], PageComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/aaron/vagrantBox/source/sayonarajs.com/src/page.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SayonaraErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SayonaraErrorComponent = (function () {
    function SayonaraErrorComponent() {
    }
    SayonaraErrorComponent.prototype.ngOnInit = function () {
    };
    return SayonaraErrorComponent;
}());
SayonaraErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'sayonara-error',
        template: __webpack_require__(326)
    }),
    __metadata("design:paramtypes", [])
], SayonaraErrorComponent);

//# sourceMappingURL=/Users/aaron/vagrantBox/source/sayonarajs.com/src/sayonara-error.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(98);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(161);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/aaron/vagrantBox/source/sayonarajs.com/src/index.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    // Filter to not remove style tags: http://stackoverflow.com/questions/39628007/angular2-innerhtml-binding-remove-style-attribute
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    return SafeHtmlPipe;
}());
SafeHtmlPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* Pipe */])({
        name: 'safeHtml'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* DomSanitizer */]) === "function" && _a || Object])
], SafeHtmlPipe);

var _a;
//# sourceMappingURL=/Users/aaron/vagrantBox/source/sayonarajs.com/src/safe-html.pipe.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/aaron/vagrantBox/source/sayonarajs.com/src/polyfills.js.map

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

module.exports = "<!-- Place our header / nav, only show if now error -->\n<!-- https://github.com/jelbourn/material2-app/blob/master/src/app/app.component.html -->\n<md-sidenav-container class=\"nav\">\n\n  <!-- Mobile Nav Bar -->\n  <md-sidenav #sidenav mode=\"side\" class=\"nav__sidenav\">\n\n    <!-- title of the sidenav -->\n    <h2 class=\"center-text animated fadeIn\">\n      Navigation\n    </h2>\n    <hr>\n\n    <!-- List all of our page titles -->\n    <div class=\"nav__sidenav__page-link animated fadeInLeft\"\n        [hidden]=\"sayonaraService.getSayonaraError()\"\n        *ngFor=\"let page of navPages; let pageIndex = index;\"\n        [ngClass]=\"{'nav__sidenav__page-link--active-page': routeNavigator.isCurrentPage(page.title)}\"\n        (click)=\"routeNavigator.goToPage(page.title, sidenav)\">\n        <div class=\"nav__sidenav__page-link__text\">\n          {{page.title}}\n        </div>\n    </div>\n\n    <!-- Close Link -->\n    <div class=\"nav__sidenav__page-link animated fadeInLeft\"\n        (click)=\"sidenav.toggle()\">\n        <div class=\"nav__sidenav__page-link__text\">Close</div>\n    </div>\n  </md-sidenav>\n\n  <!-- Desktop Nav Bar -->\n  <md-toolbar color=\"primary\"\n    class=\"nav__desktop-nav\">\n    <button class=\"nav__icon-button\" [hidden]=\"sayonaraError\" (click)=\"sidenav.toggle()\">\n      <i class=\"material-icons app-toolbar-menu\">menu</i>\n    </button>\n\n    <div class=\"nav__title\">\n        {{siteTitle}}\n    </div>\n\n    <!-- List all of our page titles -->\n    <div class=\"nav__page-link\"\n        [hidden]=\"sayonaraService.getSayonaraError()\"\n        *ngFor=\"let page of navPages\"\n        [ngClass]=\"{'nav__page-link--active-page': routeNavigator.isCurrentPage(page.title)}\"\n        (click)=\"routeNavigator.goToPage(page.title)\">\n        {{page.title}}\n    </div>\n\n    <span class=\"app-toolbar-filler\"></span>\n  </md-toolbar>\n\n  <!-- Overlay to show when sidenav opened -->\n  <div class=\"nav__overlay\"\n      [ngClass]=\"{'nav__overlay--show': sidenav.opened}\"\n      (click)=\"clickOutsideSideNav(sidenav)\">\n  </div>\n\n<!-- Main Application -->\n<div class=\"c-app\" [hidden]=\"sayonaraService.getSayonaraError()\">\n    <router-outlet></router-outlet>\n    <!-- Routed views go here -->\n\n    <!-- Place our footer -->\n</div>\n\n<!-- Our view if there is a sayonara error -->\n<div class=\"c-app--error\" [hidden]=\"!sayonaraService.getSayonaraError()\">\n    <!-- Show the Error Component -->\n    <sayonara-error></sayonara-error>\n</div>\n\n</md-sidenav-container>\n"

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

module.exports = "<div class=\"c-entry-type animated fadeIn\">\n\n  <div *ngIf=\"entryType\">\n    <h1 class=\"center-text\">\n      {{entryType.title}}\n    </h1>\n    <div>\n      {{entryType.description}}\n    </div>\n\n    <!-- Search box to look through the documentation entries -->\n    <div class=\"c-entry-type__search\">\n      <md-input-container class=\"c-entry-type__search__input\">\n        <input mdInput placeholder=\"Search for a doc...\" [(ngModel)]=\"docFilter\">\n      </md-input-container>\n    </div>\n  </div>\n\n  <div class=\"c-entry-type__entry-list center-text\">\n    <div class=\"c-entry-type__entry-list__entry\"\n      *ngFor=\"let entry of getSortedEntries()\">\n      <div class=\"c-entry-type__entry-list__entry__title\"\n      (click)=\"routeNavigator\n        .goToEntry(pageTitle, entryType.title, entry.title)\"\n      *ngIf=\"entryFilter(entry)\">\n        {{entry.title}}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports = "<div class=\"c-entry animated fadeIn\">\n  <h1 class=\"c-entry__title center-text\">\n    {{entryTypeTitle}}: {{entry.title}}\n  </h1>\n\n  <div class=\"c-entry__content\"\n    [innerHTML]=\"entry.content | safeHtml\">\n  </div>\n</div>\n"

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = "<!-- Wrap in Ng-show for animation on page change -->\n<div class=\"c-page animated fadeIn\" [hidden]=\"!pageLoaded\">\n    <!-- Page Content -->\n    <div [innerHTML]=\"page.content | safeHtml\">\n    </div>\n\n    <!-- Repeat through all of our entry types -->\n    <div class=\"c-page__entry-container\">\n      <md-card class=\"c-page__entry-container__entry\"\n        *ngFor=\"let entryType of page.entryTypes\">\n          <!-- List the entry type -->\n          <h3 class=\" c-page__entry-container__entry__title\n          center-text\">\n            <a (click)=\"routeNavigator.goToEntryType(page.title, entryType.title)\">\n              {{entryType.title}}\n            </a>\n          </h3>\n          <div class=\"center-text\">\n            {{entryType.description}}\n          </div>\n      </md-card>\n    </div>\n</div>\n"

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center-text\">Uh Oh!</h1>\n\n<div class=\"center-text\">\n    Seems like Something went wrong with getting the website content from the <a href=\"http://sayonarajs.com\" target=\"_blank\">Sayonara</a> API. This is kinda lame. I am sorry about that. I bet I am out right now having a great time, and you're just trying to browse the web, or do your job, and this website is down. Dude. My bad. I guess that is what I get for building my own CMS/Framework thingy, and rebuilding my own website on top of it when it is still in Alpha. I thought it would be cool though! Well, I guess it is cool when it works. Want to hear a joke in the meantime? [\"hip\",\"hip\"] (Hip hip array!). Ha! You get it? It's an array of two \"hip\"'s. I thought it was funny. I found it on Reddit. Anyways, back to the matter at hand. If you're still with me, perhaps it was your internet connection that failed to make the reqyest to the sayonara page?\n\n    You can try and <a href=\"\">reload the page</a> if you are up to it! Anyways, I hope to hear from you soon! And if you would be so kind, you can e-mail me at: <a href=\"mailto:aaron@aaronthedev.com\">aaron@aaronthedev.com</a>, to let me know my website is acting up. Thank you! And, Good luck!\n</div>\n"

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(154);


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SayonaraPublicService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

//Get the browser document for location

//Make Http requests



//Our environment

var SayonaraPublicService = (function () {
    function SayonaraPublicService(http, document) {
        this.http = http;
        this.document = document;
        this.sayonaraPublicPath = '/api/public'; // URL to web API
        this.sayonaraError = false;
    }
    //Get the site, and allow passing a callback
    SayonaraPublicService.prototype.getSayonaraSite = function () {
        var _this = this;
        //Get the full Url, dont use port 8000 for production
        var sayonaraUrl;
        if (!__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
            //Point to dev sayonara
            sayonaraUrl = '//' + this.document.location.hostname + ':8000' + this.sayonaraPublicPath;
        }
        else {
            //Point to prod sayonara
            sayonaraUrl = '//' + this.document.location.host + this.sayonaraPublicPath;
        }
        //Return an observable
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            //Check if we already have the json
            if (_this.sayonaraSiteJson) {
                observer.next(_this.sayonaraSiteJson);
                return;
            }
            //If not request it
            _this.http.get(sayonaraUrl)
                .map(function (res) { return res.json(); })
                .subscribe(function (success) {
                //Success!
                //Save/cache our site json
                _this.sayonaraSiteJson = success;
                //return to our observer
                observer.next(success);
            }, function (error) {
                //Error!
                observer.error(error);
            }, function () {
                //Completed
            });
        });
    };
    //Function to toggle the sayonara Error
    SayonaraPublicService.prototype.toggleSayonaraError = function () {
        this.sayonaraError = !this.sayonaraError;
    };
    //Function to return the sayonara error
    SayonaraPublicService.prototype.getSayonaraError = function () {
        return this.sayonaraError;
    };
    //Function to sort sayonara arrays by the object order attribute
    SayonaraPublicService.prototype.sortByOrder = function (sayonaraArray) {
        //Next, sort by the order
        sayonaraArray.sort(function (alice, bob) {
            if (alice['order'] < bob['order']) {
                return -1;
            }
            else if (alice['order'] > bob['order']) {
                return 1;
            }
            else {
                return 0;
            }
        });
        //Return the sorted array by order
        return sayonaraArray;
    };
    //Function to show a page from the site json
    SayonaraPublicService.prototype.getSayonaraPage = function (title, siteJson, callback) {
        //Loop through the site Json
        var foundPage = false;
        siteJson.pages.some(function (page) {
            if (page.title.toLowerCase() == title.toLowerCase()) {
                //Page found!
                //Return the page
                foundPage = page;
                if (callback)
                    callback();
                return true;
            }
            //Page not found, keep going
            return false;
        });
        //Return the found page
        return foundPage;
    };
    // Function to return a entry type inside a page, by it's title
    SayonaraPublicService.prototype.getSayonaraEntryType = function (pageTitle, entryTypeTitle, siteJson, callback) {
        // Get the page
        var sayonaraPage = this.getSayonaraPage(pageTitle, siteJson, false);
        // Then search the page for the entry type
        var foundEntryType = false;
        if (!sayonaraPage.entryTypes)
            return false;
        sayonaraPage.entryTypes.some(function (entryType) {
            if (entryTypeTitle === entryType.title) {
                foundEntryType = entryType;
                return true;
            }
            return false;
        });
        return foundEntryType;
    };
    // Function to return a entry type inside a page, by it's title
    SayonaraPublicService.prototype.getSayonaraEntry = function (pageTitle, entryTypeTitle, entryTitle, siteJson, callback) {
        // Get the entry type
        var sayonaraEntryType = this.getSayonaraEntryType(pageTitle, entryTypeTitle, siteJson, false);
        // Then search the page for the entry type
        var foundEntry = false;
        if (!sayonaraEntryType.entries)
            return false;
        sayonaraEntryType.entries.some(function (entry) {
            if (entryTitle === entry.title) {
                foundEntry = entry;
                return true;
            }
            return false;
        });
        return foundEntry;
    };
    return SayonaraPublicService;
}());
SayonaraPublicService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object, Object])
], SayonaraPublicService);

var _a;
//# sourceMappingURL=/Users/aaron/vagrantBox/source/sayonarajs.com/src/sayonara-public.service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Our environment

var LoggerService = (function () {
    function LoggerService() {
    }
    //Debug Logging
    LoggerService.debug = function (log, json) {
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production)
            return;
        if (json) {
            console.debug(log, json);
            return;
        }
        console.debug(log);
    };
    //Error Logging
    LoggerService.error = function (log, json) {
        //Showing errors on production
        //if(environment.production) return;
        if (json) {
            console.error(log, json);
            return;
        }
        console.error(log);
    };
    return LoggerService;
}());
LoggerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LoggerService);

//# sourceMappingURL=/Users/aaron/vagrantBox/source/sayonarajs.com/src/logger.service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sayonara_public_sayonara_public_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteNavigatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Import our sayonara service

var RouteNavigatorService = (function () {
    function RouteNavigatorService(router, sayonaraService) {
        var _this = this;
        this.router = router;
        this.sayonaraService = sayonaraService;
        //Our current page
        this.currentPage = '';
        // Our current Entry Type
        this.currentEntryType = '';
        // Our current Entry
        this.currentEntry = '';
        this.sayonaraService.getSayonaraSite().subscribe(function (success) {
            _this.sayonaraPages = success.pages;
        });
    }
    //Function to go to the default page
    RouteNavigatorService.prototype.goToDefaultPage = function () {
        //Get the default page (zero index)
        var defaultPageTitle = this.sayonaraPages[0].title;
        this.goToPage(defaultPageTitle);
    };
    //Function to go to a page from the sidenav
    RouteNavigatorService.prototype.goToPage = function (pageTitle, sidenav) {
        //Go to the route
        this.router.navigate(['/page/' + pageTitle]);
        this.currentPage = pageTitle;
        this.currentEntryType = '';
        this.currentEntry = '';
        //Toggle the sidenav
        if (sidenav)
            sidenav.toggle();
    };
    //Function to go to an entryType
    RouteNavigatorService.prototype.goToEntryType = function (pageTitle, entryTypeTitle) {
        //Go to the route
        this.router.navigate(['/page/' + pageTitle + '/type/' + entryTypeTitle]);
        this.currentEntryType = entryTypeTitle;
        this.currentEntry = '';
    };
    //Function to go to an entry
    RouteNavigatorService.prototype.goToEntry = function (pageTitle, entryTypeTitle, entryTitle) {
        //Go to the route
        this.router.navigate(['/page/' + pageTitle + '/type/' +
                entryTypeTitle + '/entry/' + entryTitle]);
        this.currentEntry = entryTitle;
    };
    //Function to return if the current title refers to the current page
    RouteNavigatorService.prototype.isCurrentPage = function (title) {
        return title == this.currentPage;
    };
    // Function to return the current page
    RouteNavigatorService.prototype.getCurrentPage = function () {
        return this.currentPage;
    };
    return RouteNavigatorService;
}());
RouteNavigatorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__sayonara_public_sayonara_public_service__["a" /* SayonaraPublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__sayonara_public_sayonara_public_service__["a" /* SayonaraPublicService */]) === "function" && _b || Object])
], RouteNavigatorService);

var _a, _b;
//# sourceMappingURL=/Users/aaron/vagrantBox/source/sayonarajs.com/src/route-navigator.service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    envName: 'prod'
};
//# sourceMappingURL=/Users/aaron/vagrantBox/source/sayonarajs.com/src/environment.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sayonara_public_sayonara_public_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_route_navigator_route_navigator_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_logger_logger_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Import Our Services



//Style URLS will be importes by the styles.scss
var AppComponent = (function () {
    function AppComponent(sayonaraService, routeNavigator) {
        this.sayonaraService = sayonaraService;
        this.routeNavigator = routeNavigator;
        //The Website Title
        this.siteTitle = '';
        //Array of titles of pages for the nav bar
        this.navPages = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get a reference to this
        var self = this;
        //Make the request
        this.sayonaraService.getSayonaraSite().subscribe(function (success) {
            //Got the json!
            __WEBPACK_IMPORTED_MODULE_3__services_logger_logger_service__["a" /* LoggerService */].debug("Sayonara API Success Response: ", success);
            //Set the site title
            _this.siteTitle = success.siteName;
            _this.getNavPages(success);
            //Page component will handle loading the default page
        }, function (error) {
            _this.sayonaraService.toggleSayonaraError();
            __WEBPACK_IMPORTED_MODULE_3__services_logger_logger_service__["a" /* LoggerService */].error("Sayonara API error: ", error);
        });
    };
    //Function to close the sidenav
    AppComponent.prototype.clickOutsideSideNav = function (sidenav) {
        if (sidenav.opened)
            sidenav.toggle();
    };
    //Get all the titles of the pages from the site json
    AppComponent.prototype.getNavPages = function (siteJson) {
        var pagesArray = [];
        siteJson.pages.forEach(function (page) {
            if (page.title)
                pagesArray.push(page);
        });
        this.navPages = this.sayonaraService.sortByOrder(pagesArray);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(322),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_sayonara_public_sayonara_public_service__["a" /* SayonaraPublicService */], __WEBPACK_IMPORTED_MODULE_2__services_route_navigator_route_navigator_service__["a" /* RouteNavigatorService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_sayonara_public_sayonara_public_service__["a" /* SayonaraPublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_sayonara_public_sayonara_public_service__["a" /* SayonaraPublicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_route_navigator_route_navigator_service__["a" /* RouteNavigatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_route_navigator_route_navigator_service__["a" /* RouteNavigatorService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=/Users/aaron/vagrantBox/source/sayonarajs.com/src/app.component.js.map

/***/ })

},[377]);
//# sourceMappingURL=main.bundle.js.map