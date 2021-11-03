import { Application } from "express";
import { readdirSync } from "fs";
import { HomeDir } from "../../Config";
import Logger from "../../Lib/Logger";


/**
 * 
 * @param {Application} server The server from express
 * @description
 * Handles all routes dynamic
 */
export default function RouteHandler(server: Application): void
{
    let routeDir = HomeDir+"/build/API/Routes";
    readdirSync(`${routeDir}`).forEach((version) => {
        readdirSync(`${routeDir}/${version}`).forEach((route) => {
            const routes = readdirSync(`${routeDir}/${version}/${route}`).filter((f) => f.endsWith('config.js'));
            for(let file of routes)
            {
                const pull = require(`${routeDir}/${version}/${route}/${file}`).default;
                if(pull)
                {
                    Logger.info(`Adding new router in version ${version}, name ${pull.name ?? ""}`)
                    new pull(server, version);
                }
                continue;
            }
        })
    })
}