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
//src/app/libs/mongodb/mongodb.ts
function makeDB({ dbClient }) {
    return Object.freeze({
        insertOneDocument,
        findDocuments,
        updateDocument,
        dropDb,
    });
    function insertOneDocument({ document, dbName, dbUri, dbColl }) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = new dbClient({ dbName, dbUri, dbColl });
            const results = yield db.insertDocument({ document });
            return results;
        });
    }
    function updateDocument({ query, values, dbName, dbUri, dbColl }) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = new dbClient({ dbName, dbUri, dbColl });
            const results = yield db.updateDocument({ query, values });
            return results;
        });
    }
    function findDocuments({ query, dbName, dbUri, dbColl }) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = new dbClient({ dbName, dbUri, dbColl });
            const results = yield db.findDocumentsByQuery({ query });
            return results;
        });
    }
    function dropDb({ test, dbName, dbUri, dbColl }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!test)
                return;
            const db = new dbClient({ dbName, dbUri, dbColl });
            const results = db.dropDB();
            return results;
        });
    }
}
exports.default = makeDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29kYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvbGlicy9tb25nb2RiL21vbmdvZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMsU0FBd0IsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFO0lBQ3pDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNuQixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGNBQWM7UUFDZCxNQUFNO0tBQ1AsQ0FBQyxDQUFDO0lBRUgsU0FBZSxpQkFBaUIsQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTs7WUFDbEUsTUFBTSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDbkQsTUFBTSxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUV0RCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFRCxTQUFlLGNBQWMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7O1lBQ3BFLE1BQU0sRUFBRSxHQUFHLElBQUksUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRTNELE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVELFNBQWUsYUFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFOztZQUMzRCxNQUFNLEVBQUUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUNuRCxNQUFNLE9BQU8sR0FBRyxNQUFNLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFFekQsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRUQsU0FBZSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7O1lBQ25ELElBQUksQ0FBQyxJQUFJO2dCQUFFLE9BQU87WUFDbEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDbkQsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRTVCLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7S0FBQTtBQUNILENBQUM7QUFwQ0QseUJBb0NDIn0=