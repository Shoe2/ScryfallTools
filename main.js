"use strict";
(self["webpackChunkScryfallTools"] = self["webpackChunkScryfallTools"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _deck_muse_deck_muse_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deck-muse/deck-muse.component */ 7668);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 7824);
/* harmony import */ var _janklord_commander_generator_janklord_commander_generator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./janklord-commander-generator/janklord-commander-generator.component */ 1454);
/* harmony import */ var _token_token_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token/token.component */ 1519);
/* harmony import */ var _tribal_tribal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tribal/tribal.component */ 1790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);








const routes = [{
  path: 'token',
  component: _token_token_component__WEBPACK_IMPORTED_MODULE_3__.TokenComponent
}, {
  path: 'tribal',
  component: _tribal_tribal_component__WEBPACK_IMPORTED_MODULE_4__.TribalComponent
}, {
  path: 'deckmuse',
  component: _deck_muse_deck_muse_component__WEBPACK_IMPORTED_MODULE_0__.DeckMuseComponent
}, {
  path: 'janklord',
  component: _janklord_commander_generator_janklord_commander_generator_component__WEBPACK_IMPORTED_MODULE_2__.JanklordCommanderGeneratorComponent
}, {
  path: '**',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class AppComponent {
  constructor() {
    this.title = 'ScryfallTools';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _token_token_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token/token.component */ 1519);
/* harmony import */ var _tribal_tribal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tribal/tribal.component */ 1790);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 7824);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _deck_muse_deck_muse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deck-muse/deck-muse.component */ 7668);
/* harmony import */ var _janklord_commander_generator_janklord_commander_generator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./janklord-commander-generator/janklord-commander-generator.component */ 1454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);











class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.withInterceptorsFromDi)())],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _token_token_component__WEBPACK_IMPORTED_MODULE_2__.TokenComponent, _tribal_tribal_component__WEBPACK_IMPORTED_MODULE_3__.TribalComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _deck_muse_deck_muse_component__WEBPACK_IMPORTED_MODULE_5__.DeckMuseComponent, _janklord_commander_generator_janklord_commander_generator_component__WEBPACK_IMPORTED_MODULE_6__.JanklordCommanderGeneratorComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 7668:
/*!**************************************************!*\
  !*** ./src/app/deck-muse/deck-muse.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeckMuseComponent: () => (/* binding */ DeckMuseComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);




function DeckMuseComponent_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](color_r1);
  }
}
function DeckMuseComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Deck Idea:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " that is");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DeckMuseComponent_div_3_div_7_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("make a ", ctx_r1.ideas[0], " and ", ctx_r1.ideas[1], " deck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.colorsForIdea);
  }
}
class DeckMuseComponent {
  constructor($http) {
    this.$http = $http;
    this.ideas = [];
    this.colorsForIdea = [];
    this.subscriptions = [];
    this.sets = ['keyword-abilities', 'creature-types', 'planeswalker-types', 'land-types', 'artifact-types', 'enchantment-types', 'spell-types', 'keyword-actions', 'ability-words'];
    this.color = ['W', 'U', 'B', 'R', 'G', 'C'];
    this.themes = [];
  }
  ngOnInit() {
    const observables = [];
    for (let set of this.sets) {
      observables.push(this.$http.get('https://api.scryfall.com/catalog/' + set));
    }
    this.subscriptions.push((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.forkJoin)(observables).subscribe(results => {
      this.themes = results;
    }));
  }
  generateDeckIdea() {
    this.colorsForIdea = [];
    this.ideas = [];
    this.color.forEach(color => {
      const isColor = Math.floor(Math.random() * 2);
      if (isColor === 1) {
        this.colorsForIdea.push(color);
      }
    });
    const ideaCategory1 = Math.floor(Math.random() * 9);
    const ideaCategory2 = Math.floor(Math.random() * 9);
    const numberOfChoices1 = this.themes[ideaCategory1].data.length;
    const numberOfChoices2 = this.themes[ideaCategory2].data.length;
    const randomChoice1 = Math.floor(Math.random() * numberOfChoices1);
    const randomChoice2 = Math.floor(Math.random() * numberOfChoices2);
    this.ideas.push(this.themes[ideaCategory1].data[randomChoice1]);
    this.ideas.push(this.themes[ideaCategory2].data[randomChoice2]);
  }
  static #_ = this.ɵfac = function DeckMuseComponent_Factory(t) {
    return new (t || DeckMuseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DeckMuseComponent,
    selectors: [["app-deck-muse"]],
    decls: 4,
    vars: 1,
    consts: [[3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"]],
    template: function DeckMuseComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Random Deck Theme Generator\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeckMuseComponent_Template_button_click_1_listener() {
          return ctx.generateDeckIdea();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Generate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DeckMuseComponent_div_3_Template, 8, 3, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ideas.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7824:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


const _c0 = () => ["/token"];
const _c1 = () => ["/tribal"];
const _c2 = () => ["/deckmuse"];
const _c3 = () => ["/janklord"];
class HomeComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 11,
    vars: 8,
    consts: [[3, "routerLink"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Token Tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tribal Wars Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Deck Muse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Janklord Commander Generator (Random Commander or commanders worth less than $0.79 USD)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1454:
/*!****************************************************************************************!*\
  !*** ./src/app/janklord-commander-generator/janklord-commander-generator.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JanklordCommanderGeneratorComponent: () => (/* binding */ JanklordCommanderGeneratorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class JanklordCommanderGeneratorComponent {
  constructor($http) {
    this.$http = $http;
  }
  ngOnInit() {}
  newCommander() {
    const url = 'https://api.scryfall.com/cards/random?q=%20is%3Acommander+usd%3C%3D0.79+format%3Acommander';
    this.$http.get(url).subscribe(response => {
      this.selectedCommander = response;
      if (this.selectedCommander.keywords && this.selectedCommander.keywords.length && this.selectedCommander.keywords.includes('Partner')) {
        const url = 'https://api.scryfall.com/cards/random?q=%20is%3Acommander+usd%3C%3D0.79+format%3Acommander+keyword%3Apartner+-o%3A"partner+with"';
        this.$http.get(url).subscribe(response => {
          this.partner = response;
        });
      }
      // if ( this.selectedCommander.keywords.includes( 'Friends Forever' ) ) {
      //   const url = 'https://api.scryfall.com/cards/random?q=%20is%3Acommander+usd%3C%3D0.79+format%3Acommander+keyword%3A';
      //   this.$http.get( url ).subscribe( ( response: ScryfallAPIResponse ) => {
      //     this.partner = response.data as ScryfallCard;
      //   } );
      // }
    });
  }
  static #_ = this.ɵfac = function JanklordCommanderGeneratorComponent_Factory(t) {
    return new (t || JanklordCommanderGeneratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: JanklordCommanderGeneratorComponent,
    selectors: [["app-janklord-commander-generator"]],
    decls: 7,
    vars: 2,
    consts: [[3, "click"], ["src", "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/7/67b369c4-faa8-45c8-a1b9-98f228b69682.jpg", 2, "height", "200px", "width", "200px"], ["id", "commanderDisplay"]],
    template: function JanklordCommanderGeneratorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Quest for the Janklord Random Commander Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JanklordCommanderGeneratorComponent_Template_button_click_2_listener() {
          return ctx.newCommander();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.selectedCommander == null ? null : ctx.selectedCommander.name, " and ", ctx.partner.name, "\n");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2197:
/*!*************************************************!*\
  !*** ./src/app/token/services/token.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenService: () => (/* binding */ TokenService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class TokenService {
  constructor($http) {
    this.$http = $http;
  }
  dedupeTokens(tokens) {
    const uniqueTokens = [];
    tokens.forEach(token => {
      let isDupe = false;
      if (token.Text.includes("This token can be used to represent a token that's a copy of a permanent.")) {
        isDupe = true;
      }
      if (token.TypeLine === "Card") {
        isDupe = true;
      }
      if (token.Text) {
        token.Text = token.Text.replace(/\s?\(.*\)/g, '');
      }
      for (var i = 0; i < uniqueTokens.length; i++) {
        if (token.Name === uniqueTokens[i].Name && token.Power === uniqueTokens[i].Power && token.Toughness === uniqueTokens[i].Toughness && token.Colors.toString() === uniqueTokens[i].Colors.toString() && token.Text === uniqueTokens[i].Text && token.TypeLine === uniqueTokens[i].TypeLine) {
          isDupe = true;
          break;
        }
      }
      if (!isDupe) uniqueTokens.push(token);
    });
    return uniqueTokens;
  }
  getCardByUri(url) {
    return this.$http.get(url);
  }
  static #_ = this.ɵfac = function TokenService_Factory(t) {
    return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TokenService,
    factory: TokenService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1519:
/*!******************************************!*\
  !*** ./src/app/token/token.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenComponent: () => (/* binding */ TokenComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scryfall-ts/build/ScryfallColor */ 5205);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _types_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/token */ 6607);
/* harmony import */ var _types_problem_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/problem-cards */ 6943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/token.service */ 2197);









const _c0 = a0 => ({
  highlighted: a0
});
function TokenComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "LOADING....");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TokenComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Orphaned Token Generators: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TokenComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", card_r1.name, ",");
  }
}
function TokenComponent_tr_19_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const token_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", token_r2.Power, "/", token_r2.Toughness, "");
  }
}
function TokenComponent_tr_19_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("symbol color-", color_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](color_r3);
  }
}
function TokenComponent_tr_19_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TokenComponent_tr_19_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Au");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TokenComponent_tr_19_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const card_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", card_r4.rarity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](card_r4.name);
  }
}
function TokenComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 7)(1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TokenComponent_tr_19_span_2_Template, 2, 2, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TokenComponent_tr_19_span_4_Template, 2, 4, "span", 8)(5, TokenComponent_tr_19_span_5_Template, 2, 0, "span", 9)(6, TokenComponent_tr_19_span_6_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, TokenComponent_tr_19_span_15_Template, 2, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const token_r2 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](13, _c0, (token_r2 == null ? null : token_r2.CreatedBy == null ? null : token_r2.CreatedBy.length) > 9));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", token_r2.Power && token_r2.Toughness);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", token_r2.Colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", token_r2.Name === "Giant Teddy Bear");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.isGoldDragon(token_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](token_r2.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](11, 9, token_r2.TypeLine, 5, token_r2.TypeLine.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](token_r2.Text);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", token_r2.CreatedBy);
  }
}
class TokenComponent {
  constructor($http, datePipe, tokenService) {
    this.$http = $http;
    this.datePipe = datePipe;
    this.tokenService = tokenService;
    this.subscriptions = [];
    this.tokens = [];
    this.cardsThatMakeTokens = [];
    this.orphanedCards = [];
    this.loadingSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(0);
    this.loading = this.loadingSource.asObservable();
    this.isLoading = true;
    this.problemCards = _types_problem_cards__WEBPACK_IMPORTED_MODULE_3__.problemCards;
  }
  ngOnInit() {
    this.getNextPageOfCards(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.prefix + "/search?q=t%3Atoken+-set%3Atbth+-set%3Atdag+-set%3Atfth+-%28set%3Atust+is%3Adfc%29&unique=cards", true, "token");
    this.getNextPageOfCards(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.prefix + `/search?q=game%3Apaper+fo%3A%2F%5Cbcreate%5Cb%2F+include%3Aextras+-t%3Aemblem+-t%3Atoken+-border%3Agold+date<%3D${this.makeDateStringForTomorrow()}+&unique=cards`, true, "card");
    this.loading.subscribe(() => {
      if (this.loadingSource.value > 0 && this.subscriptions.length === this.loadingSource.value) {
        console.log('data loaded');
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
        this.dedupeTokens();
        this.associateCardsWithTokens();
      }
    });
  }
  ngOnDestrory() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  makeDateStringForTomorrow() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return this.datePipe.transform(tomorrow, 'YYYY-MM-dd');
  }
  getNextPageOfCards(url, clearOldData = false, tokenOrCard) {
    this.subscriptions.push(this.$http.get(url).subscribe(response => {
      if (response.has_more) {
        this.getNextPageOfCards(response.next_page, false, tokenOrCard);
      }
      if (tokenOrCard === "token") {
        if (clearOldData) {
          this.tokens = [];
        }
        response.data.forEach((token, index) => {
          if (token.card_faces && token.card_faces.length > 1) {
            token.card_faces.forEach(face => {
              if (face.name != "Horror" && !(face.name === "Elemental" && face.illustration_id === "37071500-1a8d-4298-9202-1931cd2bb073") && !(face.name === 'Mowu' && !face.colors.length) && !(face.name === "Zombie" && !face.colors.length) && !(face.name === "Wolf" && face.colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.W))) {
                //Hack to remove BU horror token and Mowu face that are falsly colorless in scryfall data
                const tokenData = new _types_token__WEBPACK_IMPORTED_MODULE_2__.Token(face.power, face.toughness, face.name === 'Treasure' ? [] : face.colors, face.name, face.type_line, face.oracle_text ? face.oracle_text.replace(/\s?\(.*\)/g, '') : '', face.image_uris);
                this.tokens.push(tokenData);
              }
            });
          } else {
            if (token.name.includes("Vizier of Many Faces")) {
              const cardUri = token.all_parts.filter(part => part.component === "combo_piece")[0].uri;
              this.tokenService.getCardByUri(cardUri).subscribe(card => {
                this.tokens.filter(tokenInstance => tokenInstance.Name === "Vizier of Many Faces")[0].CreatedBy.push(card);
              });
            }
            this.tokens.push(new _types_token__WEBPACK_IMPORTED_MODULE_2__.Token(token.power, token.toughness, token.colors, token.name, token.type_line, token.oracle_text, token.image_uris));
          }
          if (index === response.data.length - 1) {
            this.loadingSource.next(this.loadingSource.value + 1);
            this.tokens.sort((a, b) => {
              if (a.Name < b.Name) {
                return -1;
              }
              if (a.Name > b.Name) {
                return 1;
              }
              return 0;
            });
          }
        });
      } else if (tokenOrCard === "card") {
        if (clearOldData) {
          this.cardsThatMakeTokens = [];
        }
        this.cardsThatMakeTokens = this.cardsThatMakeTokens.concat(response.data);
        this.loadingSource.next(this.loadingSource.value + 1);
      }
    }, error => {
      console.log(error);
    }));
  }
  dedupeTokens() {
    this.tokens = this.tokenService.dedupeTokens(this.tokens);
  }
  associateCardsWithTokens() {
    this.isLoading = true;
    this.cardsThatMakeTokens.forEach((card, index) => {
      this.tokensThisCardMakes(card);
      if (index === this.cardsThatMakeTokens.length - 1) {
        const germToken = this.tokens.find(token => token.Name === "Germ");
        const phyrexianGermToken = this.tokens.find(token => token.Name === "Phyrexian Germ");
        phyrexianGermToken.CreatedBy = phyrexianGermToken.CreatedBy.concat(germToken.CreatedBy);
        this.tokens = this.tokens.filter(token => token.Name !== "Germ");
        this.isLoading = false;
      }
    });
  }
  tokensThisCardMakes(card) {
    if (this.problemCards.includes(card.name)) {
      return;
    }
    if (card.all_parts && card.all_parts) {
      card.all_parts.forEach(relatedCard => {
        if (relatedCard.component === "token") {
          let tempTokens = this.tokens.filter(tokenData => tokenData.Name === relatedCard.name && tokenData.TypeLine === tokenData.TypeLine);
          if (tempTokens.length === 1) {
            if (!tempTokens[0].CreatedBy.includes(card)) tempTokens[0].CreatedBy.push(card);
          } else if (relatedCard.type_line.includes('Token') && card.name != 'Valkyrie Harbinger' && card.name != 'Rampage of the Valkyries') {
            this.tokenService.getCardByUri(relatedCard.uri).subscribe(token => {
              let tempTokens = this.tokens.filter(tokenData => tokenData.Name === token.name && tokenData.TypeLine === token.type_line && tokenData.Text === token.oracle_text.split(' (')[0] && tokenData.Power === token.power && tokenData.Toughness === token.toughness && this.compareColorsByArray(token.colors, tokenData.Colors));
              tempTokens.length === 1 ? tempTokens[0].CreatedBy.push(card) : [];
            });
          } else {
            this.findTokensMadeByCardOracleText(card);
          }
        }
      });
    } else {
      this.findTokensMadeByCardOracleText(card);
    }
  }
  findTokensMadeByCardOracleText(card) {
    let createsNothing = true;
    let allFacesText = '';
    if (card.card_faces && card.card_faces.length > 1) {
      for (const faces of card.card_faces) {
        allFacesText += faces.oracle_text;
      }
    } else {
      allFacesText = card.oracle_text;
    }
    if (allFacesText.includes('Blood')) {
      createsNothing = false;
      const bloodToken = this.tokens.find(token => token.Name === 'Blood');
      if (!bloodToken.CreatedBy.includes(card)) bloodToken.CreatedBy.push(card);
    }
    if (allFacesText.includes('Food')) {
      createsNothing = false;
      const foodToken = this.tokens.find(token => token.Name === 'Food');
      if (!foodToken.CreatedBy.includes(card)) foodToken.CreatedBy.push(card);
    }
    if (allFacesText.includes('Treasure')) {
      createsNothing = false;
      const treasureToken = this.tokens.find(token => token.Name === 'Treasure');
      if (!treasureToken.CreatedBy.includes(card)) treasureToken.CreatedBy.push(card);
    }
    if (allFacesText.includes('Powerstone')) {
      createsNothing = false;
      const powerstoneToken = this.tokens.find(token => token.Name === 'Powerstone');
      if (!powerstoneToken.CreatedBy.includes(card)) powerstoneToken.CreatedBy.push(card);
    }
    if (allFacesText.includes('Gold token')) {
      createsNothing = false;
      const goldToken = this.tokens.find(token => token.Name === 'Gold');
      if (!goldToken.CreatedBy.includes(card)) goldToken.CreatedBy.push(card);
    }
    if (allFacesText.includes('Walker token')) {
      createsNothing = false;
      const walkerToken = this.tokens.find(token => token.Name === 'Walker');
      if (!walkerToken.CreatedBy.includes(card)) walkerToken.CreatedBy.push(card);
    }
    if (allFacesText.includes('Clue') || allFacesText.includes('Investigate')) {
      createsNothing = false;
      const clueToken = this.tokens.find(token => token.Name === 'Clue');
      if (!clueToken.CreatedBy.includes(card)) clueToken.CreatedBy.push(card);
    }
    if (allFacesText.toLocaleLowerCase().includes('that\'s a copy') || allFacesText.toLocaleLowerCase().includes('that are copies') || allFacesText.toLocaleLowerCase().includes('create a copy') || allFacesText.toLocaleLowerCase().includes('create a token copy') || allFacesText.toLocaleLowerCase().includes('tokens that are copies') || allFacesText.toLocaleLowerCase().includes('tokens that are each copies')) {
      createsNothing = false;
      const copyToken = this.tokens.find(token => token.Name === 'Copy');
      if (!copyToken.CreatedBy.includes(card)) copyToken.CreatedBy.push(card);
    }
    if (this.problemCards.includes(card.name)) {
      this.tokens.filter(token => this.processTokenText(allFacesText, token.Text.replace(/\s?\(.*\)/g, ''), card.name));
    }
    let tempToken = this.tokens.filter(token => allFacesText.includes(token.Name) && this.processTokenText(allFacesText, token.Text.replace(/\s?\(.*\)/g, ''), token.Name) && this.processPowerAndToughness(allFacesText, token) && this.processTypeLine(token.TypeLine, allFacesText) && this.compareColors(allFacesText, token.Colors));
    if (tempToken && tempToken.length) {
      createsNothing = false;
      for (let token of tempToken) {
        if (!token.CreatedBy.includes(card)) token.CreatedBy.push(card);
      }
    } else if (createsNothing && !card.type_line.includes("Card")) {
      // CREATE TOKEN or IGNORE ME
      const cardTextLowerCase = allFacesText.toLocaleLowerCase();
      if (!cardTextLowerCase.includes('would create') && !cardTextLowerCase.includes('create your deck') && !cardTextLowerCase.includes('whenever you create')) this.orphanedCards.push(card);
    }
    tempToken = null;
  }
  processTypeLine(typeLine, cardOracleText) {
    // if(cardOracleText.includes('Celestine Cave Witch')  || cardOracleText.includes('five 1/1 white Clown Robot')){
    //   debugger
    // }
    let cardDoesMakeTokenWithTypes = true;
    let types = typeLine.split(' ');
    types = types.filter(text => text != '—' && text != 'Token' && text != 'token');
    if (!typeLine.includes("Legendary") && cardOracleText.toLocaleLowerCase().includes(", a legendary")) {
      return false;
    }
    let typeReverseSearchString = "";
    let subtypeReverseSearchString = "";
    for (let type of types) {
      if (type === "Legendary") {
        //do nothing
      } else if (type === "Snow") {
        typeReverseSearchString += " snow";
      } else if (type === "Enchantment") {
        typeReverseSearchString += " enchantment";
      } else if (type === "Artifact") {
        typeReverseSearchString += " artifact";
      } else if (type === "Creature") {
        typeReverseSearchString += " creature";
      } else {
        subtypeReverseSearchString += " " + type.toLocaleLowerCase();
      }
    }
    ;
    typeReverseSearchString += " token";
    if (!cardOracleText.toLocaleLowerCase().includes(subtypeReverseSearchString + typeReverseSearchString)) {
      cardDoesMakeTokenWithTypes = false;
    }
    return cardDoesMakeTokenWithTypes;
  }
  processPowerAndToughness(cardOracleText, token) {
    if (!token.Power && !cardOracleText.includes("reature token")) {
      return true;
    }
    if (!token.Power && cardOracleText.includes("reature token")) {
      return false;
    }
    if (token.Power === '*' || token.Toughness === '*') {
      let powerMatches = false;
      let toughnessMatches = false;
      powerMatches = token.Power === '*' && cardOracleText.includes('X\/') || token.Power === '*' && cardOracleText.toLocaleLowerCase().includes('equal') && token.Power === '*' && cardOracleText.toLocaleLowerCase().includes('power');
      toughnessMatches = token.Toughness === '*' && cardOracleText.includes('\/X') || token.Toughness === '*' && cardOracleText.toLocaleLowerCase().includes('equal') && token.Toughness === '*' && cardOracleText.toLocaleLowerCase().includes('toughness');
      if (token.Power != '*') powerMatches = cardOracleText.includes(token.Power + "\/X");
      if (token.Toughness != '*') {
        toughnessMatches = cardOracleText.includes("X\/" + token.Toughness);
      }
      return powerMatches && toughnessMatches;
    } else if (token.Power !== '*' && token.Toughness !== '*' && cardOracleText.includes(token.Power + "\/" + token.Toughness)) {
      return true;
    }
  }
  processTokenText(cardText, tokenText, cardname) {
    if (cardText.includes("It has")) {
      const cardGives = cardText.split('"')[1];
      if (tokenText === cardGives) {
        return true;
      } else {
        return false;
      }
    }
    //REMOVE REMINDER TEXT
    tokenText = tokenText.replace(/\s?\(.*\)/g, '');
    cardText = cardText.replace(/\s?\(.*\)/g, '');
    if (tokenText === "creature is all colors." && cardText.includes("all colors")) {
      return true;
    }
    if (cardText.match(/tokens? with/g) && !cardText.includes('with haste') && !tokenText) {
      return false;
    }
    if (tokenText && tokenText.length > 0) {
      cardText = cardText.toLocaleLowerCase();
      const regexForTokenTextInCardText = /with [\w|\s|\d|/|"|'|,|\{|\}|\:]*\./g;
      const regexForItAndTheyGain = /" [\w|\s|\d|/|"|'|,|\{|\}|\:]*\./g;
      let cardTextTokenKeywordsSubstring = cardText.match(regexForTokenTextInCardText) ? cardText.match(regexForTokenTextInCardText) : cardText.match(regexForItAndTheyGain) ? cardText.match(regexForItAndTheyGain) : [];
      const cardTokenTextGranter = cardText.match(/\".*\"/g) ? cardText.match(/\".*\"/g) : [];
      const cardTextRelevantBits = cardTokenTextGranter.concat(cardTextTokenKeywordsSubstring);
      tokenText = tokenText.toLocaleLowerCase();
      let linesOfTextToken = tokenText.split('\n');
      let keywordsOnToken = linesOfTextToken[0].split(',');
      linesOfTextToken.shift();
      const lineSegmentsOnToken = keywordsOnToken.concat(linesOfTextToken);
      // Check to see if token text is on card
      for (let segmentOnToken of lineSegmentsOnToken) {
        let includesLineSegment = false;
        for (let cardTextBit of cardTextRelevantBits) {
          if (cardTextBit.includes(segmentOnToken.toLocaleLowerCase())) {
            includesLineSegment = true;
          }
        }
        if (!includesLineSegment) {
          return false;
        }
      }
      return true;
    } else {
      return true;
    }
  }
  compareColors(cardText, tokenColors) {
    if (tokenColors.length === 5 && cardText.toLocaleLowerCase().includes("all colors")) {
      return true;
    }
    let choppedOnCreateText = cardText.match(/(c|C)reate(s?) [\w|\s|\d|/|’|,]*token/g);
    !choppedOnCreateText ? choppedOnCreateText = [cardText] : [];
    cardText.includes("hoose four.") ? console.log(choppedOnCreateText) : [];
    for (const tokenCreationText of choppedOnCreateText) {
      if (tokenColors.length === 0 && tokenCreationText.toLocaleLowerCase().includes("colorless")) {
        return true;
      } else {
        if (tokenColors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.W) && !tokenCreationText.toLocaleLowerCase().includes(" white") || !tokenColors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.W) && tokenCreationText.toLocaleLowerCase().includes(" white")) {
          return false;
        }
        if (tokenColors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.U) && !tokenCreationText.toLocaleLowerCase().includes(" blue") || !tokenColors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.U) && tokenCreationText.toLocaleLowerCase().includes(" blue")) {
          return false;
        }
        if (tokenColors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.B) && !tokenCreationText.toLocaleLowerCase().includes(" black") || !tokenColors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.B) && tokenCreationText.toLocaleLowerCase().includes(" black")) {
          return false;
        }
        if (tokenColors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.R) && !tokenCreationText.toLocaleLowerCase().includes(" red") || !tokenColors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.R) && tokenCreationText.toLocaleLowerCase().includes(" red")) {
          return false;
        }
        if (tokenColors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.G) && !tokenCreationText.toLocaleLowerCase().includes(" green") || !tokenColors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.G) && tokenCreationText.toLocaleLowerCase().includes(" green")) {
          return false;
        }
        return true;
      }
    }
  }
  compareColorsByArray(card1Colors, card2Colors) {
    if ((card1Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.B) && card2Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.B) || !card1Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.B) && !card2Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.B)) && (card1Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.W) && card2Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.W) || !card1Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.W) && !card2Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.W)) && (card1Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.U) && card2Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.U) || !card1Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.U) && !card2Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.U)) && (card1Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.R) && card2Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.R) || !card1Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.R) && !card2Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.R)) && (card1Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.G) && card2Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.G) || !card1Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.G) && !card2Colors.includes(scryfall_ts_build_ScryfallColor__WEBPACK_IMPORTED_MODULE_0__.ScryfallColor.G))) return true;
    return false;
  }
  isGoldDragon(token) {
    let cardsNamedSODND;
    if (token.CreatedBy) {
      cardsNamedSODND = token.CreatedBy.filter(createdBy => createdBy.name === 'Sword of Dungeons & Dragons');
    }
    return cardsNamedSODND.length > 0;
  }
  static #_ = this.ɵfac = function TokenComponent_Factory(t) {
    return new (t || TokenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_4__.TokenService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: TokenComponent,
    selectors: [["app-token"]],
    decls: 20,
    vars: 4,
    consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [1, "table-striped"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "symbol color-pink", 4, "ngIf"], ["class", "symbol color-gold", 4, "ngIf"], ["class", "badge card-pill", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "symbol", "color-pink"], [1, "symbol", "color-gold"], [1, "badge", "card-pill", 3, "ngClass"]],
    template: function TokenComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TokenComponent_div_0_Template, 2, 0, "div", 0)(1, TokenComponent_div_1_Template, 2, 0, "div", 0)(2, TokenComponent_span_2_Template, 3, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "table", 2)(4, "thead", 3)(5, "tr")(6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "P/T");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Type Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Cards that Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "tbody", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, TokenComponent_tr_19_Template, 16, 15, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.orphanedCards.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.orphanedCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.tokens);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe],
    styles: [".symbol[_ngcontent-%COMP%] {\n    border-radius: 100%;\n    border: 1px solid black;\n    font-weight: bold;\n}\n\n.highlighted[_ngcontent-%COMP%] {\n    background-color: yellow;\n}\n\n.card-pill[_ngcontent-%COMP%] {\n    margin: 3px;\n}\n\n.uncommon[_ngcontent-%COMP%] {\n    background-color: darkgrey;\n}\n.rare[_ngcontent-%COMP%] {\n    background-color: goldenrod;\n}\n.mythic[_ngcontent-%COMP%] {\n    background-color: orange;\n}\n\n.color-U[_ngcontent-%COMP%] {\n    background-color: blue;\n    color: white;\n    padding: 2px 8px;\n}\n.color-B[_ngcontent-%COMP%], \n.common[_ngcontent-%COMP%] {\n    background-color: black;\n    color: white;\n    padding: 2px 8px;\n}\n.color-R[_ngcontent-%COMP%] {\n    background-color: red;\n    color: white;\n    padding: 2px 8px;\n}\n.color-G[_ngcontent-%COMP%] {\n    background-color: green;\n    color: white;\n    padding: 2px 8px;\n}\n.color-W[_ngcontent-%COMP%] {\n    background-color: white;\n    color: black;\n    padding: 2px 4px;\n}\n.color-pink[_ngcontent-%COMP%] {\n    background-color: palevioletred;\n    color: white;\n    padding: 2px 8px;\n}\n.color-gold[_ngcontent-%COMP%] {\n    background-color: goldenrod;\n    color: white;\n    padding: 2px 8px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdG9rZW4vdG9rZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5zeW1ib2wge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5oaWdobGlnaHRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5jYXJkLXBpbGwge1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbn1cclxuXHJcbi51bmNvbW1vbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcclxufVxyXG4ucmFyZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XHJcbn1cclxuLm15dGhpYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5jb2xvci1VIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAycHggOHB4O1xyXG59XHJcbi5jb2xvci1CLFxyXG4uY29tbW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMnB4IDhweDtcclxufVxyXG4uY29sb3ItUiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAycHggOHB4O1xyXG59XHJcbi5jb2xvci1HIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMnB4IDhweDtcclxufVxyXG4uY29sb3ItVyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDJweCA0cHg7XHJcbn1cclxuLmNvbG9yLXBpbmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXZpb2xldHJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDJweCA4cHg7XHJcbn1cclxuLmNvbG9yLWdvbGQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMnB4IDhweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6943:
/*!**********************************************!*\
  !*** ./src/app/token/types/problem-cards.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   problemCards: () => (/* binding */ problemCards)
/* harmony export */ });
const problemCards =
// TODO: Fix These
[
// These create one exsisting token and one not-exsisting token
"Evil Comes to Fruition", "One Dozen Eyes",
// A HUGE PROBLEM ALL IT'S OWN, but also makes exsisting and non-exsisting tokens
"Sarpadian Empires, Vol. VII",
//OLD and make no exsisting token
"Abian, Luvion Usurper", "Balduvian Dead", "Baru, Fist of Krosa", "Basalt Golem", "Blessed Sanctuary", "Bone Rattler", "Boris Devilboon", "Bottle of Suleiman", "Broken Visage", "Caribou Range", "Carrion", "Chicken Egg", "Daring Piracy", "Diamond Kaleidoscope", "D00-DL, Caricaturist", "Dune-Brood Nephilim", "Dungeon Master", "Elephant Resurgence", "Errand of Duty", "Evil Boros Charm", "Firecat Blitz", "Generated Horizons", "Gemini Engine", "Giant Caterpillar", "Goblin Cruciverbalist", "Goblin Scouts", "Goldmeadow Lookout", "Gorilla Tactics", "Gunk Slug", "Handy Dandy Clone Machine", "Haunted Angel", "Helm of Kaldra", "Homarid Spawning Bed", "Hunted Horror", "Imaginary Friends", "Infernal Genesis", "Jungle Patrol", "Keeper of the Beasts", "Kjeldoran Home Guard", "Lita, Mechanical Engineer", "Master of the Hunt", "Master of the Wild Hunt Avatar", "Mirrored Lotus", "Mongrel Pack", "Monkey Cage", "Nuisance Engine", "Penumbra Kavu", "Phantasmal Sphere", "Phelddagrif", "Pick Your Poison", "Pure Reflection", "Questing Phelddagrif", "Rally the Horde", "Riptide Replicator", "Saproling Burst", "Sek'Kuar, Deathkeeper", "Serpent Generator", "Skirk Ridge Exhumer", "Slivdrazi Monstrosity", "Sound the Call", "Spawning Pit", "Spike Breeder", "Spiny Starfish", "Spirit Mirror", "Splintering Wind", "Summoning Station", "Symbol Status", "Tatsumasa, the Dragon's Fang", "Tetravus", "The Iron Guardian Stirs", "The Legend of Arena", "Time Sidewalk", "Tomb of Urami", "Tombstone Stairwell", "Uktabi Kong", "Volrath's Laboratory", "Wall of Kelp", "Wand of the Elements", "Waste Land", "Waylay", "Wirefly Hive", "Wurmcalling"];

/***/ }),

/***/ 6607:
/*!**************************************!*\
  !*** ./src/app/token/types/token.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Token: () => (/* binding */ Token)
/* harmony export */ });
class Token {
  constructor(Power, Toughness, Colors, Name, TypeLine, Text, ImageURL) {
    this.Power = Power;
    this.Toughness = Toughness;
    this.Colors = Colors;
    this.Name = Name;
    this.TypeLine = TypeLine;
    this.Text = Text;
    this.ImageURL = ImageURL;
    this.CreatedBy = [];
  }
}

/***/ }),

/***/ 1790:
/*!********************************************!*\
  !*** ./src/app/tribal/tribal.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TribalComponent: () => (/* binding */ TribalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _tribal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tribal.service */ 5810);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function TribalComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 4)(1, "th", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 1)(4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 1)(7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 1)(10, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 1)(13, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 1)(16, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 1)(19, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 2)(24, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td", 2)(27, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td", 2)(30, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tribe_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tribe_r1.creatureType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.cardsWithTypeHref(tribe_r1.creatureType), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tribe_r1.cardsWithType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.commandersWithTypeHref(tribe_r1.creatureType), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tribe_r1.commandersWithType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.makesTokensOfTypeHref(tribe_r1.creatureType), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tribe_r1.makesTokensOfType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tribe_r1.turnsIntoCreatureOfType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tribe_r1.hozesType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tribe_r1.lordsOfType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.silverBorderedCardsWithTypeHref(tribe_r1.creatureType), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tribe_r1.silverBorderedCardsWithType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.silverBorderedCommandersHref(tribe_r1.creatureType), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tribe_r1.silverBorderedCommanders, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tribe_r1.silverBorderedLords);
  }
}
class TribalComponent {
  constructor(tribalService) {
    this.tribalService = tribalService;
    this.creatureTypeData = [];
  }
  ngOnInit() {
    this.tribalService.getTribeData();
    this.tribalService.tribesList.subscribe(() => this.tribalService.computeTribalStats());
    this.tribalService.tribeData.subscribe(data => this.creatureTypeData = data);
  }
  cardsWithTypeHref(creatureType) {
    return `https://scryfall.com/search?q=t%3A${creatureType}+game%3Apaper+-is%3Afunny&unique=cards&as=grid&order=color`;
  }
  commandersWithTypeHref(creatureType) {
    return `https://scryfall.com/search?q=+t%3A${creatureType}+is%3Acommander+format%3Acommander+game%3Apaper+-is%3Afunny&unique=cards&as=grid&order=color`;
  }
  silverBorderedCardsWithTypeHref(creatureType) {
    return `https://scryfall.com/search?q=t%3A${creatureType}+game%3Apaper+is%3Afunny&unique=cards&as=grid&order=color`;
  }
  silverBorderedCommandersHref(creatureType) {
    return `https://scryfall.com/search?q=+t%3A${creatureType}+is%3Acommander+format%3Acommander+game%3Apaper+is%3Afunny&unique=cards&as=grid&order=color`;
  }
  makesTokensOfTypeHref(creatureType) {
    return `https://scryfall.com/search?q=fo%3A%2F%5Cb${creatureType}%5Cb%2F+game%3Apaper+-is%3Afunny+fo%3Acreate&unique=cards`;
  }
  static #_ = this.ɵfac = function TribalComponent_Factory(t) {
    return new (t || TribalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tribal_service__WEBPACK_IMPORTED_MODULE_0__.TribalService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TribalComponent,
    selectors: [["app-tribal"]],
    decls: 27,
    vars: 1,
    consts: [[1, "table", "table-striped", "table-bordered"], ["scope", "col"], ["scope", "col", 1, "silver"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["target", "_blank", 3, "href"]],
    template: function TribalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Creature Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Cards w/ Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Commanders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Makes Tokens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Turns Into Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Hozes Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Tribal Effects/Lords");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Viability");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Un-Cards w/ Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Un-Commanders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Un-Tribal Effects/Lords");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, TribalComponent_tr_26_Template, 32, 15, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.creatureTypeData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: [".silver[_ngcontent-%COMP%] {\n    background-color: silver;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdHJpYmFsL3RyaWJhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbHZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5810:
/*!******************************************!*\
  !*** ./src/app/tribal/tribal.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TribalService: () => (/* binding */ TribalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);





class TribalService {
  constructor($http) {
    this.$http = $http;
    this.tribesListSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.tribesList = this.tribesListSource.asObservable();
    this.tribeDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.tribeData = this.tribeDataSource.asObservable();
    this.noCards = {
      total_cards: 0,
      data: null,
      has_more: false,
      next_page: 'no',
      object: ''
    };
  }
  getTribeData() {
    this.$http.get("https://api.scryfall.com/catalog/creature-types").subscribe(response => {
      this.tribesListSource.next(response.data);
    });
  }
  computeTribalStats() {
    for (let tribe of this.tribesListSource.getValue()) {
      const observables = [];
      //cards
      observables.push(this.$http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.prefix + `/search?q=t%3A${tribe}+game%3Apaper+-is%3Afunny`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.noCards))));
      //commanders
      observables.push(this.$http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.prefix + `/search?q=t%3A${tribe}+is%3Acommander+game%3Apaper+-is%3Afunny`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.noCards))));
      //token makers
      observables.push(this.$http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.prefix + `/search?q=fo%3A%2F%5Cb${tribe}%5Cb%2F+game%3Apaper+-is%3Afunny+fo%3Acreate&unique=cards`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.noCards))));
      //becomes
      //   observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=o%3A%2Fbecome%28s%29%3F+.*" + tribe.creatureType + ".%2F" + "-is%3Afunny" ))
      //hozes
      //   observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe.creatureType))
      //lords
      //   observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe.creatureType))
      //joke cards
      observables.push(this.$http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.prefix + `/search?q=t%3A${tribe}+game%3Apaper+is%3Afunny`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.noCards))));
      //funny commanders
      observables.push(this.$http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.prefix + `/search?q=t%3A${tribe}+is%3Acommander+game%3Apaper+is%3Afunny`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.noCards))));
      //funny lords
      //   observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe.creatureType))
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)(observables).subscribe(tribeDataResponses => this.assignTribeData(tribe, tribeDataResponses), tribeDataResponses => this.assignTribeData(tribe, tribeDataResponses));
    }
  }
  assignTribeData(tribe, tribeDataResponses) {
    console.log(tribeDataResponses);
    const tribeData = {};
    tribeData.creatureType = tribe;
    tribeData.cardsWithType = tribeDataResponses[0].total_cards;
    tribeData.commandersWithType = tribeDataResponses[1].total_cards;
    // tribe.turnsIntoCreatureOfType = tribeDataResponses[2].total_cards;
    // tribe.hozesType = tribeDataResponses[3].total_cards;
    // tribe.lordsOfType = tribeDataResponses[4].total_cards;
    tribeData.makesTokensOfType = tribeDataResponses[2].total_cards;
    tribeData.silverBorderedCardsWithType = tribeDataResponses[3].total_cards;
    // tribe.silverBorderedLords = tribeDataResponses[5].total_cards;
    tribeData.silverBorderedCommanders = tribeDataResponses[4].total_cards;
    this.tribeDataSource.value.push(tribeData);
    this.tribeDataSource.value.sort((a, b) => {
      var textA = a.creatureType.toUpperCase();
      var textB = b.creatureType.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  }
  static #_ = this.ɵfac = function TribalService_Factory(t) {
    return new (t || TribalService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: TribalService,
    factory: TribalService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  prefix: "https://api.scryfall.com/cards"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map