"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessageDocs = exports.deleteClientDoc = void 0;
const connect_1 = require("./connect");
const config_1 = require("../config");
exports.deleteClientDoc = async (params) => {
    const _client = await connect_1.client();
    return await _client.db(config_1.env.DatabaseName).collection('clients').deleteOne(params);
};
exports.deleteMessageDocs = async (params) => {
    const _client = await connect_1.client();
    return await _client.db(config_1.env.DatabaseName).collection('messages').deleteMany(params);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlRG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbC9kYXRhYmFzZVV0aWxpdGllcy9kZWxldGVEb2N1bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx1Q0FBa0M7QUFDbEMsc0NBQStCO0FBRWxCLFFBQUEsZUFBZSxHQUFHLEtBQUssRUFBRSxNQUFrQixFQUFxQyxFQUFFO0lBQzNGLE1BQU0sT0FBTyxHQUFHLE1BQU0sZ0JBQU0sRUFBRSxDQUFBO0lBQzlCLE9BQU8sTUFBTSxPQUFPLENBQUMsRUFBRSxDQUFDLFlBQUcsQ0FBQyxZQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3RGLENBQUMsQ0FBQTtBQUVZLFFBQUEsaUJBQWlCLEdBQUcsS0FBSyxFQUFFLE1BQWtCLEVBQXNDLEVBQUU7SUFDOUYsTUFBTSxPQUFPLEdBQUcsTUFBTSxnQkFBTSxFQUFFLENBQUE7SUFDOUIsT0FBTyxNQUFNLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBRyxDQUFDLFlBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDeEYsQ0FBQyxDQUFBIn0=