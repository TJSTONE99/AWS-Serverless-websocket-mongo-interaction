"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = void 0;
const connect_1 = require("./connect");
exports.disconnect = async () => {
    return await (await connect_1.client()).close();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsL2RhdGFiYXNlVXRpbGl0aWVzL2Rpc2Nvbm5lY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQWtDO0FBQ3JCLFFBQUEsVUFBVSxHQUFHLEtBQUssSUFBa0IsRUFBRTtJQUMvQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLGdCQUFNLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0FBQ3pDLENBQUMsQ0FBQSJ9