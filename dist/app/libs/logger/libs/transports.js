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
            maxsize: 5242880,
            maxFiles: 5,
            level: "error",
            format: combine(json()),
        }),
        new transports.File({
            filename: filePath + "/all.log",
            handleExceptions: true,
            maxsize: 5242880,
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
            maxsize: 5242880,
            maxFiles: 5,
            level: "error",
            format: combine(json()),
        }),
        new transports.File({
            filename: filePath + "/all.log",
            handleExceptions: true,
            maxsize: 5242880,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNwb3J0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvbGlicy9sb2dnZXIvbGlicy90cmFuc3BvcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXdDO0FBQ3hDLFNBQXdCLFlBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7SUFDekQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDM0MsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUVuRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDaEUsT0FBTyxHQUFHLFNBQVMsSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ3RELENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxpQkFBaUIsR0FBRztRQUN4QixJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDckIsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLFNBQVMsQ0FBQztTQUN2QyxDQUFDO1FBQ0YsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ3JCLEtBQUssRUFBRSxPQUFPO1lBQ2QsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxTQUFTLENBQUM7U0FDdkMsQ0FBQztRQUNGLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQztZQUNsQixRQUFRLEVBQUUsUUFBUSxHQUFHLFlBQVk7WUFDakMsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUUsQ0FBQztZQUNYLEtBQUssRUFBRSxPQUFPO1lBQ2QsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4QixDQUFDO1FBQ0YsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2xCLFFBQVEsRUFBRSxRQUFRLEdBQUcsVUFBVTtZQUMvQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3hCLENBQUM7S0FDSCxDQUFDO0lBRUYsTUFBTSxrQkFBa0IsR0FBRztRQUN6QixJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDckIsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLFNBQVMsQ0FBQztTQUN2QyxDQUFDO1FBRUYsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2xCLFFBQVEsRUFBRSxRQUFRLEdBQUcsWUFBWTtZQUNqQyxnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsS0FBSyxFQUFFLE9BQU87WUFDZCxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3hCLENBQUM7UUFDRixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbEIsUUFBUSxFQUFFLFFBQVEsR0FBRyxVQUFVO1lBQy9CLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFFLENBQUM7WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDeEIsQ0FBQztLQUNILENBQUM7SUFFRixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBRWpDLFNBQVMsTUFBTTtRQUNiLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssYUFBYTtZQUMzQyxDQUFDLENBQUMsaUJBQWlCO1lBQ25CLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztJQUN6QixDQUFDO0FBQ0gsQ0FBQztBQWxFRCwrQkFrRUMifQ==