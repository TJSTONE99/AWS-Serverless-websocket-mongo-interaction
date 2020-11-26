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
        endpoint: "http://localhost:3001",
    });
};
exports.send = async (payload) => {
    payload.map(async (client) => {
        const ws = create(client.domainName, client.stage);
        return await ws.postToConnection({ ConnectionId: client.clientID, Data: JSON.stringify(client.message) }).promise();
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZFRvQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlbmRUb0NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQThCO0FBRzlCLE1BQU0sTUFBTSxHQUFHLENBQUMsVUFBaUIsRUFBRSxLQUFZLEVBQThCLEVBQUU7SUFDM0UsTUFBTSxRQUFRLEdBQUcsR0FBRyxVQUFVLElBQUksS0FBSyxFQUFFLENBQUE7SUFDekMsT0FBTyxJQUFJLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztRQUNuQyxVQUFVLEVBQUUsWUFBWTtRQUN4QixRQUFRLEVBQUMsdUJBQXVCO0tBQ25DLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQUVZLFFBQUEsSUFBSSxHQUFHLEtBQUssRUFBRSxPQUFpQyxFQUFFLEVBQUU7SUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDekIsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xELE9BQU8sTUFBTSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxZQUFZLEVBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ3JILENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIn0=