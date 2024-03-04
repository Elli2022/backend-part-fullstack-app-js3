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
Object.defineProperty(exports, "__esModule", { value: true });
//src/tests/config/index.ts
const path = __importStar(require("path"));
const APP_NAME = "AUTH-MS-TEST";
const NODE_ENV = "test";
const FILE_FOLDER_NAME = "data";
const FILE_FOLDER_PATH = path.join(__dirname, "../data/");
const FILE_DB_NAME = "users.json";
const FILE_DB_PATH = `${FILE_FOLDER_PATH}/${FILE_DB_NAME}`;
const DB_CONFIG = {
    dbName: "db_my_app_test",
    dbUri: process.env.MONGODB_DB_URL, // Använd miljövariabeln för anslutnings-URL
    dbColl: "coll_users",
};
const ERROR_MSG = {
    post: {
        MISSING_PARAMETER: "missing parameter: ",
        EXISTING_USER: "user already exists",
        INVALID_EMAIL: "invalid email",
    },
};
const TEST_DATA = {
    user1: {
        username: "user1",
        password: "password1",
        email: "user1@example.com",
    },
    user2: {
        username: "user2",
        password: "password2",
        email: "user2@example.com",
    },
};
exports.default = Object.freeze({
    APP_NAME,
    NODE_ENV,
    ERROR_MSG,
    DB_CONFIG,
    FILE_FOLDER_NAME,
    FILE_FOLDER_PATH,
    FILE_DB_NAME,
    FILE_DB_PATH,
    TEST_DATA,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdHMvY29uZmlnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQkFBMkI7QUFDM0IsMkNBQTZCO0FBQzdCLE1BQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQztBQUNoQyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUM7QUFDeEIsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMxRCxNQUFNLFlBQVksR0FBRyxZQUFZLENBQUM7QUFDbEMsTUFBTSxZQUFZLEdBQUcsR0FBRyxnQkFBZ0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUUzRCxNQUFNLFNBQVMsR0FBRztJQUNoQixNQUFNLEVBQUUsZ0JBQWdCO0lBQ3hCLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSw0Q0FBNEM7SUFDL0UsTUFBTSxFQUFFLFlBQVk7Q0FDckIsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFHO0lBQ2hCLElBQUksRUFBRTtRQUNKLGlCQUFpQixFQUFFLHFCQUFxQjtRQUN4QyxhQUFhLEVBQUUscUJBQXFCO1FBQ3BDLGFBQWEsRUFBRSxlQUFlO0tBQy9CO0NBQ0YsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFHO0lBQ2hCLEtBQUssRUFBRTtRQUNMLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLEtBQUssRUFBRSxtQkFBbUI7S0FDM0I7SUFDRCxLQUFLLEVBQUU7UUFDTCxRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsV0FBVztRQUNyQixLQUFLLEVBQUUsbUJBQW1CO0tBQzNCO0NBQ0YsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDM0IsUUFBUTtJQUNSLFFBQVE7SUFDUixTQUFTO0lBQ1QsU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0NBQ1YsQ0FBQyxDQUFDIn0=