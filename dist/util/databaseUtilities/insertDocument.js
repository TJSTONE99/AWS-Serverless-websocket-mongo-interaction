"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertMessageDoc = exports.insertClientDoc = void 0;
const connect_1 = require("./connect");
const config_1 = require("../config");
exports.insertClientDoc = async (paylod) => {
    const _client = await connect_1.client();
    return await _client.db(config_1.env.DatabaseName).collection('clients').insertOne(paylod);
};
exports.insertMessageDoc = async (paylod) => {
    const _client = await connect_1.client();
    return await _client.db(config_1.env.DatabaseName).collection('messages').insertOne(paylod);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXJ0RG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbC9kYXRhYmFzZVV0aWxpdGllcy9pbnNlcnREb2N1bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx1Q0FBa0M7QUFDbEMsc0NBQStCO0FBR2xCLFFBQUEsZUFBZSxHQUFHLEtBQUssRUFBRSxNQUF3QixFQUF1QyxFQUFFO0lBQ25HLE1BQU0sT0FBTyxHQUFHLE1BQU0sZ0JBQU0sRUFBRSxDQUFBO0lBQzlCLE9BQU8sTUFBTSxPQUFPLENBQUMsRUFBRSxDQUFDLFlBQUcsQ0FBQyxZQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3RGLENBQUMsQ0FBQTtBQUVZLFFBQUEsZ0JBQWdCLEdBQUcsS0FBSyxFQUFFLE1BQXlCLEVBQXVDLEVBQUU7SUFDckcsTUFBTSxPQUFPLEdBQUcsTUFBTSxnQkFBTSxFQUFFLENBQUE7SUFDOUIsT0FBTyxNQUFNLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBRyxDQUFDLFlBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDdkYsQ0FBQyxDQUFBIn0=