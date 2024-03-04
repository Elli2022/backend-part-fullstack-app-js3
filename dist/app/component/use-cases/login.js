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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudC91c2UtY2FzZXMvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBdUM7QUFDdkMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNwQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUV0RCxTQUF3QixXQUFXLENBQUMsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFO0lBQzNELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFFaEMsU0FBZSxLQUFLLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTs7WUFDbkQsSUFBSTtnQkFDRixNQUFNLENBQUMsSUFBSSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7Z0JBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQ1Qsb0RBQW9ELFFBQVEsRUFBRSxDQUMvRCxDQUFDO2dCQUVGLG1DQUFtQztnQkFDbkMsTUFBTSxLQUFLLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQztnQkFDM0IsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV0QixzQ0FBc0M7Z0JBQ3RDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO29CQUM1RCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7aUJBQzlDO2dCQUVELG1DQUFtQztnQkFDbkMsTUFBTSxjQUFjLEdBQUcsTUFBTTtxQkFDMUIsVUFBVSxDQUFDLEtBQUssQ0FBQztxQkFDakIsTUFBTSxDQUFDLFFBQVEsQ0FBQztxQkFDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVqQiwyREFBMkQ7Z0JBQzNELElBQUksY0FBYyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQztvQkFDcEQsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2lCQUN4QztnQkFFRCxtQkFBbUI7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLGdCQUFnQixFQUFFO29CQUM3RCxTQUFTLEVBQUUsSUFBSTtpQkFDaEIsQ0FBQyxDQUFDO2dCQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsc0RBQXNELENBQUMsQ0FBQztnQkFFcEUsMkJBQTJCO2dCQUMzQixNQUFNLFVBQVUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRWxDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLDRCQUE0QixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDMUQsTUFBTSxLQUFLLENBQUM7YUFDYjtRQUNILENBQUM7S0FBQTtJQUVELFNBQWUsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLOztZQUN2QyxNQUFNLFFBQVEsR0FBRyxTQUFTLFFBQVEsRUFBRSxDQUFDO1lBQ3JDLElBQUk7Z0JBQ0YsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxRQUFRLG1CQUFtQixDQUFDLENBQUM7YUFDdkQ7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ2pFO1FBQ0gsQ0FBQztLQUFBO0FBQ0gsQ0FBQztBQTFERCw4QkEwREMifQ==