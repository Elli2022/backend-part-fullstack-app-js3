"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//src/tests/entities/make-input-obj.spec.ts
require("dotenv").config();
const expect = require("chai").expect;
const crypto = __importStar(require("crypto"));
const sanitize = __importStar(require("sanitize-html"));
const config_1 = __importDefault(require("../config"));
const make_input_object_1 = __importDefault(require("../../app/component/entities/make-input-object"));
const errorMsgs = config_1.default.ERROR_MSG.post;
const md5 = (text) => crypto.createHash("md5").update(text, "utf8").digest("hex");
const makeInputObj = ({ params }) => (0, make_input_object_1.default)({ md5, sanitize }).inputObj({ params, errorMsgs });
describe("make-input-object", () => {
    it("should validate input", () => {
        const params = {
            username: config_1.default.TEST_DATA.user1.username,
            password: config_1.default.TEST_DATA.user1.password,
        };
        const makeInput = makeInputObj({ params });
        const user = {
            username: makeInput.username(),
            password: makeInput.password(),
            created: makeInput.created(),
            modified: makeInput.modified(),
        };
        expect(user.username).to.equal(config_1.default.TEST_DATA.user1.username);
    });
    it("should not validate an empty object", () => {
        try {
            const params = {};
            makeInputObj({ params });
        }
        catch (e) {
            expect(e.message).to.equal(errorMsgs.MISSING_PARAMETER + "username");
        }
    });
    it("should not validate an empty object", () => {
        try {
            const params = {
                username: config_1.default.TEST_DATA.user1.username,
            };
            makeInputObj({ params });
        }
        catch (e) {
            expect(e.message).to.equal(errorMsgs.MISSING_PARAMETER + "password");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFrZS1pbnB1dC1vYmouc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0cy9lbnRpdGllcy9tYWtlLWlucHV0LW9iai5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMkM7QUFDM0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTNCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDdEMsK0NBQWlDO0FBQ2pDLHdEQUEwQztBQUMxQyx1REFBK0I7QUFFL0IsdUdBQWlGO0FBRWpGLE1BQU0sU0FBUyxHQUFHLGdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztBQUN4QyxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQ25CLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFOUQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FDbEMsSUFBQSwyQkFBbUIsRUFBQyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBRXpFLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFDakMsRUFBRSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRTtRQUMvQixNQUFNLE1BQU0sR0FBRztZQUNiLFFBQVEsRUFBRSxnQkFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUN6QyxRQUFRLEVBQUUsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVE7U0FDMUMsQ0FBQztRQUNGLE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFM0MsTUFBTSxJQUFJLEdBQUc7WUFDWCxRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUM5QixRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUM5QixPQUFPLEVBQUUsU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUM1QixRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRTtTQUMvQixDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFHLEVBQUU7UUFDN0MsSUFBSSxDQUFDO1lBQ0gsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLFlBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFHLEVBQUU7UUFDN0MsSUFBSSxDQUFDO1lBQ0gsTUFBTSxNQUFNLEdBQUc7Z0JBQ2IsUUFBUSxFQUFFLGdCQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRO2FBQzFDLENBQUM7WUFDRixZQUFZLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUN2RSxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9