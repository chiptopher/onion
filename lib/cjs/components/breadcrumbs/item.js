"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadcrumbItem = void 0;
var react_1 = __importDefault(require("react"));
var link_1 = require("../../blocks/link");
var body_1 = require("../../blocks/typography/body");
var BreadcrumbItem = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(body_1.Body, { tagName: "span" },
        react_1.default.createElement(link_1.Link, { color: "primary", tagName: "span" }, children)));
};
exports.BreadcrumbItem = BreadcrumbItem;
