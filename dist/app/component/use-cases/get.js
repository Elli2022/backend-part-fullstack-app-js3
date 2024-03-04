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
//src/app/component/use-cases/get.ts
function createGet({ makeInputObj, findDocuments, makeOutputObj, logger, }) {
    return Object.freeze({ get });
    function get({ params, dbConfig, errorMsgs }) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.info(`[USE-CASE][GET] Reading from db - START!`);
            Object.keys(params).forEach((key) => params[key] === undefined && delete params[key]);
            console.log(params);
            if (Object.values(params).length) {
                const userFactory = makeInputObj({ params });
                params = {
                    usernameHash: !params.username ? undefined : userFactory.usernameHash(),
                    emailHash: !params.email ? undefined : userFactory.emailHash(),
                    usernamePasswordHash: !params.usernamePasswordHash
                        ? undefined
                        : userFactory.usernamePasswordHash(),
                };
                Object.keys(params).forEach((key) => params[key] === undefined && delete params[key]);
            }
            console.log(params);
            // 'and' query
            const dbResults = yield findDocuments({ query: params, dbConfig });
            const results = dbResults.map((post) => {
                const resultsObj = makeOutputObj({ params: post });
                return {
                    username: resultsObj.username(),
                    email: resultsObj.email(),
                    created: resultsObj.created(),
                    modified: resultsObj.modified(),
                };
            });
            return results;
        });
    }
}
exports.default = createGet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnQvdXNlLWNhc2VzL2dldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG9DQUFvQztBQUNwQyxTQUF3QixTQUFTLENBQUMsRUFDaEMsWUFBWSxFQUNaLGFBQWEsRUFDYixhQUFhLEVBQ2IsTUFBTSxHQUNQO0lBQ0MsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUU5QixTQUFlLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFOztZQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7WUFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQ3pCLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxJQUFJLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUN6RCxDQUFDO1lBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2pDLE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBRTdDLE1BQU0sR0FBRztvQkFDUCxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUU7b0JBQ3ZFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtvQkFDOUQsb0JBQW9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsb0JBQW9CO3dCQUNoRCxDQUFDLENBQUMsU0FBUzt3QkFDWCxDQUFDLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFO2lCQUN2QyxDQUFDO2dCQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUN6QixDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsSUFBSSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDekQsQ0FBQztZQUNKLENBQUM7WUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLGNBQWM7WUFDZCxNQUFNLFNBQVMsR0FBRyxNQUFNLGFBQWEsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUVuRSxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3JDLE1BQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRCxPQUFPO29CQUNMLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFO29CQUMvQixLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRTtvQkFDekIsT0FBTyxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQzdCLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFO2lCQUNoQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO0tBQUE7QUFDSCxDQUFDO0FBL0NELDRCQStDQyJ9