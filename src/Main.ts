require("dotenv").config();
require("./API/API");
require("./Database/Mongo");
import Logger from "./Lib/Logger";

Logger.info(`Starting...`);