import express from "express";
import cors from "cors";
import Logger from "../Lib/Logger";
import { API_Port } from "../Config";
import { APIError } from "./Responses/Response";
import RouteHandler from "./Handlers/RouteHandler";

const server = express();

server.use(cors({
    origin: true,
    credentials: true
}));

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'mmlol.pet');
    next();
});

RouteHandler(server);

const sv = server.listen(API_Port, () => Logger.info(`Server listing on port ${API_Port}`));

server.use("*", (req, res) => {
    return APIError({
        text: `Couldn't find what you were looking for.`
    })(res);
})