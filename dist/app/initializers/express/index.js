"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
//src/app/initializers/express/index.ts
const express = __importStar(require("express"));
const login_1 = __importDefault(require("../../component/use-cases/login"));
const compression = __importStar(require("compression"));
const cors = __importStar(require("cors"));
const helmet = __importStar(require("helmet"));
const express_1 = __importDefault(require("./libs/express"));
const controller_1 = require("../../component/controller");
const logger_1 = require("../../libs/logger");
const mongodb_1 = require("../../libs/mongodb");
const index_1 = __importDefault(require("../../config/index"));
const dbConfig = index_1.default.DB_CONFIG;
const app = express();
const json = express.json;
const urlencoded = express.urlencoded;
// Skapar login-funktionen med beroenden
const login = (0, login_1.default)({
    findDocuments: mongodb_1.findDocuments,
    logger: logger_1.logger,
});
// Lägger till login-route i mina routes
controller_1.routes.push({
    path: "/api/login",
    method: "post",
    component: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = yield login.login({
                username: req.body.username,
                password: req.body.password,
                dbConfig: index_1.default.DB_CONFIG,
            });
            res.json({ token });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }),
});
const server = ({ hostname, port }) => (0, express_1.default)({
    json,
    urlencoded,
    app,
    cors,
    compression,
    helmet,
    logger: logger_1.logger,
}).server({ hostname, port, routes: controller_1.routes });
exports.server = server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2luaXRpYWxpemVycy9leHByZXNzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBQ3ZDLGlEQUFtQztBQUNuQyw0RUFBMEQ7QUFDMUQseURBQTJDO0FBQzNDLDJDQUE2QjtBQUM3QiwrQ0FBaUM7QUFDakMsNkRBQTBDO0FBQzFDLDJEQUFvRDtBQUNwRCw4Q0FBMkM7QUFDM0MsZ0RBQW1EO0FBRW5ELCtEQUF3QztBQUV4QyxNQUFNLFFBQVEsR0FBRyxlQUFNLENBQUMsU0FBUyxDQUFDO0FBQ2xDLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFDMUIsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUV0Qyx3Q0FBd0M7QUFDeEMsTUFBTSxLQUFLLEdBQUcsSUFBQSxlQUFXLEVBQUM7SUFDeEIsYUFBYSxFQUFiLHVCQUFhO0lBQ2IsTUFBTSxFQUFOLGVBQU07Q0FDUCxDQUFDLENBQUM7QUFFSCx3Q0FBd0M7QUFDeEMsbUJBQU0sQ0FBQyxJQUFJLENBQUM7SUFDVixJQUFJLEVBQUUsWUFBWTtJQUNsQixNQUFNLEVBQUUsTUFBTTtJQUNkLFNBQVMsRUFBRSxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUM1QixJQUFJLENBQUM7WUFDSCxNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQzlCLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQzNCLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQzNCLFFBQVEsRUFBRSxlQUFNLENBQUMsU0FBUzthQUMzQixDQUFDLENBQUM7WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNmLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDSCxDQUFDLENBQUE7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLE1BQU0sR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FDcEMsSUFBQSxpQkFBWSxFQUFDO0lBQ1gsSUFBSTtJQUNKLFVBQVU7SUFDVixHQUFHO0lBQ0gsSUFBSTtJQUNKLFdBQVc7SUFDWCxNQUFNO0lBQ04sTUFBTSxFQUFOLGVBQU07Q0FDUCxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQU4sbUJBQU0sRUFBRSxDQUFDLENBQUM7QUFFL0Isd0JBQU0ifQ==