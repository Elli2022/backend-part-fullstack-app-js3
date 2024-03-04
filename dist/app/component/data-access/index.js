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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudC9kYXRhLWFjY2Vzcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBeUM7QUFDekMsZ0RBSTRCO0FBQzVCLHFDQUFzQztBQUUvQixNQUFNLGNBQWMsR0FBRyxDQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7SUFDN0QsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsR0FBRyxNQUFNLElBQUEsMkJBQWlCLGtCQUMxRCxRQUFRLElBQ0wsUUFBUSxFQUNYLENBQUM7SUFDSCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pCLGdGQUFnRjtRQUNoRixNQUFNLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQztRQUNsQyxNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUEsdUJBQWlCLGtCQUFHLEtBQUssSUFBSyxRQUFRLEVBQUcsQ0FBQztRQUNsRSxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDZFQUE2RTtJQUNwRyxDQUFDO1NBQU0sQ0FBQztRQUNOLHNEQUFzRDtRQUN0RCxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDbEQsQ0FBQztBQUNILENBQUMsQ0FBQSxDQUFDO0FBZFcsUUFBQSxjQUFjLGtCQWN6QjtBQUVGLE1BQU0sY0FBYyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FDckQsSUFBQSx3QkFBa0Isa0JBQUcsS0FBSyxFQUFFLE1BQU0sSUFBSyxRQUFRLEVBQUcsQ0FBQztBQUs3Qix3Q0FBYztBQUh0QyxNQUFNLGFBQWEsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FDNUMsSUFBQSx1QkFBaUIsa0JBQUcsS0FBSyxJQUFLLFFBQVEsRUFBRyxDQUFDO0FBRW5DLHNDQUFhO0FBRWYsTUFBTSxjQUFjLEdBQUcsQ0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO0lBQ3pELE1BQU0sTUFBTSxHQUFHLElBQUkscUJBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsSUFBSSxDQUFDO1FBQ0gsTUFBTSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkIsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLDJDQUEyQztRQUUxRixNQUFNLE1BQU0sR0FBRyxNQUFNLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDZixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO1lBQVMsQ0FBQztRQUNULE1BQU0sTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7QUFDSCxDQUFDLENBQUEsQ0FBQztBQWRXLFFBQUEsY0FBYyxrQkFjekIifQ==