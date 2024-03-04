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
//src/app/initializers/express/index.ts
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const redisClient = require("../../libs/redisClient");
function createLogin({ findDocuments, logger }) {
    return Object.freeze({ login });
    function login({ username, password, dbConfig }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger.info("[LOGIN][USE-CASE] Login process - START!");
                logger.info(`[LOGIN][USE-CASE] Attempting login for username: ${username}`);
                // Hämtar användaren från databasen
                const query = { username };
                const users = yield findDocuments({ query, dbConfig });
                const user = users[0];
                // Kontrollerar om användaren hittades
                if (!user) {
                    logger.warn("[LOGIN][USE-CASE] User not found in database");
                    throw new Error("Användaren hittades inte.");
                }
                // Hashar det inskickade lösenordet
                const hashedPassword = crypto
                    .createHash("md5")
                    .update(password)
                    .digest("hex");
                // Jämför det hashade lösenordet med det lagrade lösenordet
                if (hashedPassword !== user.password) {
                    logger.warn("[LOGIN][USE-CASE] Incorrect password");
                    throw new Error("Felaktigt lösenord.");
                }
                // Skapar JWT-token
                const token = jwt.sign({ userId: user._id }, "din_jwt_secret", {
                    expiresIn: "1h",
                });
                logger.info("[LOGIN][USE-CASE] Login successful. Token generated.");
                // Cachar JWT-token i Redis
                yield cacheToken(username, token);
                return token;
            }
            catch (error) {
                logger.error(`[LOGIN][USE-CASE] Error: ${error.message}`);
                throw error;
            }
        });
    }
    function cacheToken(username, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const cacheKey = `token:${username}`;
            try {
                yield redisClient.setEx(cacheKey, 3600, token);
                logger.info(`Token for ${username} cached in Redis.`);
            }
            catch (error) {
                logger.error(`Redis error while setting token cache: ${error}`);
            }
        });
    }
}
exports.default = createLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudC91c2UtY2FzZXMvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBdUM7QUFDdkMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNwQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUV0RCxTQUF3QixXQUFXLENBQUMsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFO0lBQzNELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFFaEMsU0FBZSxLQUFLLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTs7WUFDbkQsSUFBSSxDQUFDO2dCQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsMENBQTBDLENBQUMsQ0FBQztnQkFDeEQsTUFBTSxDQUFDLElBQUksQ0FDVCxvREFBb0QsUUFBUSxFQUFFLENBQy9ELENBQUM7Z0JBRUYsbUNBQW1DO2dCQUNuQyxNQUFNLEtBQUssR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDO2dCQUMzQixNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXRCLHNDQUFzQztnQkFDdEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsOENBQThDLENBQUMsQ0FBQztvQkFDNUQsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUVELG1DQUFtQztnQkFDbkMsTUFBTSxjQUFjLEdBQUcsTUFBTTtxQkFDMUIsVUFBVSxDQUFDLEtBQUssQ0FBQztxQkFDakIsTUFBTSxDQUFDLFFBQVEsQ0FBQztxQkFDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVqQiwyREFBMkQ7Z0JBQzNELElBQUksY0FBYyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO29CQUNwRCxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRUQsbUJBQW1CO2dCQUNuQixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRTtvQkFDN0QsU0FBUyxFQUFFLElBQUk7aUJBQ2hCLENBQUMsQ0FBQztnQkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLHNEQUFzRCxDQUFDLENBQUM7Z0JBRXBFLDJCQUEyQjtnQkFDM0IsTUFBTSxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUVsQyxPQUFPLEtBQUssQ0FBQztZQUNmLENBQUM7WUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO2dCQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUMxRCxNQUFNLEtBQUssQ0FBQztZQUNkLENBQUM7UUFDSCxDQUFDO0tBQUE7SUFFRCxTQUFlLFVBQVUsQ0FBQyxRQUFRLEVBQUUsS0FBSzs7WUFDdkMsTUFBTSxRQUFRLEdBQUcsU0FBUyxRQUFRLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUM7Z0JBQ0gsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxRQUFRLG1CQUFtQixDQUFDLENBQUM7WUFDeEQsQ0FBQztZQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNsRSxDQUFDO1FBQ0gsQ0FBQztLQUFBO0FBQ0gsQ0FBQztBQTFERCw4QkEwREMifQ==