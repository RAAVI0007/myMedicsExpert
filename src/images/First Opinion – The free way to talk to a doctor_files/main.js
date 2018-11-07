(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_patientdata_patientdata_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/patientdata/patientdata.component */ "./src/app/components/patientdata/patientdata.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/faqs/faqs.component */ "./src/app/components/faqs/faqs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'faqs', component: _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_3__["FaqsComponent"] },
    { path: 'patient', component: _components_patientdata_patientdata_component__WEBPACK_IMPORTED_MODULE_2__["PatientdataComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-bg-img { \n    background-image: url(\"/src/images/6.png\");\n    min-height: 380px;\n  \n    /* Center and scale the image nicely */\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    \n    /* Needed to position the navbar */\n    position: relative;\n  }\n\n.product-holder {\n    position: relative;\n    display: block;\n}\n\n.plus-image {\n    left: 10%;\n    top: 10%;\n    position: absolute;\n    margin-top: -25px;\n    margin-left: -25px;\n}\n\n.thumbnail {\n    position: relative;\n}\n\n.caption {\n    position: absolute;\n    top: 45%;\n    left: 0;\n    width: 100%;\n}\n\n/* Position the navbar container inside the image */\n\n.container {\n    position: absolute;\n    margin: 20%;\n    width: auto;\n\n  }\n\n/* The navbar */\n\n/* Navbar links */\n\n.homenav a {\n    float: right;\n    color: #f2f2f2;\n    text-align: center;\n    padding: 14px 16px;\n    font-size: 16px; \n  }\n\n/* CSS used here will be applied after bootstrap.css */\n\nhtml,body {\n    height:100%;\n      \n  }\n\n.first {\n    padding-top:140px;\n    height:100vh;\n    min-height:400px;\n    background-size:cover;\n    background-image:url(\"/src/images/6.png\");\n  }\n\n.affix {         \n    transition:padding 0.2s ease-out;\n  \n  }\n\n.affix-top {\n    /* navbar style at top */\n    background:transparent;\n    border-color:transparent;\n    padding: 15px;         \n    transition:all 0.5s ease;  \n  }\n\n.affix-top .nav>li>a {\n     color: #000;\n  }\n\n.affix-top .navbar-collapse {\n     border-color:transparent;\n     box-shadow:initial;\n  }\n\nsection {\n    height:calc(90% - 50px);\n    height: 90vh;\n  }\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav>\n  <a routerLink=\"/patient\">Patient Info</a>\n</nav> -->\n\n \n  <!--<img  src=\"/src/images/6.png\" class=\"img-fluid\" alt=\"Responsive image\" width=\"100%\" \n    height=\"100%\">-->\n\n<!--<ngb-carousel *ngIf=\"images\">\n  <ng-template ngbSlide>\n    <img [src]=\"images[0]\" alt=\"Random first slide\">\n    <div class=\"carousel-caption\">\n      <h3>Medical Serices That You Can Truest</h3>\n      <p>During the chat your doctor will provide you with expert medical information tailored to your health situation.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[1]\" alt=\"Random second slide\">\n    <div class=\"carousel-caption\">\n      <h3>Second slide label</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n    </div>\n  </ng-template>-->\n  <!--<ng-template ngbSlide>\n    <img [src]=\"images[2]\" alt=\"Random third slide\" width=\"100%\" height=\"100%\" class=\"product-image\">\n    <img src=\"/src/images/logo-white.png\" alt=\"Random third slide\"  class=\"plus-image\">\n    <div class=\"caption\">\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quisquam?</p>\n  </div>\n  </ng-template>\n</ngb-carousel>-->\n\n<!--<div class=\"row\" id=\"box-search\">\n  <div >\n    <img [src]=\"images[2]\" alt=\"Random third slide\" width=\"100%\" height=\"100%\" class=\"product-image\">\n    <img src=\"/src/images/logo-white.png\" alt=\"Random third slide\"  class=\"plus-image\">\n   \n  </div>\n</div>-->\n<div class=\"home-bg-img\"> \n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" \n    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"nav navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Services</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Our Doctors</a>\n          </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Contact</a>\n        </li>\n        <li class=\"nav-item\"> \n                <a class=\"nav-link\" routerLink=\"/faqs\">FAQS</a> \n          </li>\n      </ul>\n</div></nav>\n</div>\n<!--<div class=\"home-bg-img\"> \n<div class=\"home-bg-img\">\n    <div class=\"homenav\">\n        <a href=\"#about\">About Us</a>\n        <a href=\"#contact\">FAQS</a>\n        <a href=\"#news\">OUR DOCTORS</a>\n      <a href=\"#home\">HOW IT WORKS </a>\n    </div>\n</div> -->\n \n<div id=\"container\">\n    <!--<app-patientdata></app-patientdata>-->\n    <div id=\"content\">\n      <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'First Opinion – The free way to talk to a doctor2';
        /*images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);*/
        /*images = [1, 2, 3].map(() => `/Users/rd/Desktop/Images=${Math.random()}`);*/
        this.images = ['/src/images/1.jpeg',
            '/src/images/2.jpeg',
            '/src/images/6.png'];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_patientdata_patientdata_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/patientdata/patientdata.component */ "./src/app/components/patientdata/patientdata.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/faqs/faqs.component */ "./src/app/components/faqs/faqs.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/components/aboutus/aboutus.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_patientdata_patientdata_component__WEBPACK_IMPORTED_MODULE_4__["PatientdataComponent"],
                _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_5__["FaqsComponent"],
                _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["AboutusComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  aboutus works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/components/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/components/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/components/faqs/faqs.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/faqs/faqs.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n    font-family: Arial, Verdana;\n    font-weight: 800;\n    font-size: 2.5rem;\n    color: #091f2f;\n    text-transform: uppercase;\n}\n\n.accordion-section .panel-default > .panel-heading {\n    border: 0;\n    background: #f4f4f4;\n    padding: 0;\n}\n\n.accordion-section .panel-default .panel-title a {\n    display: block;\n    font-style: italic;\n    font-size: 1.5rem;\n}"

/***/ }),

/***/ "./src/app/components/faqs/faqs.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/faqs/faqs.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"accordion-section clearfix mt-3\" aria-label=\"Question Accordions\">\n    <div class=\"container\">\n    \n      <h2>Frequently Asked Questions </h2>\n      <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading p-3 mb-3\" role=\"tab\" id=\"heading0\">\n        <h3 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" title=\"\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse0\" aria-expanded=\"true\" aria-controls=\"collapse0\">\n          What are the benefits of Solodev CMS?\n          </a>\n        </h3>\n        </div>\n        <div id=\"collapse0\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading0\">\n        <div class=\"panel-body px-3 mb-4\">\n          <p>With Solodev CMS, you and your visitors will benefit from a finely-tuned technology stack that drives the highest levels of site performance, speed and engagement - and contributes more to your bottom line. Our users fell in love with:</p>\n          <ul>\n          <li>Light speed deployment on the most secure and stable cloud infrastructure available on the market.</li>\n          <li>Scalability – pay for what you need today and add-on options as you grow.</li>\n          <li>All of the bells and whistles of other enterprise CMS options but without the design limitations - this CMS simply lets you realize your creative visions.</li>\n          <li>Amazing support backed by a team of Solodev pros – here when you need them.</li>\n          </ul>\n        </div>\n        </div>\n      </div>\n      \n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading p-3 mb-3\" role=\"tab\" id=\"heading1\">\n        <h3 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" title=\"\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\" aria-expanded=\"true\" aria-controls=\"collapse1\">\n          How easy is it to build a website with Solodev CMS?\n          </a>\n        </h3>\n        </div>\n        <div id=\"collapse1\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading1\">\n        <div class=\"panel-body px-3 mb-4\">\n          <p>Building a website is extremely easy. With a working knowledge of HTML and CSS you will be able to have a site up and running in no time.</p>\n        </div>\n        </div>\n      </div>\n      \n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading p-3 mb-3\" role=\"tab\" id=\"heading2\">\n        <h3 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" title=\"\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\" aria-expanded=\"true\" aria-controls=\"collapse2\">\n          What is the uptime for Solodev CMS?\n          </a>\n        </h3>\n        </div>\n        <div id=\"collapse2\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading2\">\n        <div class=\"panel-body px-3 mb-4\">\n          <p>Using Amazon AWS technology which is an industry leader for reliability you will be able to experience an uptime in the vicinity of 99.95%.</p>\n        </div>\n        </div>\n      </div>\n      \n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading p-3 mb-3\" role=\"tab\" id=\"heading3\">\n        <h3 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" title=\"\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\" aria-expanded=\"true\" aria-controls=\"collapse3\">\n          Can Solodev CMS handle multiple websites for my company?\n          </a>\n        </h3>\n        </div>\n        <div id=\"collapse3\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading3\">\n        <div class=\"panel-body px-3 mb-4\">\n          <p>Yes, Solodev CMS is built to handle the needs of any size company. With our Multi-Site Management, you will be able to easily manage all of your websites.</p>\n        </div>\n        </div>\n      </div>\n      </div>\n    \n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/components/faqs/faqs.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/faqs/faqs.component.ts ***!
  \***************************************************/
/*! exports provided: FaqsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsComponent", function() { return FaqsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqsComponent = /** @class */ (function () {
    function FaqsComponent() {
    }
    FaqsComponent.prototype.ngOnInit = function () {
    };
    FaqsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faqs',
            template: __webpack_require__(/*! ./faqs.component.html */ "./src/app/components/faqs/faqs.component.html"),
            styles: [__webpack_require__(/*! ./faqs.component.css */ "./src/app/components/faqs/faqs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqsComponent);
    return FaqsComponent;
}());



/***/ }),

/***/ "./src/app/components/patientdata/patientdata.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/patientdata/patientdata.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/patientdata/patientdata.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/patientdata/patientdata.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    Hello , below are the buttons\n</div>\n\n<button type=\"button\" class=\"btn btn-primary\">Primary</button>\n<button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n<button type=\"button\" class=\"btn btn-success\">Success</button>\n<button type=\"button\" class=\"btn btn-danger\">Danger</button>\n<button type=\"button\" class=\"btn btn-warning\">Warning</button>\n<button type=\"button\" class=\"btn btn-info\">Info</button>\n<button type=\"button\" class=\"btn btn-light\">Light</button>\n<button type=\"button\" class=\"btn btn-dark\">Dark</button>\n<button type=\"button\" class=\"btn btn-link\">Link</button>\n"

/***/ }),

/***/ "./src/app/components/patientdata/patientdata.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/patientdata/patientdata.component.ts ***!
  \*****************************************************************/
/*! exports provided: PatientdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientdataComponent", function() { return PatientdataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PatientdataComponent = /** @class */ (function () {
    function PatientdataComponent() {
    }
    PatientdataComponent.prototype.ngOnInit = function () {
    };
    PatientdataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patientdata',
            template: __webpack_require__(/*! ./patientdata.component.html */ "./src/app/components/patientdata/patientdata.component.html"),
            styles: [__webpack_require__(/*! ./patientdata.component.css */ "./src/app/components/patientdata/patientdata.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PatientdataComponent);
    return PatientdataComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/rd/Desktop/EclipseWorkSpace/MyExpertMedics/src/main/resources/static/MyExpertMedicsUI/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/rd/Desktop/EclipseWorkSpace/MyExpertMedics/src/main/resources/static/MyExpertMedicsUI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map