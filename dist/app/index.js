"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//src/app/index.ts
// Läs in .env-filen
require("dotenv").config();
const config_1 = __importDefault(require("./config"));
const express_1 = require("./initializers/express");
const logger_1 = require("./libs/logger");
try {
    logger_1.logger.info(`[${config_1.default.APP_NAME}] Bootstrapping micro service`);
    (0, express_1.server)({ hostname: config_1.default.NODE_HOSTNAME, port: config_1.default.NODE_PORT });
}
catch (error) {
    logger_1.logger.error(`[${name}] Caught exception: ${error}`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFM0Isc0RBQThCO0FBQzlCLG9EQUFnRDtBQUNoRCwwQ0FBdUM7QUFFdkMsSUFBSSxDQUFDO0lBQ0gsZUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFNLENBQUMsUUFBUSwrQkFBK0IsQ0FBQyxDQUFDO0lBQ2hFLElBQUEsZ0JBQU0sRUFBQyxFQUFFLFFBQVEsRUFBRSxnQkFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7QUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO0lBQ2YsZUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksdUJBQXVCLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDdkQsQ0FBQyJ9