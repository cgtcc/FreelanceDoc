"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const app_component_1 = require("./app.component");
const homepage_component_1 = require("./homepage/homepage.component");
const documents_component_1 = require("./documents/documents.component");
const proposal_list_component_1 = require("./proposal/proposal-list.component");
const proposal_new_component_1 = require("./proposal/proposal-new.component");
const proposal_show_component_1 = require("./proposal/proposal-show.component");
const app_routing_module_1 = require("./app-routing.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            homepage_component_1.HomepageComponent,
            documents_component_1.DocumentsComponent,
            proposal_list_component_1.ProposalListComponent,
            proposal_new_component_1.ProposalNewComponent,
            proposal_show_component_1.ProposalShowComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map