import express, { application, Application } from "express";
import morgan from "morgan";
import cors from "cors";
import { connect } from "mongoose";
import { Routes } from "./routes/routes";
import config from "./config/config"

class Index {
  app: Application;
  constructor() {
    this.app = express();
    this.configApp();
    this.configServer();
    this.configRoutes();
  }

  public configRoutes() {
    this.app.use(new Routes().router);
  }
  public configApp() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  public configServer() {
    this.app.set("port", config.SERVER.PORT || 4000);
    const port = this.app.get("port");
    this.app.listen(port, () => {
      console.log("Server listening on port: ", port);
    });
  }
}

connect(config.DB.MONGO_URL || "mongodb://localhost/apiTask").then(() => {
  console.log("Connected to MongoDB");
  new Index();
});