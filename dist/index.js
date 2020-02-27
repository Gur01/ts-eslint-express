"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
let port = 4000;
app.get('/', (req, res) => {
    res.send('Hello World');
});
const connect = (currentPort) => {
    // eslint-disable-next-line no-console
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
