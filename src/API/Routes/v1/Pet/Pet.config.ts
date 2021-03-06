import { Application, Router } from "express";

export default class PetRouter
{
    private server: Application;
    private router = Router();

    constructor(server: Application, version: string)
    {
        this.server = server;
        this.server.use(`/${version}/pets`, this.router);

        this.router.get("/", [

        ]);

    }

}