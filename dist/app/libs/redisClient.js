const redis = require("redis");
const redisConfig = {
    host: "localhost",
    port: 6379,
};
const client = redis.createClient(redisConfig);
client.on("error", (err) => console.error("Redis Client Error", err));
client.connect().catch((err) => {
    console.error("Redis connect error", err);
});
module.exports = client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXNDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2xpYnMvcmVkaXNDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRS9CLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLElBQUksRUFBRSxXQUFXO0lBQ2pCLElBQUksRUFBRSxJQUFJO0NBQ1gsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFL0MsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUV0RSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIn0=