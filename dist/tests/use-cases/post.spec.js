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
//src/tests/use-cases/post.spec.ts
/* istanbul ignore file */
require("dotenv").config();
const chai_1 = require("chai");
const config_1 = __importDefault(require("../../app/config"));
const logger_1 = require("../../app/libs/logger");
const entities_1 = require("../../app/component/entities");
const data_access_1 = require("../../app/component/data-access");
const post_1 = __importDefault(require("../../app/component/use-cases/post"));
const mongodb_1 = require("../../app/libs/mongodb"); // Lägg till korrekt sökväg
// En mockad `get` funktion som efterliknar din verkliga `get` funktion
const mockGet = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    // Anta att det här är det svar du förväntar dig från din `get` funktion
    return {
        username: params.username,
        email: params.email,
        // andra egenskaper som skulle returneras av din faktiska `get` funktion
    };
});
// Skapa en post-funktion som använder den mockade `get` funktionen
const post = (0, post_1.default)({
    makeInputObj: entities_1.makeInputObj,
    insertDocument: data_access_1.insertDocument,
    findDocuments: data_access_1.findDocuments,
    get: mockGet, // Använd den mockade `get` funktionen här
    logger: // Använd den mockade `get` funktionen här
    logger_1.logger,
});
// Dina dbConfig och errorMsgs
const dbConfig = config_1.default.DB_CONFIG;
const errorMsgs = config_1.default.ERROR_MSG.post;
describe("Post Use Case", () => {
    // Rensa databasen efter att alla tester är klara
    after(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, mongodb_1.dropDb)(Object.assign({ test: true }, dbConfig));
    }));
    // Testfall för att infoga en användare
    it("should insert a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            username: "testuser",
            password: "password123",
            email: "test@example.com",
        };
        const results = yield post.post({ params, dbConfig, errorMsgs });
        (0, chai_1.expect)(results).to.have.property("username").equal(params.username);
        // andra förväntningar baserade på den mockade `get` funktionens respons
    }));
    // Fler testfall...
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3RzL3VzZS1jYXNlcy9wb3N0LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrQ0FBa0M7QUFDbEMsMEJBQTBCO0FBQzFCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMzQiwrQkFBOEI7QUFDOUIsOERBQXNDO0FBQ3RDLGtEQUErQztBQUMvQywyREFBNEQ7QUFDNUQsaUVBQWdGO0FBQ2hGLDhFQUE0RDtBQUM1RCxvREFBZ0QsQ0FBQywyQkFBMkI7QUFFNUUsdUVBQXVFO0FBQ3ZFLE1BQU0sT0FBTyxHQUFHLENBQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO0lBQ25DLHdFQUF3RTtJQUN4RSxPQUFPO1FBQ0wsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1FBQ3pCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztRQUNuQix3RUFBd0U7S0FDekUsQ0FBQztBQUNKLENBQUMsQ0FBQSxDQUFDO0FBRUYsbUVBQW1FO0FBQ25FLE1BQU0sSUFBSSxHQUFHLElBQUEsY0FBVSxFQUFDO0lBQ3RCLFlBQVksRUFBWix1QkFBWTtJQUNaLGNBQWMsRUFBZCw0QkFBYztJQUNkLGFBQWEsRUFBYiwyQkFBYTtJQUNiLEdBQUcsRUFBRSxPQUFPLEVBQUUsMENBQTBDO0lBQ3hELE1BQU0sRUFEUSwwQ0FBMEM7SUFDeEQsZUFBTTtDQUNQLENBQUMsQ0FBQztBQUVILDhCQUE4QjtBQUM5QixNQUFNLFFBQVEsR0FBRyxnQkFBTSxDQUFDLFNBQVMsQ0FBQztBQUNsQyxNQUFNLFNBQVMsR0FBRyxnQkFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFFeEMsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7SUFDN0IsaURBQWlEO0lBQ2pELEtBQUssQ0FBQyxHQUFTLEVBQUU7UUFDZixNQUFNLElBQUEsZ0JBQU0sa0JBQUcsSUFBSSxFQUFFLElBQUksSUFBSyxRQUFRLEVBQUcsQ0FBQztJQUM1QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsdUNBQXVDO0lBQ3ZDLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxHQUFTLEVBQUU7UUFDcEMsTUFBTSxNQUFNLEdBQUc7WUFDYixRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsYUFBYTtZQUN2QixLQUFLLEVBQUUsa0JBQWtCO1NBQzFCLENBQUM7UUFDRixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDakUsSUFBQSxhQUFNLEVBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSx3RUFBd0U7SUFDMUUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILG1CQUFtQjtBQUNyQixDQUFDLENBQUMsQ0FBQyJ9