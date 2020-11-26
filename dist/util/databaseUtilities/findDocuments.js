"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientForID = exports.findAllMessagesForClient = exports.findClientByID = exports.findAllConnectedClients = void 0;
const connect_1 = require("./connect");
const config_1 = require("../config");
exports.findAllConnectedClients = async (excludedClientID) => {
    const _client = await connect_1.client();
    return await _client.db(config_1.env.DatabaseName).collection('clients').find({ clientID: { $ne: excludedClientID } }, { projection: { _id: 0 } }).toArray();
};
exports.findClientByID = async (clientID) => {
    const _client = await connect_1.client();
    return await _client.db(config_1.env.DatabaseName).collection('clients').findOne({ clientID: clientID });
};
exports.findAllMessagesForClient = async (_clientID) => {
    const _client = await connect_1.client();
    return await _client.db(config_1.env.DatabaseName).collection('messages').find({ clientID: _clientID }).toArray();
};
exports.getClientForID = async (_clientID) => {
    const _client = await connect_1.client();
    return await _client.db(config_1.env.DatabaseName).collection('clients').findOne({ clientID: _clientID });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZERvY3VtZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsL2RhdGFiYXNlVXRpbGl0aWVzL2ZpbmREb2N1bWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQWtDO0FBQ2xDLHNDQUErQjtBQUlsQixRQUFBLHVCQUF1QixHQUFHLEtBQUssRUFBRSxnQkFBdUIsRUFBb0MsRUFBRTtJQUN2RyxNQUFNLE9BQU8sR0FBRyxNQUFNLGdCQUFNLEVBQUUsQ0FBQTtJQUM5QixPQUFPLE1BQU0sT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFHLENBQUMsWUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsRUFBQyxVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO0FBQ3JKLENBQUMsQ0FBQTtBQUVZLFFBQUEsY0FBYyxHQUFHLEtBQUssRUFBRSxRQUFlLEVBQTRCLEVBQUU7SUFDOUUsTUFBTSxPQUFPLEdBQUcsTUFBTSxnQkFBTSxFQUFFLENBQUE7SUFDOUIsT0FBTyxNQUFNLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBRyxDQUFDLFlBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUUsQ0FBQTtBQUNyRyxDQUFDLENBQUE7QUFFWSxRQUFBLHdCQUF3QixHQUFHLEtBQUssRUFBRSxTQUFnQixFQUFxQyxFQUFFO0lBQ2xHLE1BQU0sT0FBTyxHQUFHLE1BQU0sZ0JBQU0sRUFBRSxDQUFBO0lBQzlCLE9BQU8sTUFBTSxPQUFPLENBQUMsRUFBRSxDQUFDLFlBQUcsQ0FBQyxZQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7QUFDMUcsQ0FBQyxDQUFBO0FBRVksUUFBQSxjQUFjLEdBQUcsS0FBSyxFQUFFLFNBQWlCLEVBQThCLEVBQUU7SUFDbEYsTUFBTSxPQUFPLEdBQUcsTUFBTSxnQkFBTSxFQUFFLENBQUE7SUFDOUIsT0FBTyxNQUFNLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBRyxDQUFDLFlBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUUsQ0FBQTtBQUN0RyxDQUFDLENBQUEifQ==