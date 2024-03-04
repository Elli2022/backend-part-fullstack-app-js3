"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//src/app/libs/logger/libs/transports.ts
function createLogger({ format, transports }) {
    const filePath = process.env.NODE_LOG_PATH;
    const { combine, printf, colorize, json } = format;
    const logFormat = printf(({ level, message, timestamp, stack }) => {
        return `${timestamp} ${level}: ${stack || message}`;
    });
    const transportDevArray = [
        new transports.Console({
            level: "http",
            format: combine(colorize(), logFormat),
        }),
        new transports.Console({
            level: "error",
            format: combine(colorize(), logFormat),
        }),
        new transports.File({
            filename: filePath + "/error.log",
            handleExceptions: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            level: "error",
            format: combine(json()),
        }),
        new transports.File({
            filename: filePath + "/all.log",
            handleExceptions: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            level: "http",
            format: combine(json()),
        }),
    ];
    const transportProdArray = [
        new transports.Console({
            level: "info",
            format: combine(colorize(), logFormat),
        }),
        new transports.File({
            filename: filePath + "/error.log",
            handleExceptions: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            level: "error",
            format: combine(json()),
        }),
        new transports.File({
            filename: filePath + "/all.log",
            handleExceptions: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            level: "http",
            format: combine(json()),
        }),
    ];
    return Object.freeze({ logger });
    function logger() {
        return process.env.NODE_ENV === "development"
            ? transportDevArray
            : transportProdArray;
    }
}
exports.default = createLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNwb3J0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvbGlicy9sb2dnZXIvbGlicy90cmFuc3BvcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXdDO0FBQ3hDLFNBQXdCLFlBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7SUFDekQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDM0MsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUVuRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDaEUsT0FBTyxHQUFHLFNBQVMsSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ3RELENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxpQkFBaUIsR0FBRztRQUN4QixJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDckIsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLFNBQVMsQ0FBQztTQUN2QyxDQUFDO1FBQ0YsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ3JCLEtBQUssRUFBRSxPQUFPO1lBQ2QsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxTQUFTLENBQUM7U0FDdkMsQ0FBQztRQUNGLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQztZQUNsQixRQUFRLEVBQUUsUUFBUSxHQUFHLFlBQVk7WUFDakMsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUs7WUFDdkIsUUFBUSxFQUFFLENBQUM7WUFDWCxLQUFLLEVBQUUsT0FBTztZQUNkLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDeEIsQ0FBQztRQUNGLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQztZQUNsQixRQUFRLEVBQUUsUUFBUSxHQUFHLFVBQVU7WUFDL0IsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUs7WUFDdkIsUUFBUSxFQUFFLENBQUM7WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDeEIsQ0FBQztLQUNILENBQUM7SUFFRixNQUFNLGtCQUFrQixHQUFHO1FBQ3pCLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNyQixLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxDQUFDO1NBQ3ZDLENBQUM7UUFFRixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbEIsUUFBUSxFQUFFLFFBQVEsR0FBRyxZQUFZO1lBQ2pDLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLO1lBQ3ZCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsS0FBSyxFQUFFLE9BQU87WUFDZCxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3hCLENBQUM7UUFDRixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbEIsUUFBUSxFQUFFLFFBQVEsR0FBRyxVQUFVO1lBQy9CLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLO1lBQ3ZCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3hCLENBQUM7S0FDSCxDQUFDO0lBRUYsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUVqQyxTQUFTLE1BQU07UUFDYixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLGFBQWE7WUFDM0MsQ0FBQyxDQUFDLGlCQUFpQjtZQUNuQixDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDekIsQ0FBQztBQUNILENBQUM7QUFsRUQsK0JBa0VDIn0=