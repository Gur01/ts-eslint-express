"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
let port = 4000;
app.use('/', routes_1.default.countries);
const connect = (currentPort) => {
    app.listen(currentPort, () => console.log(`Listening on port ${currentPort}`));
};
process.on('uncaughtException', (error) => {
    if (error.code === 'EADDRINUSE') {
        port += 1;
        connect(port);
    }
    else {
        // eslint-disable-next-line no-console
        console.log(error);
    }
});
connect(port);
