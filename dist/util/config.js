"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = require("dotenv");
dotenv_1.config();
exports.env = {
    DatabaseConnectionString: process.env.DatabaseConnectionString,
    DatabaseConnectionPort: process.env.DatabaseConnectionPort,
    DatabaseName: process.env.DatabaseName
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUErQjtBQUMvQixlQUFNLEVBQUUsQ0FBQTtBQUVLLFFBQUEsR0FBRyxHQUFHO0lBQ2Ysd0JBQXdCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0I7SUFDOUQsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0I7SUFDMUQsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTtDQUN6QyxDQUFBIn0=