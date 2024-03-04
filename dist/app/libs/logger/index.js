"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
//src/app/libs/logger/index.ts
const winston_1 = require("winston");
const transports_1 = __importDefault(require("./libs/transports"));
const { combine, timestamp, errors } = winston_1.format;
const ownTransports = (() => (0, transports_1.default)({ format: winston_1.format, transports: winston_1.transports }).logger())();
const logger = (0, winston_1.createLogger)({
    format: combine(errors({ stack: true }), timestamp({ format: "YYYY-MM-DD HH:mm:ss" })),
    defaultMeta: { service: process.env.NAME },
    transports: ownTransports,
});
exports.logger = logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2xpYnMvbG9nZ2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhCQUE4QjtBQUM5QixxQ0FBMkQ7QUFDM0QsbUVBQWlEO0FBRWpELE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLGdCQUFNLENBQUM7QUFDOUMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FDMUIsSUFBQSxvQkFBZ0IsRUFBQyxFQUFFLE1BQU0sRUFBTixnQkFBTSxFQUFFLFVBQVUsRUFBVixvQkFBVSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFFdkQsTUFBTSxNQUFNLEdBQUcsSUFBQSxzQkFBWSxFQUFDO0lBQzFCLE1BQU0sRUFBRSxPQUFPLENBQ2IsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQ3ZCLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsRUFBRSxDQUFDLENBQzdDO0lBQ0QsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO0lBQzFDLFVBQVUsRUFBRSxhQUFhO0NBQzFCLENBQUMsQ0FBQztBQUVNLHdCQUFNIn0=