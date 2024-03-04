"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//src/app/component/entities/make-input-object.ts
function makeInputObjectFactory({ md5, sanitize }) {
    return Object.freeze({ inputObj });
    let localErrorMsgs = {};
    function inputObj({ params, errorMsgs }) {
        const { username, password, email, role, created = Date.now(), modified = Date.now(), } = params;
        return Object.freeze({
            username: () => checkUsername({ username, errorMsgs }),
            password: () => checkPassword({ password, errorMsgs }),
            email: () => checkEmail({ email, errorMsgs }),
            role: () => checkRole({ role }),
            usernameHash: () => hash({ param: username }),
            emailHash: () => hash({ param: email }),
            usernamePasswordHash: () => hash({ param: username + password }),
            created: () => created,
            modified: () => modified,
        });
    }
    function checkRole({ role }) {
        return role in ["user", "admin"] ? role : "user";
    }
    function checkUsername({ username, errorMsgs }) {
        checkRequiredParam({
            param: username,
            paramName: "username",
            errorMsgs,
        });
        username = sanitize(username);
        return username;
    }
    function checkPassword({ password, errorMsgs }) {
        checkRequiredParam({
            param: password,
            paramName: "password",
            errorMsgs,
        });
        password = md5(password);
        return password;
    }
    function checkEmail({ email, errorMsgs }) {
        checkRequiredParam({
            param: email,
            paramName: "email",
            errorMsgs,
        });
        email = sanitize(email);
        if (!isEmail({ email }))
            throw new Error(errorMsgs.INVALID_EMAIL);
        return email;
    }
    function hash({ param }) {
        sanitize(param);
        return md5(param);
    }
    function isEmail({ email }) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function checkRequiredParam({ param, paramName, errorMsgs }) {
        if (!param || param === "")
            throw new Error(`${errorMsgs.MISSING_PARAMETER}${paramName}`);
        return;
    }
}
exports.default = makeInputObjectFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFrZS1pbnB1dC1vYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudC9lbnRpdGllcy9tYWtlLWlucHV0LW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUNqRCxTQUF3QixzQkFBc0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUU7SUFDOUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNuQyxJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDeEIsU0FBUyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFO1FBQ3JDLE1BQU0sRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLEtBQUssRUFDTCxJQUFJLEVBQ0osT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFDcEIsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FDdEIsR0FBRyxNQUFNLENBQUM7UUFFWCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDbkIsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQztZQUN0RCxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO1lBQ3RELEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7WUFDN0MsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1lBQy9CLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUM7WUFDN0MsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUN2QyxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxHQUFHLFFBQVEsRUFBRSxDQUFDO1lBQ2hFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPO1lBQ3RCLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRTtRQUN6QixPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbkQsQ0FBQztJQUVELFNBQVMsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtRQUM1QyxrQkFBa0IsQ0FBQztZQUNqQixLQUFLLEVBQUUsUUFBUTtZQUNmLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLFNBQVM7U0FDVixDQUFDLENBQUM7UUFDSCxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTLGFBQWEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUU7UUFDNUMsa0JBQWtCLENBQUM7WUFDakIsS0FBSyxFQUFFLFFBQVE7WUFDZixTQUFTLEVBQUUsVUFBVTtZQUNyQixTQUFTO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsU0FBUyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1FBQ3RDLGtCQUFrQixDQUFDO1lBQ2pCLEtBQUssRUFBRSxLQUFLO1lBQ1osU0FBUyxFQUFFLE9BQU87WUFDbEIsU0FBUztTQUNWLENBQUMsQ0FBQztRQUNILEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEUsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsU0FBUyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUU7UUFDckIsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxTQUFTLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRTtRQUN4QixNQUFNLEVBQUUsR0FDTix5SkFBeUosQ0FBQztRQUM1SixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFNBQVMsa0JBQWtCLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRTtRQUN6RCxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxFQUFFO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNoRSxPQUFPO0lBQ1QsQ0FBQztBQUNILENBQUM7QUE5RUQseUNBOEVDIn0=