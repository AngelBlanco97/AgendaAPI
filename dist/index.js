"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = require("mongoose");
const routes_1 = require("./routes/routes");
const config_1 = __importDefault(require("./config/config"));
class Index {
    constructor() {
        this.app = (0, express_1.default)();
        this.configApp();
        this.configServer();
        this.configRoutes();
    }
    configRoutes() {
        this.app.use(new routes_1.Routes().router);
    }
    configApp() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    configServer() {
        this.app.set("port", config_1.default.SERVER.PORT || 4000);
        const port = this.app.get("port");
        this.app.listen(port, () => {
            console.log("Server listening on port: ", port);
        });
    }
}
(0, mongoose_1.connect)(config_1.default.DB.MONGO_URL || "mongodb://localhost/apiTask").then(() => {
    console.log("Connected to MongoDB");
    new Index();
});
