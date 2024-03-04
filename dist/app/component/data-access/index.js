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
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertBlogPost = exports.updateDocument = exports.findDocuments = exports.insertDocument = void 0;
// src/app/component/data-access/index.ts
const mongodb_1 = require("../../libs/mongodb");
const mongodb_2 = require("mongodb");
const insertDocument = ({ document, dbConfig }) => __awaiter(void 0, void 0, void 0, function* () {
    const { acknowledged, insertedId } = yield (0, mongodb_1.insertOneDocument)(Object.assign({ document }, dbConfig));
    if (acknowledged) {
        // Om dokumentet sparades framgångsrikt, hämta det fullständiga användarobjektet
        const query = { _id: insertedId };
        const savedUser = yield (0, mongodb_1.findDocuments)(Object.assign({ query }, dbConfig));
        return savedUser[0]; // Antag att findDocuments returnerar en lista och vi vill ha första objektet
    }
    else {
        // Hantera situationen om användaren inte kunde sparas
        throw new Error("Användaren kunde inte skapas");
    }
});
exports.insertDocument = insertDocument;
const updateDocument = ({ query, values, dbConfig }) => (0, mongodb_1.updateDocument)(Object.assign({ query, values }, dbConfig));
exports.updateDocument = updateDocument;
const findDocuments = ({ query, dbConfig }) => (0, mongodb_1.findDocuments)(Object.assign({ query }, dbConfig));
exports.findDocuments = findDocuments;
const insertBlogPost = ({ post, dbConfig }) => __awaiter(void 0, void 0, void 0, function* () {
    const client = new mongodb_2.MongoClient(dbConfig.dbUri);
    try {
        yield client.connect();
        const db = client.db(dbConfig.dbName);
        const collection = db.collection("blogPosts"); // Namnge din collection, t.ex. 'blogPosts'
        const result = yield collection.insertOne(post);
        return result;
    }
    catch (error) {
        throw new Error(`Kunde inte infoga blogginlägg: ${error.message}`);
    }
    finally {
        yield client.close();
    }
});
exports.insertBlogPost = insertBlogPost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudC9kYXRhLWFjY2Vzcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBeUM7QUFDekMsZ0RBSTRCO0FBQzVCLHFDQUFzQztBQUUvQixNQUFNLGNBQWMsR0FBRyxDQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7SUFDN0QsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsR0FBRyxNQUFNLElBQUEsMkJBQWlCLGtCQUMxRCxRQUFRLElBQ0wsUUFBUSxFQUNYLENBQUM7SUFDSCxJQUFJLFlBQVksRUFBRTtRQUNoQixnRkFBZ0Y7UUFDaEYsTUFBTSxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDbEMsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFBLHVCQUFpQixrQkFBRyxLQUFLLElBQUssUUFBUSxFQUFHLENBQUM7UUFDbEUsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyw2RUFBNkU7S0FDbkc7U0FBTTtRQUNMLHNEQUFzRDtRQUN0RCxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7S0FDakQ7QUFDSCxDQUFDLENBQUEsQ0FBQztBQWRXLFFBQUEsY0FBYyxrQkFjekI7QUFFRixNQUFNLGNBQWMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQ3JELElBQUEsd0JBQWtCLGtCQUFHLEtBQUssRUFBRSxNQUFNLElBQUssUUFBUSxFQUFHLENBQUM7QUFLN0Isd0NBQWM7QUFIdEMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQzVDLElBQUEsdUJBQWlCLGtCQUFHLEtBQUssSUFBSyxRQUFRLEVBQUcsQ0FBQztBQUVuQyxzQ0FBYTtBQUVmLE1BQU0sY0FBYyxHQUFHLENBQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtJQUN6RCxNQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLElBQUk7UUFDRixNQUFNLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsMkNBQTJDO1FBRTFGLE1BQU0sTUFBTSxHQUFHLE1BQU0sVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxPQUFPLE1BQU0sQ0FBQztLQUNmO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUNwRTtZQUFTO1FBQ1IsTUFBTSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDdEI7QUFDSCxDQUFDLENBQUEsQ0FBQztBQWRXLFFBQUEsY0FBYyxrQkFjekIifQ==