"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const agenda_1 = __importDefault(require("../models/agenda"));
class Controller {
    getContactos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contacto = yield agenda_1.default.find();
            if (contacto) {
                return res.status(200).json(contacto);
            }
            return res.status(404).json({ res: "contacto no encontrado" });
        });
    }
    findContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contacto = yield agenda_1.default.findOne({ _id: req.params.idContacto });
            if (contacto) {
                return res.status(200).json(contacto);
            }
            return res.status(404).json({ res: "contacto no encontrado" });
        });
    }
    postContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contacto = new agenda_1.default(req.body);
            if (contacto) {
                yield contacto.save();
                return res.status(201).json(contacto);
            }
            return res.status(404).json({ res: "No se pudo añadir el contacto" });
        });
    }
    putContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const change = req.body;
            const updateContacto = yield agenda_1.default.updateOne({ _id: req.params.idContacto }, change);
            if (updateContacto) {
                return res.status(200).json(updateContacto);
            }
            return res.status(404).json({ Error: "Error al modificar el contacto" });
        });
    }
    deleteContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contacto = yield agenda_1.default.deleteOne({ _id: req.params.idContacto });
            return res.status(200).json({ res: "Contacto eliminado" });
        });
    }
}
exports.default = new Controller();
