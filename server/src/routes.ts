import express, { response } from "express";
import ClassesControler from "./controllers/ClassesController";
import ConnectionsControler from "./controllers/ConnectionsController";

const routes = express.Router();

const classesController = new ClassesControler();
const connectionsController = new ConnectionsControler();

routes.post("/classes", classesController.create);
routes.get("/classes", classesController.index);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;
