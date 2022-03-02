"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = require("express");
const controller_1 = __importDefault(require("../controllers/controller"));
class Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.router.get("/contactos", (req, res) => {
            controller_1.default.getContactos(req, res);
        });
        this.router.get("/contactos/:idContacto", (req, res) => {
            controller_1.default.findContacto(req, res);
        });
        this.router.post("/contactos", (req, res) => {
            controller_1.default.postContacto(req, res);
        });
        this.router.put("/contactos/:idContacto", (req, res) => {
            controller_1.default.putContacto(req, res);
        });
        this.router.delete("/deleteContacto/:idContacto", (req, res) => {
            controller_1.default.deleteContacto(req, res);
        });
    }
}
exports.Routes = Routes;
