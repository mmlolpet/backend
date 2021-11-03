import { Application, Router } from "express";

export default class UserRouter
{
    private server: Application;
    private router = Router();

    constructor(server: Application, version: string)
    {
        this.server = server;
        this.server.use(`/${version}/users`, this.router);

        this.router.get("/", [

        ]);

    }

}