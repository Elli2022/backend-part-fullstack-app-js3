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
// src/app/initializers/mongoDb/index.ts
const mongodb_1 = require("mongodb");
const config_1 = __importDefault(require("../../config")); // Importera konfigurationen
const logger_1 = require("../../libs/logger");
class mongoDBClient {
    constructor() {
        this.dbName = config_1.default.DB_CONFIG.dbName;
        this.dbUri = config_1.default.DB_CONFIG.dbUri;
        this.dbColl = config_1.default.DB_CONFIG.dbColl;
        this.connection = null;
        this.db = null;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            // Anslut utan de borttagna alternativen
            this.connection = yield mongodb_1.MongoClient.connect(this.dbUri);
            this.db = this.connection.db(this.dbName);
            logger_1.logger.info("[MONGODB] Connection successful.");
        });
    }
    findDocumentsByQuery({ query }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const results = yield this.db.collection(this.dbColl).find(query).toArray();
            yield this.close();
            return results;
        });
    }
    insertDocument({ document }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const results = yield this.db.collection(this.dbColl).insertOne(document);
            yield this.close();
            return results;
        });
    }
    updateDocument({ query, values }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const results = yield this.db
                .collection(this.dbColl)
                .updateOne(query, { $set: values });
            yield this.close();
            return results;
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.connection) {
                yield this.connection.close();
                logger_1.logger.info("[MONGODB] Connection closed.");
            }
        });
    }
    dropDB() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.db) {
                yield this.db.dropDatabase();
                logger_1.logger.info(`[MONGODB] Dropped DB ${this.dbName}`);
            }
        });
    }
}
exports.default = new mongoDBClient(); // Exportera en instans av klienten
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2luaXRpYWxpemVycy9tb25nb0RiL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXdDO0FBQ3hDLHFDQUFzQztBQUN0QywwREFBa0MsQ0FBQyw0QkFBNEI7QUFDL0QsOENBQTJDO0FBRTNDLE1BQU0sYUFBYTtJQU9qQjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLENBQUM7SUFFSyxPQUFPOztZQUNYLHdDQUF3QztZQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0scUJBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLGVBQU0sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7SUFFSyxvQkFBb0IsQ0FBQyxFQUFFLEtBQUssRUFBcUI7O1lBQ3JELE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1RSxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuQixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsRUFBRSxRQUFRLEVBQXdCOztZQUNyRCxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUUsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbkIsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBcUM7O1lBQ3ZFLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLEVBQUU7aUJBQzFCLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2lCQUN2QixTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDdEMsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbkIsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRUssS0FBSzs7WUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDOUIsZUFBTSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2FBQzdDO1FBQ0gsQ0FBQztLQUFBO0lBRUssTUFBTTs7WUFDVixJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUM3QixlQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzthQUNwRDtRQUNILENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDLG1DQUFtQyJ9