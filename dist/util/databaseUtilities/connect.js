"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const mongodb_1 = require("mongodb");
const config_1 = require("../config");
let _client;
exports.client = async () => {
    if (!_client)
        _client = await mongodb_1.MongoClient.connect(`${config_1.env.DatabaseConnectionString}:${config_1.env.DatabaseConnectionPort}`, { useNewUrlParser: true, useUnifiedTopology: true });
    return _client;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsL2RhdGFiYXNlVXRpbGl0aWVzL2Nvbm5lY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXFDO0FBQ3JDLHNDQUErQjtBQUMvQixJQUFJLE9BQW1CLENBQUE7QUFDVixRQUFBLE1BQU0sR0FBRyxLQUFLLElBQXlCLEVBQUU7SUFDbEQsSUFBSSxDQUFDLE9BQU87UUFBRSxPQUFPLEdBQUcsTUFBTSxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFlBQUcsQ0FBQyx3QkFBeUIsSUFBSSxZQUFHLENBQUMsc0JBQXVCLEVBQUUsRUFBRyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtJQUN6SyxPQUFPLE9BQU8sQ0FBQTtBQUNsQixDQUFDLENBQUEifQ==