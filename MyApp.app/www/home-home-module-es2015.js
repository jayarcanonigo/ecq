(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n    <ion-header>\n      <ion-toolbar color=\"dark\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-toolbar>\n    </ion-header>\n      <div class=\"profile-image\">\n              </div>\n\n    <ion-content  color=\"dark\">\n      <ion-list>\n          <ion-menu-toggle auto-hide=\"true\" *ngFor=\"let p of appPages; let i = index\">\n              <ion-item  color=\"dark\" (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n                <ion-icon slot=\"start\" [name]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n                <ion-label>{{ p.title }}</ion-label>\n              </ion-item>\n          </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: 'home',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [{
                path: '',
                loadChildren: () => Promise.all(/*! import() | pages-dashboard-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ../pages/dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(m => m.DashboardPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() | pages-profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../pages/profile/profile.module */ "./src/app/pages/profile/profile.module.ts")).then(m => m.ProfilePageModule)
            },
            {
                path: 'badges',
                loadChildren: () => Promise.all(/*! import() | pages-badges-badges-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-badges-badges-module")]).then(__webpack_require__.bind(null, /*! ../pages/badges/badges.module */ "./src/app/pages/badges/badges.module.ts")).then(m => m.BadgesPageModule)
            },
            {
                path: 'hospital',
                loadChildren: () => Promise.all(/*! import() | pages-hospital-hospital-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-hospital-hospital-module")]).then(__webpack_require__.bind(null, /*! ../pages/hospital/hospital.module */ "./src/app/pages/hospital/hospital.module.ts")).then(m => m.HospitalPageModule)
            },
            {
                path: 'faqs',
                loadChildren: () => Promise.all(/*! import() | pages-faqs-faqs-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-faqs-faqs-module")]).then(__webpack_require__.bind(null, /*! ../pages/faqs/faqs.module */ "./src/app/pages/faqs/faqs.module.ts")).then(m => m.FaqsPageModule)
            },
            {
                path: 'help',
                loadChildren: () => Promise.all(/*! import() | pages-help-help-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-help-help-module")]).then(__webpack_require__.bind(null, /*! ../pages/help/help.module */ "./src/app/pages/help/help.module.ts")).then(m => m.HelpPageModule)
            },
            {
                path: 'order',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-order-order-module */ "pages-order-order-module").then(__webpack_require__.bind(null, /*! ../pages/order/order.module */ "./src/app/pages/order/order.module.ts")).then(m => m.OrderPageModule)
            },
            {
                path: 'google-map',
                loadChildren: () => Promise.all(/*! import() | pages-google-map-google-map-module */[__webpack_require__.e("default~pages-google-map-google-map-module~pages-login-login-module"), __webpack_require__.e("pages-google-map-google-map-module")]).then(__webpack_require__.bind(null, /*! ../pages/google-map/google-map.module */ "./src/app/pages/google-map/google-map.module.ts")).then(m => m.GoogleMapPageModule)
            }
        ]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-note {\n  padding-left: 6px;\n}\n\nion-toolbar {\n  text-align: right;\n  padding-right: 10px;\n}\n\nion-list {\n  padding: 0px;\n}\n\n.image-container {\n  width: 100% px;\n  align-content: center;\n}\n\n.profile-image {\n  margin: auto;\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  background: url(http://news.bbcimg.co.uk/media/images/59678000/jpg/_59678991_profile_kimjongun_afp2_crop142914682.jpg) no-repeat;\n  background-position: -15px -3px;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0RvY3VtZW50cy9wYW5nYXcvZWNxL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDQSxZQUFBO0FDR0E7O0FEREE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNJQTs7QURGQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUdBLGtCQUFBO0VBQ0UsZ0lBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0FDS04iLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW5vdGV7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG5pb24tdG9vbGJhciB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbmlvbi1saXN0e1xucGFkZGluZzogMHB4O1xufVxuLmltYWdlLWNvbnRhaW5lcntcbndpZHRoOiAxMDAlcHg7XG5hbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbWFnZSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTsgXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7IFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IHVybChodHRwOi8vbmV3cy5iYmNpbWcuY28udWsvbWVkaWEvaW1hZ2VzLzU5Njc4MDAwL2pwZy9fNTk2Nzg5OTFfcHJvZmlsZV9raW1qb25ndW5fYWZwMl9jcm9wMTQyOTE0NjgyLmpwZykgbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE1cHggLTNweDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cblx0XG4iLCJpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlIHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHA6Ly9uZXdzLmJiY2ltZy5jby51ay9tZWRpYS9pbWFnZXMvNTk2NzgwMDAvanBnL181OTY3ODk5MV9wcm9maWxlX2tpbWpvbmd1bl9hZnAyX2Nyb3AxNDI5MTQ2ODIuanBnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNXB4IC0zcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() {
        this.selectedIndex = 0;
        this.appPages = [
            {
                title: 'Dashboard',
                url: '/home/',
                icon: 'apps'
            },
            {
                title: 'Profile',
                url: '/home/profile',
                icon: 'person'
            },
            {
                title: 'Order',
                url: '/home/order',
                icon: 'cart'
            },
            {
                title: 'Your Location',
                url: '/home/google-map',
                icon: 'location'
            }
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    }
    ngOnInit() {
    }
};
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map