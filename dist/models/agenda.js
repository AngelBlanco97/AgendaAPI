"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const agendaSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
    },
    tlf: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
});
exports.default = (0, mongoose_1.model)("contactos", agendaSchema);
