export const API_Port = process.env.API_PORT ?? 3001;
export const DebugMode = process.env.DEBUG === "true" ? true : false;
export const HomeDir = ((__dirname.replace("\\build", "")).replace("/build", ""));

export const MongoDB_URI = process.env.MONGO_URI ?? "mongodb://localhost/mmlol";