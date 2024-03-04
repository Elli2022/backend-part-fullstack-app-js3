"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//src/app/component/entities/make-output-object.ts
function makeOutputObj() {
    function outputObj({ username, email, created, modified }) {
        // Anta att `created` och `modified` redan är i önskat format eller konvertera som nödvändigt här
        return Object.freeze({
            username,
            email,
            created: new Date(created),
            modified: new Date(modified),
        });
    }
    return Object.freeze({ outputObj });
}
exports.default = makeOutputObj;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFrZS1vdXRwdXQtb2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnQvZW50aXRpZXMvbWFrZS1vdXRwdXQtb2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQWtEO0FBQ2xELFNBQXdCLGFBQWE7SUFDbkMsU0FBUyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUU7UUFDdkQsaUdBQWlHO1FBQ2pHLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNuQixRQUFRO1lBQ1IsS0FBSztZQUNMLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDMUIsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBWkQsZ0NBWUMifQ==