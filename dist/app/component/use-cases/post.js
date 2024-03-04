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
// src/app/component/use-cases/post.ts
const redisClient = require("../../libs/redisClient");
function createPost({ makeInputObj, findDocuments, insertDocument, get, logger, }) {
    return Object.freeze({ post });
    function post({ params, dbConfig, errorMsgs }) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.info("[POST][USE-CASE] Inserting object process - START!");
            const userFactory = makeInputObj({ params });
            const user = {
                username: userFactory.username(),
                password: userFactory.password(),
                email: userFactory.email(),
                role: userFactory.role(),
                usernameHash: userFactory.usernameHash(),
                emailHash: userFactory.emailHash(),
                usernamePasswordHash: userFactory.usernamePasswordHash(),
                created: userFactory.created(),
                modified: userFactory.modified(),
            };
            // Check for duplicates
            const query = { $or: [{ username: user.username }, { email: user.email }] };
            const checkDuplicate = yield findDocuments({ query, dbConfig });
            if (checkDuplicate.length) {
                throw new Error(errorMsgs.EXISTING_USER);
            }
            // Insert the user document
            const savedUser = yield insertDocument({ document: user, dbConfig });
            logger.info(`Användare ${savedUser.username} skapades`);
            // Cache the user in Redis
            yield cacheUser(savedUser);
            // Assuming 'get' retrieves the user, adjust as necessary
            const inserted = yield get({ params: { username: user.username } });
            return inserted;
        });
    }
    function cacheUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const cacheKey = `user:${user.username}`;
            try {
                yield redisClient.setEx(cacheKey, 3600, JSON.stringify(user));
                logger.info(`User ${user.username} cached in Redis.`);
            }
            catch (error) {
                logger.error(`Redis error while setting cache: ${error}`);
            }
        });
    }
}
exports.default = createPost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50L3VzZS1jYXNlcy9wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBQ3RDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBRXRELFNBQXdCLFVBQVUsQ0FBQyxFQUNqQyxZQUFZLEVBQ1osYUFBYSxFQUNiLGNBQWMsRUFDZCxHQUFHLEVBQ0gsTUFBTSxHQUNQO0lBQ0MsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUUvQixTQUFlLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFOztZQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLG9EQUFvRCxDQUFDLENBQUM7WUFDbEUsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUU3QyxNQUFNLElBQUksR0FBRztnQkFDWCxRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRTtnQkFDaEMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hDLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFO2dCQUMxQixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRTtnQkFDeEIsWUFBWSxFQUFFLFdBQVcsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3hDLFNBQVMsRUFBRSxXQUFXLENBQUMsU0FBUyxFQUFFO2dCQUNsQyxvQkFBb0IsRUFBRSxXQUFXLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ3hELE9BQU8sRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFO2dCQUM5QixRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRTthQUNqQyxDQUFDO1lBRUYsdUJBQXVCO1lBQ3ZCLE1BQU0sS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDNUUsTUFBTSxjQUFjLEdBQUcsTUFBTSxhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNoRSxJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUVELDJCQUEyQjtZQUMzQixNQUFNLFNBQVMsR0FBRyxNQUFNLGNBQWMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNyRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsU0FBUyxDQUFDLFFBQVEsV0FBVyxDQUFDLENBQUM7WUFFeEQsMEJBQTBCO1lBQzFCLE1BQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRTNCLHlEQUF5RDtZQUN6RCxNQUFNLFFBQVEsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BFLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUVELFNBQWUsU0FBUyxDQUFDLElBQUk7O1lBQzNCLE1BQU0sUUFBUSxHQUFHLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQztnQkFDSCxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3hELENBQUM7WUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO2dCQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0NBQW9DLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDNUQsQ0FBQztRQUNILENBQUM7S0FBQTtBQUNILENBQUM7QUFyREQsNkJBcURDIn0=