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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _deck_muse_deck_muse_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deck-muse/deck-muse.component */ 7668);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 7824);
/* harmony import */ var _janklord_commander_generator_janklord_commander_generator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./janklord-commander-generator/janklord-commander-generator.component */ 1454);
/* harmony import */ var _token_token_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token/token.component */ 1519);
/* harmony import */ var _tribal_tribal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tribal/tribal.component */ 1790);
/* harmony import */ var _archidekt_deck_stats_archidekt_deck_stats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./archidekt-deck-stats/archidekt-deck-stats.component */ 9256);
/* harmony import */ var _random_generators_random_generators_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./random-generators/random-generators.component */ 3612);
/* harmony import */ var _the_wheel_of_chaos_the_wheel_of_chaos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./the-wheel-of-chaos/the-wheel-of-chaos.component */ 4578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);











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
  path: 'deckstats',
  component: _archidekt_deck_stats_archidekt_deck_stats_component__WEBPACK_IMPORTED_MODULE_5__.ArchidektDeckStatsComponent
}, {
  path: 'randomGenerators',
  component: _random_generators_random_generators_component__WEBPACK_IMPORTED_MODULE_6__.RandomGeneratorsComponent
}, {
  path: 'wheel',
  component: _the_wheel_of_chaos_the_wheel_of_chaos_component__WEBPACK_IMPORTED_MODULE_7__.TheWheelOfChaosComponent
}, {
  path: '**',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
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


const _c0 = () => ["/token"];
const _c1 = () => ["/tribal"];
const _c2 = () => ["/deckmuse"];
const _c3 = () => ["/janklord"];
const _c4 = () => ["/randomGenerators"];
const _c5 = () => ["/wheel"];
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
    decls: 21,
    vars: 12,
    consts: [["navContainer", ""], ["menuToggle", ""], [1, "nav-container"], ["type", "checkbox", "id", "menu-toggle", 1, "menu-checkbox"], ["for", "menu-toggle", 1, "hamburger-btn"], [1, "hamburger"], [3, "click", "routerLink"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2261");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav")(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const menuToggle_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](menuToggle_r2.checked = false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Token Tracker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const menuToggle_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](menuToggle_r2.checked = false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Tribal Wars Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const menuToggle_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](menuToggle_r2.checked = false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Deck Muse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const menuToggle_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](menuToggle_r2.checked = false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " JankLord Commander Generator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const menuToggle_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](menuToggle_r2.checked = false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Random Generators ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const menuToggle_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](menuToggle_r2.checked = false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " The Wheel of Chaos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["\n\n.nav-container[_ngcontent-%COMP%] {\n  position: relative;\n  font-family: \"Times New Roman\", Times, serif;\n  min-height: 40px;\n  padding: 10px;\n}\n\n\n\n.menu-checkbox[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n.hamburger-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 50px;\n  width: 50px;\n  cursor: pointer;\n  z-index: 1000;\n  position: relative;\n  background: linear-gradient(135deg, #4e3b2b, #261c14);\n  border-radius: 8px;\n  border: 2px solid #c5a059;\n  box-shadow:\n    inset 1px 1px 0px #f3df95,\n    2px 2px 4px rgba(0, 0, 0, 0.6);\n  text-align: center;\n  font-size: 50px;\n  color: #f4edd9;\n}\n\n.hamburger[_ngcontent-%COMP%] {\n  height: 50px;\n  position: relative;\n  top: -12px;\n}\n\n.nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 62px;\n  left: 20px;\n  z-index: 999;\n  min-width: 280px;\n  max-width: 90vw;\n  background: #2a2015 linear-gradient(to bottom, #2a2015, #18120c);\n  padding: 15px;\n\n  border: 4px solid #c5a059;\n  outline: 2px solid #3a2d21;\n  box-shadow:\n    0px 10px 25px rgba(0, 0, 0, 0.8),\n    inset 0 0 12px rgba(0, 0, 0, 0.6);\n}\n\n\n\n.menu-checkbox[_ngcontent-%COMP%]:checked    ~ nav[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #f4edd9; \n\n  text-decoration: none;\n  font-size: 1.15rem;\n  font-weight: bold;\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1); \n\n  padding: 8px 12px;\n  margin-bottom: 4px;\n  width: calc(100% - 24px);\n  border: 1px solid transparent;\n  transition: all 0.15s ease;\n   position: relative;\n}\n\n\n\n.nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n.nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: rgba(26, 82, 118, 0.4); \n\n  border: 1px solid #c5a059;\n  box-shadow: 0 0 8px rgba(26, 82, 118, 0.8);\n  text-shadow:\n    0 0 4px #fff,\n    2px 2px 2px #000;\n  transform: translateX(4px); \n\n}\n\n\n\n.nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #f3df95;\n  border-left: 3px solid #f3df95;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n\n\n.nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .close-trigger[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQXFDO0FBQ3JDO0VBQ0Usa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLGFBQWE7QUFDZjs7QUFFQSw0Q0FBNEM7QUFDNUM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFEQUFxRDtFQUNyRCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCOztrQ0FFZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0VBQWdFO0VBQ2hFLGFBQWE7O0VBRWIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQjs7cUNBRW1DO0FBQ3JDOztBQUVBLHVDQUF1QztBQUN2QztFQUNFLGNBQWM7QUFDaEI7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWMsRUFBRSw2QkFBNkI7RUFDN0MscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUNBQXlDLEVBQUUscUNBQXFDO0VBQ2hGLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3QiwwQkFBMEI7R0FDekIsa0JBQWtCO0FBQ3JCOztBQUVBLG9FQUFvRTtBQUNwRTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxvRUFBb0U7QUFDcEU7RUFDRSxXQUFXO0VBQ1gsd0NBQXdDLEVBQUUsMEJBQTBCO0VBQ3BFLHlCQUF5QjtFQUN6QiwwQ0FBMEM7RUFDMUM7O29CQUVrQjtFQUNsQiwwQkFBMEIsRUFBRSxxQkFBcUI7QUFDbkQ7O0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtFQUM5Qiw4QkFBOEI7QUFDaEM7Ozs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7QUFDWiIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJhc2Ugc2V0dXAgZm9yIGxheW91dCBjb250aW51aXR5ICovXHJcbi5uYXYtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGNoZWNrYm94IGNvbXBsZXRlbHkgKi9cclxuLm1lbnUtY2hlY2tib3gge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIC0tLSBUaGUgVmludGFnZSBVSSBIYW1idXJnZXIgVG9nZ2xlIC0tLSAqL1xyXG4uaGFtYnVyZ2VyLWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0ZTNiMmIsICMyNjFjMTQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYzVhMDU5O1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICBpbnNldCAxcHggMXB4IDBweCAjZjNkZjk1LFxyXG4gICAgMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgY29sb3I6ICNmNGVkZDk7XHJcbn1cclxuXHJcbi5oYW1idXJnZXIge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMTJweDtcclxufVxyXG5cclxuLm5hdi1jb250YWluZXIgbmF2IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYycHg7XHJcbiAgbGVmdDogMjBweDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgbWluLXdpZHRoOiAyODBweDtcclxuICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgYmFja2dyb3VuZDogIzJhMjAxNSBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmEyMDE1LCAjMTgxMjBjKTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICBib3JkZXI6IDRweCBzb2xpZCAjYzVhMDU5O1xyXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjM2EyZDIxO1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICAwcHggMTBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC44KSxcclxuICAgIGluc2V0IDAgMCAxMnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxufVxyXG5cclxuLyogU2hvdyBtZW51IHdoZW4gY2hlY2tib3ggaXMgY2hlY2tlZCAqL1xyXG4ubWVudS1jaGVja2JveDpjaGVja2VkIH4gbmF2IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogLS0tIFJldHJvIE1lbnUgTGlua3MgLS0tICovXHJcbi5uYXYtY29udGFpbmVyIG5hdiBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICNmNGVkZDk7IC8qIEhpZ2gtY29udHJhc3QgaXZvcnkgdGV4dCAqL1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMSk7IC8qIERlZXBlbmVkIGRyb3Agc2hhZG93IHRvIHBvcCB0ZXh0ICovXHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNHB4KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vKiBFbGltaW5hdGUgcmF3IGJyZWFrIGdhcHMgdG8gY29udHJvbCBpdGVtIGJsb2NrIHNwYWNpbmcgcHJvcGVybHkgKi9cclxuLm5hdi1jb250YWluZXIgbmF2IGJyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBWaW50YWdlIEhpZ2hsaWdodCBGb2N1cyAmIEhvdmVyIFN0YXRlcyAoTWFuYSBCbHVlIFNwZWxsIGVmZmVjdCkgKi9cclxuLm5hdi1jb250YWluZXIgbmF2IGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDgyLCAxMTgsIDAuNCk7IC8qIEZhZGVkIGJsdWUgcG9vbCBjb2xvciAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNWEwNTk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDI2LCA4MiwgMTE4LCAwLjgpO1xyXG4gIHRleHQtc2hhZG93OlxyXG4gICAgMCAwIDRweCAjZmZmLFxyXG4gICAgMnB4IDJweCAycHggIzAwMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTsgLyogVmludGFnZSBVSSBudWRnZSAqL1xyXG59XHJcblxyXG4vKiBTdHlsZSBhY3RpdmUgcm91dGUgaW5kaWNhdG9ycyAqL1xyXG4ubmF2LWNvbnRhaW5lciBuYXYgYS5hY3RpdmUge1xyXG4gIGNvbG9yOiAjZjNkZjk1O1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2YzZGY5NTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcblxyXG5cclxuLm5hdi1jb250YWluZXIgbmF2IGEgLmNsb3NlLXRyaWdnZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDE7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _token_token_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token/token.component */ 1519);
/* harmony import */ var _tribal_tribal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tribal/tribal.component */ 1790);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 7824);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _deck_muse_deck_muse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deck-muse/deck-muse.component */ 7668);
/* harmony import */ var _janklord_commander_generator_janklord_commander_generator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./janklord-commander-generator/janklord-commander-generator.component */ 1454);
/* harmony import */ var _archidekt_deck_stats_archidekt_deck_stats_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./archidekt-deck-stats/archidekt-deck-stats.component */ 9256);
/* harmony import */ var _random_generators_random_generators_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./random-generators/random-generators.component */ 3612);
/* harmony import */ var _the_wheel_of_chaos_the_wheel_of_chaos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./the-wheel-of-chaos/the-wheel-of-chaos.component */ 4578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);














class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.withInterceptorsFromDi)())],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _token_token_component__WEBPACK_IMPORTED_MODULE_2__.TokenComponent, _tribal_tribal_component__WEBPACK_IMPORTED_MODULE_3__.TribalComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _deck_muse_deck_muse_component__WEBPACK_IMPORTED_MODULE_5__.DeckMuseComponent, _random_generators_random_generators_component__WEBPACK_IMPORTED_MODULE_8__.RandomGeneratorsComponent, _janklord_commander_generator_janklord_commander_generator_component__WEBPACK_IMPORTED_MODULE_6__.JanklordCommanderGeneratorComponent, _archidekt_deck_stats_archidekt_deck_stats_component__WEBPACK_IMPORTED_MODULE_7__.ArchidektDeckStatsComponent, _the_wheel_of_chaos_the_wheel_of_chaos_component__WEBPACK_IMPORTED_MODULE_9__.TheWheelOfChaosComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 9256:
/*!************************************************************************!*\
  !*** ./src/app/archidekt-deck-stats/archidekt-deck-stats.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArchidektDeckStatsComponent: () => (/* binding */ ArchidektDeckStatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ArchidektDeckStatsComponent {
  static #_ = this.ɵfac = function ArchidektDeckStatsComponent_Factory(t) {
    return new (t || ArchidektDeckStatsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ArchidektDeckStatsComponent,
    selectors: [["app-archidekt-deck-stats"]],
    decls: 2,
    vars: 0,
    template: function ArchidektDeckStatsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "archidekt-deck-stats works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

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




function DeckMuseComponent_div_5_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("symbol color-", color_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", color_r1, " ");
  }
}
function DeckMuseComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Deck Idea: Make a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " deck ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "that is");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DeckMuseComponent_div_5_span_11_Template, 2, 4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ideas[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ideas[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
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
    decls: 6,
    vars: 1,
    consts: [[1, "column-container"], [1, "white-cursive-extra"], [1, "spin-trigger-btn", 3, "click"], [4, "ngIf"], [1, "yellow-glow-text"], [3, "class", 4, "ngFor", "ngForOf"]],
    template: function DeckMuseComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Random Deck Theme Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeckMuseComponent_Template_button_click_3_listener() {
          return ctx.generateDeckIdea();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Muse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DeckMuseComponent_div_5_Template, 12, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
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

class HomeComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 2,
    vars: 0,
    consts: [[1, "white-cursive-extra"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to Shoe's Variant Format Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function JanklordCommanderGeneratorComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r0.selectedCommander == null ? null : ctx_r0.selectedCommander.name) || "", " ");
  }
}
function JanklordCommanderGeneratorComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.selectedCommander.image_uris.normal, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class JanklordCommanderGeneratorComponent {
  constructor($http) {
    this.$http = $http;
  }
  ngOnInit() {}
  newCommander() {
    const url = 'https://api.scryfall.com/cards/random?q=%20is%3Acommander+usd%3C%3D0.79+format%3Acommander';
    this.$http.get(url).subscribe(response => {
      this.selectedCommander = response;
      // if ( this.selectedCommander.keywords && this.selectedCommander.keywords.length && this.selectedCommander.keywords.includes( 'Partner' ) ) {
      //   const url = 'https://api.scryfall.com/cards/random?q=%20is%3Acommander+usd%3C%3D0.79+format%3Acommander+keyword%3Apartner+-o%3A"partner+with"';
      //   this.$http.get( url ).subscribe( ( response: ScryfallCard ) => {
      //     this.partner = response;
      //   } );
      // }
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
    decls: 10,
    vars: 2,
    consts: [[1, "column-container"], [1, "white-cursive-extra", "text-center"], [1, "yellow-glow-text"], [3, "click"], ["src", "https://cards.scryfall.io/art_crop/front/c/1/c14c07d4-6971-483a-add1-f3cdf18feae9.jpg", 1, "wheel"], ["class", "shandalar-text", "id", "commanderDisplay", 4, "ngIf"], [4, "ngIf"], ["id", "commanderDisplay", 1, "shandalar-text"], [2, "width", "300px", 3, "src"]],
    template: function JanklordCommanderGeneratorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quest for the JankLord ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Random Commander or commanders worth less than $0.79 USD)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JanklordCommanderGeneratorComponent_Template_button_click_5_listener() {
          return ctx.newCommander();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, JanklordCommanderGeneratorComponent_div_8_Template, 2, 1, "div", 5)(9, JanklordCommanderGeneratorComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCommander);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCommander && ctx.selectedCommander.image_uris);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".shandalar-text[_ngcontent-%COMP%] {\n  color: #f4edd9; \n\n  text-decoration: none;\n  font-size: 1.15rem;\n  font-weight: bold;\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1); \n\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\n.wheel[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  height: 200px;\n  width: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvamFua2xvcmQtY29tbWFuZGVyLWdlbmVyYXRvci9qYW5rbG9yZC1jb21tYW5kZXItZ2VuZXJhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjLEVBQUUsNkJBQTZCO0VBQzdDLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlDQUF5QyxFQUFFLHFDQUFxQztBQUNsRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiLnNoYW5kYWxhci10ZXh0IHtcclxuICBjb2xvcjogI2Y0ZWRkOTsgLyogSGlnaC1jb250cmFzdCBpdm9yeSB0ZXh0ICovXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAxKTsgLyogRGVlcGVuZWQgZHJvcCBzaGFkb3cgdG8gcG9wIHRleHQgKi9cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi53aGVlbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3612:
/*!******************************************************************!*\
  !*** ./src/app/random-generators/random-generators.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RandomGeneratorsComponent: () => (/* binding */ RandomGeneratorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function RandomGeneratorsComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("symbol color-", color_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](color_r1);
  }
}
class RandomGeneratorsComponent {
  constructor($http) {
    this.$http = $http;
    this.color = ['W', 'U', 'B', 'R', 'G'];
    this.colorsForIdea = [];
  }
  randomCreatureType() {
    this.$http.get('https://api.scryfall.com/catalog/creature-types').subscribe(results => {
      const randomChoice1 = Math.floor(Math.random() * results.data.length);
      this.selectedCreatureType = results.data[randomChoice1];
    });
  }
  randomKeyword() {
    this.$http.get('https://api.scryfall.com/catalog/keyword-abilities').subscribe(results => {
      const randomChoice1 = Math.floor(Math.random() * results.data.length);
      this.selectedKeyword = results.data[randomChoice1];
    });
  }
  generateRandomColorIdentity() {
    this.colorsForIdea = [];
    this.color.forEach((color, index) => {
      const isColor = Math.floor(Math.random() * 2);
      if (isColor === 1) {
        this.colorsForIdea.push(color);
      }
      if (index === 4 && this.colorsForIdea.length < 1) {
        this.colorsForIdea.push('colorless');
      }
    });
  }
  static #_ = this.ɵfac = function RandomGeneratorsComponent_Factory(t) {
    return new (t || RandomGeneratorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RandomGeneratorsComponent,
    selectors: [["app-random-generators"]],
    decls: 24,
    vars: 3,
    consts: [[1, "white-cursive-extra"], [1, "row"], [1, "col"], [1, "spin-trigger-btn", 3, "click"], [1, "col", "align-self-center"], [1, "yellow-glow-text"], [3, "class", 4, "ngFor", "ngForOf"]],
    template: function RandomGeneratorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Random Generators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RandomGeneratorsComponent_Template_button_click_4_listener() {
          return ctx.randomCreatureType();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Creature Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1)(11, "div", 2)(12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RandomGeneratorsComponent_Template_button_click_12_listener() {
          return ctx.randomKeyword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Keyword");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4)(15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1)(19, "div", 2)(20, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RandomGeneratorsComponent_Template_button_click_20_listener() {
          return ctx.generateRandomColorIdentity();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Color Identity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RandomGeneratorsComponent_span_23_Template, 2, 4, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedCreatureType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedKeyword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colorsForIdea);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4578:
/*!********************************************************************!*\
  !*** ./src/app/the-wheel-of-chaos/the-wheel-of-chaos.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TheWheelOfChaosComponent: () => (/* binding */ TheWheelOfChaosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



const _c0 = ["tapeTrack"];
const _c1 = ["outputReadout"];
const _forTrack0 = ($index, $item) => "dup-" + $index;
function TheWheelOfChaosComponent_Conditional_13_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
  }
  if (rf & 2) {
    const pack_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pack_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", pack_r2.name);
  }
}
function TheWheelOfChaosComponent_Conditional_13_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2753");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TheWheelOfChaosComponent_Conditional_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TheWheelOfChaosComponent_Conditional_13_For_1_Conditional_2_Template, 1, 2, "img", 13)(3, TheWheelOfChaosComponent_Conditional_13_For_1_Conditional_3_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pack_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](pack_r2.imageUrl ? 2 : 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pack_r2.name);
  }
}
function TheWheelOfChaosComponent_Conditional_13_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
  }
  if (rf & 2) {
    const pack_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pack_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", pack_r3.name);
  }
}
function TheWheelOfChaosComponent_Conditional_13_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2753");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TheWheelOfChaosComponent_Conditional_13_For_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TheWheelOfChaosComponent_Conditional_13_For_3_Conditional_2_Template, 1, 2, "img", 13)(3, TheWheelOfChaosComponent_Conditional_13_For_3_Conditional_3_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pack_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](pack_r3.imageUrl ? 2 : 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pack_r3.name);
  }
}
function TheWheelOfChaosComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](0, TheWheelOfChaosComponent_Conditional_13_For_1_Template, 6, 2, "div", 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](2, TheWheelOfChaosComponent_Conditional_13_For_3_Template, 6, 2, "div", 11, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r3.boosterPackData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r3.boosterPackData);
  }
}
function TheWheelOfChaosComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class TheWheelOfChaosComponent {
  constructor($http) {
    this.$http = $http;
    this.isLoading = true;
    this.boosterPackData = [];
    this.spinBtnDisabled = false;
    this.cardWidth = 150;
    this.isSpinning = false;
    this.trackPosition = 0;
    this.imagesLoaded = false;
  }
  ngAfterViewInit() {
    this.$http.get('https://mtgjson.com/api/v5/csv/sealedProducts.csv', {
      responseType: 'text'
    }).subscribe(data => {
      let csvToRowArray = data.split('\n');
      for (let index = 1; index < csvToRowArray.length - 1; index++) {
        let row = csvToRowArray[index].split(',');
        if (row[2] === 'booster_pack') {
          const identifiers = row[4];
          let imageUrl = undefined;
          let name = '';
          for (let part of row) {
            if (part.includes('tcgplayerProductId')) {
              const tcgPlayerProductId = part.match(/([0-9])\w+/g);
              imageUrl = `https://tcgplayer-cdn.tcgplayer.com/product/${tcgPlayerProductId}_in_200x200.jpg`;
            }
            if (part.includes(' Booster Pack')) {
              name = part;
            }
          }
          if (name) {
            this.boosterPackData.push({
              name,
              imageUrl
            });
          }
        }
        if (index === csvToRowArray.length - 2) {
          this.preloadPackImages(this.boosterPackData).then(() => {
            this.isLoading = false;
            this.imagesLoaded = true;
            this.spinBtnDisabled = false;
            this.outputReadout.nativeElement.innerText = 'Ready to Spin!';
            this.shufflePacks();
            this.initTrackLayout();
          }).catch(err => {
            console.error('Failed to cache booster pack arts:', err);
            this.outputReadout.nativeElement.innerText = 'Error Loading Assets';
          });
        }
      }
    });
  }
  shufflePacks() {
    const copy = [...this.boosterPackData];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    this.boosterPackData = copy;
  }
  preloadPackImages(packs) {
    const loadPromises = packs.map(pack => {
      return new Promise(resolve => {
        if (!pack.imageUrl) {
          resolve();
          return;
        }
        const img = new Image();
        img.src = pack.imageUrl;
        img.onload = () => resolve();
        img.onerror = () => {
          console.warn(`Failed to preload image: ${pack.imageUrl}`);
          resolve();
        };
      });
    });
    return Promise.all(loadPromises);
  }
  initTrackLayout() {
    this.tapeTrack.nativeElement.innerHTML = '';
    const dynamicMultiplier = Math.ceil(4000 / (this.boosterPackData.length * this.cardWidth)) + 2;
    for (let m = 0; m < dynamicMultiplier; m++) {
      this.boosterPackData.forEach(pack => {
        const card = document.createElement('div');
        card.className = 'pack-card';
        const artFrame = document.createElement('div');
        artFrame.className = 'pack-art-frame';
        const img = document.createElement('img');
        img.alt = pack.name;
        img.className = 'pack-art';
        if (pack.imageUrl) {
          img.src = pack.imageUrl;
          artFrame.appendChild(img);
        } else {
          artFrame.innerHTML = '<span class="pack-art-placeholder">🎴</span>';
        }
        card.appendChild(artFrame);
        this.tapeTrack.nativeElement.appendChild(card);
      });
    }
    this.trackPosition = -(380 - this.cardWidth / 2);
    this.tapeTrack.nativeElement.style.transform = `translateX(${this.trackPosition}px)`;
    this.isLoading = false;
  }
  spin() {
    if (this.isSpinning || !this.imagesLoaded || this.boosterPackData.length === 0) return;
    this.isSpinning = true;
    this.spinBtnDisabled = true;
    this.outputReadout.nativeElement.classList.remove('reveal');
    this.outputReadout.nativeElement.innerText = 'Spinning...';
    const selectedIndex = Math.floor(Math.random() * this.boosterPackData.length);
    const chosenPack = this.boosterPackData[selectedIndex];
    const singleLoopWidth = this.boosterPackData.length * this.cardWidth;
    // 🎯 ADJUSTED BASELINE: Changed from 305 to 315 to swallow the 10px layout discrepancy
    const baselineOffset = 295;
    // Calculate position inside Loop 2 for the spin animation
    const targetX = baselineOffset - (singleLoopWidth + selectedIndex * this.cardWidth);
    // Reset class state to allow re-triggering animations
    this.tapeTrack.nativeElement.classList.remove('spinning');
    void this.tapeTrack.nativeElement.offsetWidth; // Force reflow
    // Inject the target position into CSS variable
    this.tapeTrack.nativeElement.style.setProperty('--target-x', `${targetX}px`);
    this.tapeTrack.nativeElement.classList.add('spinning');
    // Wait for the 6-second CSS animation to complete perfectly
    setTimeout(() => {
      this.isSpinning = false;
      this.spinBtnDisabled = false;
      this.outputReadout.nativeElement.innerText = chosenPack.name;
      this.outputReadout.nativeElement.classList.add('reveal');
      // Clean up animation class and variable
      this.tapeTrack.nativeElement.classList.remove('spinning');
      this.tapeTrack.nativeElement.style.removeProperty('--target-x');
      // Apply the exact same offset to snap cleanly back to Loop 1
      this.trackPosition = baselineOffset - selectedIndex * this.cardWidth;
      this.tapeTrack.nativeElement.style.transform = `translate3d(${this.trackPosition}px, 0, 0)`;
    }, 6000);
  }
  static #_ = this.ɵfac = function TheWheelOfChaosComponent_Factory(t) {
    return new (t || TheWheelOfChaosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TheWheelOfChaosComponent,
    selectors: [["app-the-wheel-of-chaos"]],
    viewQuery: function TheWheelOfChaosComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tapeTrack = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.outputReadout = _t.first);
      }
    },
    decls: 17,
    vars: 3,
    consts: [["outputReadout", ""], ["tapeTrack", ""], [1, "column-container"], [1, "header-container"], [1, "white-cursive-extra"], [1, "yellow-glow-text"], [1, "spinner-viewscreen"], [1, "viewscreen-selector-bracket"], [1, "spinner-tape-track"], [1, "spin-trigger-btn", 3, "click", "disabled"], ["class", "yellow-glow-text", 4, "ngIf"], [1, "pack-card"], [1, "pack-art-frame"], [3, "src", "alt"], [1, "pack-art-placeholder"], [1, "pack-title"]],
    template: function TheWheelOfChaosComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The Wheel of Chaos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Awaiting Chaos...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TheWheelOfChaosComponent_Conditional_13_Template, 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TheWheelOfChaosComponent_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.spin());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " SPIN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TheWheelOfChaosComponent_div_16_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.imagesLoaded ? 13 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.spinBtnDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.pack-art-placeholder[_ngcontent-%COMP%] {\n  background-color: #a30036;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #050a14;\n  background-image: radial-gradient(circle at center, #091936 0%, #03070f 100%);\n  font-family: \"Impact\", \"Arial Black\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  overflow: hidden;\n  color: #fff;\n}\n\n.header-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.show-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  letter-spacing: 5px;\n  color: #00ffcc;\n  text-transform: uppercase;\n  text-shadow: 0 0 10px rgba(0, 255, 204, 0.4);\n}\n\n\n\n.spinner-viewscreen[_ngcontent-%COMP%] {\n  position: relative;\n  width: 760px;\n  height: 240px;\n  background: rgb(0, 0, 0, 0.6);\n  border: 4px solid #ffffff;\n  border-radius: 12px;\n  box-shadow:\n    0 0 35px rgba(0, 0, 0, 0.4),\n    inset 0 0 20px rgba(0, 0, 0, 0.6);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n\n.viewscreen-selector-bracket[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: -2px;\n  transform: translateX(-50%);\n  width: 150px;\n  height: calc(100% + 4px);\n  outline: 1px solid black;\n  border: 10px solid #ffffff;\n  box-shadow:\n    0 0 20px rgba(0, 0, 0, 0.3),\n    inset 0 0 10px rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  z-index: 9;\n  pointer-events: none;\n}\n\n.spinner-tape-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  height: 100%;\n  width: max-content;\n\n  \n\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n}\n\n\n\n.spinner-tape-track.spinning[_ngcontent-%COMP%] {\n  \n\n  animation: _ngcontent-%COMP%_chaosSpin 6s cubic-bezier(0.15, 0.85, 0.35, 1) forwards;\n}\n\n@keyframes _ngcontent-%COMP%_chaosSpin {\n  0% {\n    transform: translate3d(0, 0, 0);\n  }\n  100% {\n    \n\n    transform: translate3d(var(--target-x, -3000px), 0, 0);\n  }\n}\n\n\n.yellow-glow-text.reveal[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_winner-glow 0.8s ease-in-out infinite alternate;\n}\n@keyframes _ngcontent-%COMP%_winner-glow {\n  from {\n    transform: scale(1);\n    text-shadow: 0 0 10px #ffaa00;\n  }\n  to {\n    transform: scale(1.05);\n    text-shadow:\n      0 0 25px #ffaa00,\n      0 0 10px #ffaa00;\n  }\n}\n\n.pack-art-frame[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 150px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlLXdoZWVsLW9mLWNoYW9zL3RoZS13aGVlbC1vZi1jaGFvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkVBQTZFO0VBQzdFLGdEQUFnRDtFQUNoRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qiw0Q0FBNEM7QUFDOUM7O0FBRUEsMENBQTBDO0FBQzFDO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkI7O3FDQUVtQztFQUNuQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUI7O3FDQUVtQztFQUNuQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7O0VBRWxCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLDJCQUEyQjtBQUM3Qjs7QUFFQSxnQ0FBZ0M7QUFDaEM7RUFDRSxpRkFBaUY7RUFDakYsa0VBQWtFO0FBQ3BFOztBQUVBO0VBQ0U7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLHNEQUFzRDtJQUN0RCxzREFBc0Q7RUFDeEQ7QUFDRjs7O0FBR0E7RUFDRSwwREFBMEQ7QUFDNUQ7QUFDQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCOztzQkFFa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4QiIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5wYWNrLWFydC1wbGFjZWhvbGRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzMDAzNjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MGExNDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgIzA5MTkzNiAwJSwgIzAzMDcwZiAxMDAlKTtcclxuICBmb250LWZhbWlseTogXCJJbXBhY3RcIiwgXCJBcmlhbCBCbGFja1wiLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNob3ctdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgY29sb3I6ICMwMGZmY2M7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAyNTUsIDIwNCwgMC40KTtcclxufVxyXG5cclxuLyogSG9yaXpvbnRhbCBTcGlubmVyIENvcmUgRGlzcGxheSBTdGFnZSAqL1xyXG4uc3Bpbm5lci12aWV3c2NyZWVuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDc2MHB4O1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDAuNik7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICAwIDAgMzVweCByZ2JhKDAsIDAsIDAsIDAuNCksXHJcbiAgICBpbnNldCAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi52aWV3c2NyZWVuLXNlbGVjdG9yLWJyYWNrZXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiAtMnB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA0cHgpO1xyXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXI6IDEwcHggc29saWQgI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OlxyXG4gICAgMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjMpLFxyXG4gICAgaW5zZXQgMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB6LWluZGV4OiA5O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uc3Bpbm5lci10YXBlLXRyYWNrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG5cclxuICAvKiBHUFUgUHJvdGVjdGlvbiBMYXllcnMgKi9cclxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4vKiDDosKawqEgVGhlIENvcmUgU3BpbiBBbmltYXRpb24gw6LCmsKhICovXHJcbi5zcGlubmVyLXRhcGUtdHJhY2suc3Bpbm5pbmcge1xyXG4gIC8qIEFuaW1hdGUgZnJvbSAwIHRvIHRoZSBjYWxjdWxhdGVkIHRhcmdldCBwb3NpdGlvbiB1c2luZyBhIGN1c3RvbSBjdWJpYyBiZXppZXIgKi9cclxuICBhbmltYXRpb246IGNoYW9zU3BpbiA2cyBjdWJpYy1iZXppZXIoMC4xNSwgMC44NSwgMC4zNSwgMSkgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2hhb3NTcGluIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC8qIERyaXZlbiBkeW5hbWljYWxseSBieSB5b3VyIFR5cGVTY3JpcHQgY2FsY3VsYXRpb24gKi9cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QodmFyKC0tdGFyZ2V0LXgsIC0zMDAwcHgpLCAwLCAwKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ueWVsbG93LWdsb3ctdGV4dC5yZXZlYWwge1xyXG4gIGFuaW1hdGlvbjogd2lubmVyLWdsb3cgMC44cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn1cclxuQGtleWZyYW1lcyB3aW5uZXItZ2xvdyB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNmZmFhMDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICB0ZXh0LXNoYWRvdzpcclxuICAgICAgMCAwIDI1cHggI2ZmYWEwMCxcclxuICAgICAgMCAwIDEwcHggI2ZmYWEwMDtcclxuICB9XHJcbn1cclxuXHJcbi5wYWNrLWFydC1mcmFtZSB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
        if (token.Name === uniqueTokens[i].Name && token.Power === uniqueTokens[i].Power && token.Toughness === uniqueTokens[i].Toughness && token.Colors && token.Colors.toString() === uniqueTokens[i].Colors.toString() && token.Text === uniqueTokens[i].Text && token.TypeLine === uniqueTokens[i].TypeLine) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "LOADING....");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TokenComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Orphaned Token Generators (These cards contain the word \"Create\" in their text box but do not follow WOTC's standard wordings for token creation): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function TokenComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", card_r1.name, ",");
  }
}
function TokenComponent_tr_20_span_2_Template(rf, ctx) {
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
function TokenComponent_tr_20_span_4_Template(rf, ctx) {
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
function TokenComponent_tr_20_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TokenComponent_tr_20_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Au");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TokenComponent_tr_20_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 17);
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
function TokenComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 10)(1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TokenComponent_tr_20_span_2_Template, 2, 2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TokenComponent_tr_20_span_4_Template, 2, 4, "span", 11)(5, TokenComponent_tr_20_span_5_Template, 2, 0, "span", 12)(6, TokenComponent_tr_20_span_6_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, TokenComponent_tr_20_span_15_Template, 2, 2, "span", 14);
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
    decls: 21,
    vars: 4,
    consts: [["class", "yellow-glow-text", 4, "ngIf"], [1, "error-box"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [1, "table-striped"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "yellow-glow-text"], [3, "ngClass"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "symbol color-pink", 4, "ngIf"], ["class", "symbol color-gold", 4, "ngIf"], ["class", "badge card-pill", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "symbol", "color-pink"], [1, "symbol", "color-gold"], [1, "badge", "card-pill", 3, "ngClass"]],
    template: function TokenComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TokenComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TokenComponent_div_2_Template, 3, 0, "div", 2)(3, TokenComponent_span_3_Template, 3, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "table", 4)(5, "thead", 5)(6, "tr")(7, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "P/T");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Type Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Cards that Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, TokenComponent_tr_20_Template, 16, 15, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.orphanedCards.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.orphanedCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.tokens);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe],
    styles: [".highlighted[_ngcontent-%COMP%] {\n    background-color: yellow;\n}\n\n.card-pill[_ngcontent-%COMP%] {\n    margin: 3px;\n}\n\n.uncommon[_ngcontent-%COMP%] {\n    background-color: darkgrey;\n}\n.rare[_ngcontent-%COMP%] {\n    background-color: goldenrod;\n}\n.mythic[_ngcontent-%COMP%] {\n    background-color: orange;\n}\n\n\n.color-pink[_ngcontent-%COMP%] {\n    background-color: palevioletred;\n    color: white;\n    padding: 2px 8px;\n}\n.color-gold[_ngcontent-%COMP%] {\n    background-color: goldenrod;\n    color: white;\n    padding: 2px 8px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdG9rZW4vdG9rZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7O0FBR0E7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5oaWdobGlnaHRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5jYXJkLXBpbGwge1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbn1cclxuXHJcbi51bmNvbW1vbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcclxufVxyXG4ucmFyZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XHJcbn1cclxuLm15dGhpYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcblxyXG4uY29sb3ItcGluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMnB4IDhweDtcclxufVxyXG4uY29sb3ItZ29sZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAycHggOHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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



function TribalComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 5)(1, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 2)(4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 2)(7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 2)(10, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 2)(13, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 2)(16, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 2)(19, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 3)(24, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td", 3)(27, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td", 3)(30, "a");
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
    decls: 29,
    vars: 1,
    consts: [[1, "error-box", "text-center"], [1, "table", "table-striped", "table-bordered"], ["scope", "col"], ["scope", "col", 1, "silver"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["target", "_blank", 3, "href"]],
    template: function TribalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Under Construction\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 1)(3, "thead")(4, "tr")(5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Creature Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cards w/ Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Commanders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Makes Tokens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Turns Into Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Hoses Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Kindred Effects/Lords");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Viability");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Un-Cards w/ Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Un-Commanders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Un-Kindred Effects/Lords");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, TribalComponent_tr_28_Template, 32, 15, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
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