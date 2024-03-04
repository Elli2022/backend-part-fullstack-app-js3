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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeOutputObj = exports.makeInputObj = void 0;
//src/app/component/entities/index.ts
const crypto = __importStar(require("crypto"));
const sanitize = __importStar(require("sanitize-html"));
const config_1 = __importDefault(require("../../config"));
const make_input_object_1 = __importDefault(require("./make-input-object"));
const make_output_object_1 = __importDefault(require("./make-output-object"));
const errorMsgs = config_1.default.ERROR_MSG.post;
const md5 = (text) => crypto.createHash("md5").update(text, "utf8").digest("hex");
const makeInputObj = ({ params }) => (0, make_input_object_1.default)({ md5, sanitize }).inputObj({ params, errorMsgs });
exports.makeInputObj = makeInputObj;
const makeOutputObj = ({ params }) => (0, make_output_object_1.default)().outputObj(Object.assign({}, params));
exports.makeOutputObj = makeOutputObj;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudC9lbnRpdGllcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFxQztBQUNyQywrQ0FBaUM7QUFDakMsd0RBQTBDO0FBQzFDLDBEQUFrQztBQUNsQyw0RUFBc0Q7QUFDdEQsOEVBQXdEO0FBRXhELE1BQU0sU0FBUyxHQUFHLGdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztBQUV4QyxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQ25CLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFOUQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FDbEMsSUFBQSwyQkFBbUIsRUFBQyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBS2hFLG9DQUFZO0FBSHJCLE1BQU0sYUFBYSxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQ25DLElBQUEsNEJBQW9CLEdBQUUsQ0FBQyxTQUFTLG1CQUFNLE1BQU0sRUFBRyxDQUFDO0FBRTNCLHNDQUFhIn0=