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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudC9jb250cm9sbGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2Qyw4Q0FBMkM7QUFDM0MsNENBQW1EO0FBQ25ELDBEQUFrQztBQUNsQyxNQUFNLE9BQU8sR0FBRyxjQUFjLENBQUM7QUFFL0IsTUFBTSxVQUFVLEdBQUcsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDcEMsSUFBSTtRQUNGLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBQSxlQUFHLEVBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbEQsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDckM7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLGVBQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDaEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDckM7QUFDSCxDQUFDLENBQUEsQ0FBQztBQUVGLE1BQU0sY0FBYyxHQUFHLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3hDLElBQUk7UUFDRixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUEsZ0JBQUksRUFBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxxQ0FBcUM7S0FDdkY7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLGVBQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyw0REFBNEQ7UUFDbEgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUM1RDtBQUNILENBQUMsQ0FBQSxDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUcsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDcEMsSUFBSTtRQUNGLGdEQUFnRDtRQUNoRCxNQUFNLE9BQU8sR0FBRyxNQUFNLG9CQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3RDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSTtZQUNoQixRQUFRLEVBQUUsZ0JBQU0sQ0FBQyxTQUFTO1NBQzNCLENBQUMsQ0FBQztRQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUNqRDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osZUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUM3RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ3JEO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBRztJQUNiO1FBQ0UsSUFBSSxFQUFFLEdBQUcsT0FBTyxvQ0FBb0M7UUFDcEQsTUFBTSxFQUFFLEtBQUs7UUFDYixTQUFTLEVBQUUsVUFBVTtLQUN0QjtJQUNELEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBTyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFO0lBQ2xFLEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBTyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFO0NBQ25FLENBQUM7QUFFTyx3QkFBTSJ9