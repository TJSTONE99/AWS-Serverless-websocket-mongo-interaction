"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.send = void 0;
const AWS = __importStar(require("aws-sdk"));
const create = (domainName, stage) => {
    const endpoint = `${domainName}/${stage}`;
    return new AWS.ApiGatewayManagementApi({
        apiVersion: '2018-11-29',
        endpoint,
    });
};
exports.send = async (domainName, stage, connectionID, message) => {
    const ws = create(domainName, stage);
    const postParams = {
        Data: message,
        ConnectionId: connectionID,
    };
    return await ws.postToConnection(postParams);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXN0YWJsaXNoV2ViU29ja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvZXN0YWJsaXNoV2ViU29ja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFFL0IsTUFBTSxNQUFNLEdBQUcsQ0FBQyxVQUFpQixFQUFFLEtBQVksRUFBOEIsRUFBRTtJQUMzRSxNQUFNLFFBQVEsR0FBRyxHQUFHLFVBQVUsSUFBSSxLQUFLLEVBQUUsQ0FBQTtJQUN6QyxPQUFPLElBQUksR0FBRyxDQUFDLHVCQUF1QixDQUFDO1FBQ25DLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLFFBQVE7S0FDWCxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFFWSxRQUFBLElBQUksR0FBRyxLQUFLLEVBQUUsVUFBaUIsRUFBRSxLQUFZLEVBQUUsWUFBbUIsRUFBRSxPQUFjLEVBQUUsRUFBRTtJQUUvRixNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ3BDLE1BQU0sVUFBVSxHQUFHO1FBQ2YsSUFBSSxFQUFFLE9BQU87UUFDYixZQUFZLEVBQUUsWUFBWTtLQUM3QixDQUFDO0lBRUYsT0FBTyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUNoRCxDQUFDLENBQUEifQ==