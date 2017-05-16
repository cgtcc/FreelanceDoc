"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let DocumentsComponent = class DocumentsComponent {
    constructor() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
            {
                title: "Document 1",
                description: "lorem ipsum",
                file_url: 'http://google.com',
                updated_at: '05/14/2017',
                image_url: './images/1.svg'
            },
            {
                title: "Document 2",
                description: "lorem ipsum",
                file_url: 'http://google.com',
                updated_at: '05/14/2017',
                image_url: './images/1.svg'
            },
            {
                title: "Document 3",
                description: "lorem ipsum",
                file_url: 'http://google.com',
                updated_at: '05/14/2017',
                image_url: './images/1.svg'
            },
        ];
    }
};
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: './documents.component.html'
    })
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map