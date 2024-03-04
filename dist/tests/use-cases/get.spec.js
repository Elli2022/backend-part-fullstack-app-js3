// /* istanbul ignore file */
// require('dotenv').config();
// const expect = require('chai').expect
// import createGet from '../../app/component/use-cases/get';
// import * as path from 'path';
// import config from '../config';
// import { logger } from '../../app/libs/logger';
// import {
//   access,
//   readFile,
//   mkdir,
//   writeFile,
//   rm
// } from 'node:fs/promises';
// const get = (params) =>
//   createGet({
//     access,
//     readFile,
//     logger
//   }).get({
//     params,
//     filePath: config.FILE_DB_PATH,
//     filename: config.FILE_DB_NAME
//   })
// describe('get', () => {
//   before(async () => {
//     const usersObj = config.TEST_DATA
//     const users = [usersObj.user1, usersObj.user2]
//     await mkdir(config.FILE_FOLDER_PATH)
//     await writeFile(config.FILE_DB_PATH, JSON.stringify(users))
//   })
//   after(async () => rm(config.FILE_FOLDER_PATH, { recursive: true }))
//   it('should return a list of users', async () => {
//     const results = await get({ params: undefined })
//     expect(results.length).to.equal(2)
//   })
// })
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdHMvdXNlLWNhc2VzL2dldC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFFOUIsd0NBQXdDO0FBQ3hDLDZEQUE2RDtBQUM3RCxnQ0FBZ0M7QUFDaEMsa0NBQWtDO0FBQ2xDLGtEQUFrRDtBQUVsRCxXQUFXO0FBQ1gsWUFBWTtBQUNaLGNBQWM7QUFDZCxXQUFXO0FBQ1gsZUFBZTtBQUNmLE9BQU87QUFDUCw2QkFBNkI7QUFFN0IsMEJBQTBCO0FBQzFCLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixhQUFhO0FBQ2IsY0FBYztBQUNkLHFDQUFxQztBQUNyQyxvQ0FBb0M7QUFDcEMsT0FBTztBQUVQLDBCQUEwQjtBQUMxQix5QkFBeUI7QUFDekIsd0NBQXdDO0FBQ3hDLHFEQUFxRDtBQUNyRCwyQ0FBMkM7QUFDM0Msa0VBQWtFO0FBQ2xFLE9BQU87QUFFUCx3RUFBd0U7QUFFeEUsc0RBQXNEO0FBQ3RELHVEQUF1RDtBQUN2RCx5Q0FBeUM7QUFDekMsT0FBTztBQUNQLEtBQUsifQ==