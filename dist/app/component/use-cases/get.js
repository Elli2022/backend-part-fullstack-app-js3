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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnQvdXNlLWNhc2VzL2dldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG9DQUFvQztBQUNwQyxTQUF3QixTQUFTLENBQUMsRUFDaEMsWUFBWSxFQUNaLGFBQWEsRUFDYixhQUFhLEVBQ2IsTUFBTSxHQUNQO0lBQ0MsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUU5QixTQUFlLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFOztZQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7WUFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQ3pCLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxJQUFJLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUN6RCxDQUFDO1lBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNoQyxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUU3QyxNQUFNLEdBQUc7b0JBQ1AsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFO29CQUN2RSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7b0JBQzlELG9CQUFvQixFQUFFLENBQUMsTUFBTSxDQUFDLG9CQUFvQjt3QkFDaEQsQ0FBQyxDQUFDLFNBQVM7d0JBQ1gsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRTtpQkFDdkMsQ0FBQztnQkFFRixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FDekIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQ3pELENBQUM7YUFDSDtZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsY0FBYztZQUNkLE1BQU0sU0FBUyxHQUFHLE1BQU0sYUFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBRW5FLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDckMsTUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ25ELE9BQU87b0JBQ0wsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUU7b0JBQy9CLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFO29CQUN6QixPQUFPLEVBQUUsVUFBVSxDQUFDLE9BQU8sRUFBRTtvQkFDN0IsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUU7aUJBQ2hDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7S0FBQTtBQUNILENBQUM7QUEvQ0QsNEJBK0NDIn0=