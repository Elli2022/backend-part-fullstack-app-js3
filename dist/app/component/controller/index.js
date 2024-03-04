"use strict";
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
exports.routes = void 0;
//src/app/component/controller/index.ts
const logger_1 = require("../../libs/logger");
const use_cases_1 = require("../use-cases");
const config_1 = __importDefault(require("../../config"));
const baseUrl = "/api/v1/user";
const getUsersEP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield (0, use_cases_1.get)({ params: req.params });
        res.json({ err: 0, data: results });
    }
    catch (err) {
        logger_1.logger.error(`[EP][GET] ${req.method}: ${err}`);
        res.status(403);
        res.json({ err: 1, data: { err } });
    }
});
const registerUserEP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield (0, use_cases_1.post)({ params: req.body });
        res.status(201).json({ err: 0, data: results }); // 201 Created för en lyckad skapelse
    }
    catch (err) {
        logger_1.logger.error(`[EP][POST] ${req.method}: ${err.message}`);
        const statusCode = err.isValidationError ? 400 : 500; // Exempel på att sätta rätt statuskod baserat på felets typ
        res.status(statusCode).json({ err: 1, data: err.message });
    }
});
const postBlogEP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Logik för att hantera postning av blogginlägg
        const results = yield use_cases_1.postBlog.postBlog({
            params: req.body,
            dbConfig: config_1.default.DB_CONFIG,
        });
        res.status(201).json({ err: 0, data: results });
    }
    catch (err) {
        logger_1.logger.error(`[EP][POSTBLOG] ${req.method}: ${err.message}`);
        res.status(500).json({ err: 1, data: err.message });
    }
});
const routes = [
    {
        path: `${baseUrl}/username/:username?/email/:email?`,
        method: "get",
        component: getUsersEP,
    },
    { path: `${baseUrl}/`, method: "post", component: registerUserEP },
    { path: `${baseUrl}/blog`, method: "post", component: postBlogEP },
];
exports.routes = routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudC9jb250cm9sbGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2Qyw4Q0FBMkM7QUFDM0MsNENBQW1EO0FBQ25ELDBEQUFrQztBQUNsQyxNQUFNLE9BQU8sR0FBRyxjQUFjLENBQUM7QUFFL0IsTUFBTSxVQUFVLEdBQUcsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDcEMsSUFBSSxDQUFDO1FBQ0gsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFBLGVBQUcsRUFBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGVBQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDaEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztBQUNILENBQUMsQ0FBQSxDQUFDO0FBRUYsTUFBTSxjQUFjLEdBQUcsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDeEMsSUFBSSxDQUFDO1FBQ0gsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFBLGdCQUFJLEVBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDakQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMscUNBQXFDO0lBQ3hGLENBQUM7SUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsZUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDekQsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLDREQUE0RDtRQUNsSCxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7QUFDSCxDQUFDLENBQUEsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3BDLElBQUksQ0FBQztRQUNILGdEQUFnRDtRQUNoRCxNQUFNLE9BQU8sR0FBRyxNQUFNLG9CQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3RDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSTtZQUNoQixRQUFRLEVBQUUsZ0JBQU0sQ0FBQyxTQUFTO1NBQzNCLENBQUMsQ0FBQztRQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGVBQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDN0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBRztJQUNiO1FBQ0UsSUFBSSxFQUFFLEdBQUcsT0FBTyxvQ0FBb0M7UUFDcEQsTUFBTSxFQUFFLEtBQUs7UUFDYixTQUFTLEVBQUUsVUFBVTtLQUN0QjtJQUNELEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBTyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFO0lBQ2xFLEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBTyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFO0NBQ25FLENBQUM7QUFFTyx3QkFBTSJ9