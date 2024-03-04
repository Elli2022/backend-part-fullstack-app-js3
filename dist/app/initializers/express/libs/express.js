"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//src/app/initializers/express/libs/express.ts
function createServer({ json, urlencoded, app, cors, compression, helmet, logger, }) {
    return Object.freeze({ server });
    function server({ hostname, port, routes }) {
        app.use(helmet());
        app.options("*", cors({ credentials: true, origin: true }));
        app.use(cors());
        app.use(compression());
        app.use(json());
        app.use(urlencoded({ extended: true }));
        app.use((req, res, next) => {
            logger.info(`[EXPRESS] Connection received: ${req.ip}:${req.path}:${req.method}`);
            next();
        });
        // Definierar en route för root URL:en '/'
        app.get("/", (req, res) => {
            res.json({ message: "Välkommen till API:et!" });
        });
        for (let route of routes) {
            app[route.method](`${route.path}`, route.component);
        }
        app.listen(port, hostname, () => {
            logger.info(`[EXPRESS] Server running at http://${hostname}:${port}/`);
            return;
        });
    }
}
exports.default = createServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvaW5pdGlhbGl6ZXJzL2V4cHJlc3MvbGlicy9leHByZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQThDO0FBQzlDLFNBQXdCLFlBQVksQ0FBQyxFQUNuQyxJQUFJLEVBQ0osVUFBVSxFQUNWLEdBQUcsRUFDSCxJQUFJLEVBQ0osV0FBVyxFQUNYLE1BQU0sRUFDTixNQUFNLEdBQ1A7SUFDQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBRWpDLFNBQVMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDeEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFeEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FDVCxrQ0FBa0MsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FDckUsQ0FBQztZQUNGLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7UUFFSCwwQ0FBMEM7UUFDMUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUN4QixHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyRDtRQUVELEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsUUFBUSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7WUFDdkUsT0FBTztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUM7QUF4Q0QsK0JBd0NDIn0=