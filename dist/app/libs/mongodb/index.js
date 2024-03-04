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
exports.dropDb = exports.updateDocument = exports.findDocuments = exports.insertOneDocument = void 0;
// src/app/libs/mongodb/index.ts
const mongoDb_1 = __importDefault(require("../../initializers/mongoDb"));
const insertOneDocument = ({ document }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoDb_1.default.connect();
        const result = yield mongoDb_1.default.insertDocument({ document });
        return result;
    }
    finally {
        yield mongoDb_1.default.close();
    }
});
exports.insertOneDocument = insertOneDocument;
const findDocuments = ({ query }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoDb_1.default.connect();
        const results = yield mongoDb_1.default.findDocumentsByQuery({ query });
        return results;
    }
    finally {
        yield mongoDb_1.default.close();
    }
});
exports.findDocuments = findDocuments;
const updateDocument = ({ query, values }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoDb_1.default.connect();
        const result = yield mongoDb_1.default.updateDocument({
            query,
            values: { $set: values },
        });
        return result;
    }
    finally {
        yield mongoDb_1.default.close();
    }
});
exports.updateDocument = updateDocument;
const dropDb = (dbConfig) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoDb_1.default.connect();
        yield mongoDb_1.default.dropDB();
    }
    finally {
        yield mongoDb_1.default.close();
    }
});
exports.dropDb = dropDb;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2xpYnMvbW9uZ29kYi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQ0FBZ0M7QUFDaEMseUVBQXVEO0FBRWhELE1BQU0saUJBQWlCLEdBQUcsQ0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7SUFDdEQsSUFBSSxDQUFDO1FBQ0gsTUFBTSxpQkFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLE1BQU0sTUFBTSxHQUFHLE1BQU0saUJBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7WUFBUyxDQUFDO1FBQ1QsTUFBTSxpQkFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7QUFDSCxDQUFDLENBQUEsQ0FBQztBQVJXLFFBQUEsaUJBQWlCLHFCQVE1QjtBQUVLLE1BQU0sYUFBYSxHQUFHLENBQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO0lBQy9DLElBQUksQ0FBQztRQUNILE1BQU0saUJBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QixNQUFNLE9BQU8sR0FBRyxNQUFNLGlCQUFhLENBQUMsb0JBQW9CLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7WUFBUyxDQUFDO1FBQ1QsTUFBTSxpQkFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7QUFDSCxDQUFDLENBQUEsQ0FBQztBQVJXLFFBQUEsYUFBYSxpQkFReEI7QUFFSyxNQUFNLGNBQWMsR0FBRyxDQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7SUFDeEQsSUFBSSxDQUFDO1FBQ0gsTUFBTSxpQkFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLE1BQU0sTUFBTSxHQUFHLE1BQU0saUJBQWEsQ0FBQyxjQUFjLENBQUM7WUFDaEQsS0FBSztZQUNMLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7U0FDekIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztZQUFTLENBQUM7UUFDVCxNQUFNLGlCQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsQ0FBQztBQUNILENBQUMsQ0FBQSxDQUFDO0FBWFcsUUFBQSxjQUFjLGtCQVd6QjtBQUVLLE1BQU0sTUFBTSxHQUFHLENBQU8sUUFBUSxFQUFFLEVBQUU7SUFDdkMsSUFBSSxDQUFDO1FBQ0gsTUFBTSxpQkFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLE1BQU0saUJBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMvQixDQUFDO1lBQVMsQ0FBQztRQUNULE1BQU0saUJBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5QixDQUFDO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFQVyxRQUFBLE1BQU0sVUFPakIifQ==