"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const findDocuments_1 = require("../../util/databaseUtilities/findDocuments");
const errorHandler_1 = require("../../util/errorHandler");
const responses_1 = require("../../util/responses");
const newId_1 = require("../../util/helperUtilities/newId");
const convertToBase64_1 = require("../../util/helperUtilities/convertToBase64");
const sendToClient_1 = require("../../sendToClient");
exports.handler = async (event) => {
    try {
        const context = event.requestContext;
        const body = JSON.parse(event.body);
        //search mongo for clients
        const _clients = await findDocuments_1.findAllConnectedClients(context.connectionId);
        const message = {
            _id: await convertToBase64_1.convertToBase64(newId_1.newId()),
            clientID: context.connectionId,
            date: Date.now(),
            domainName: context.domainName,
            stage: context.stage,
            message: { status: 'success', response: '_listAllClients', body: { clients: _clients } }
        };
        await sendToClient_1.send([message]);
        return responses_1.responses._200({ message: 'connected' });
    }
    catch (exception) {
        await errorHandler_1.throwError(exception);
        return responses_1.responses._400({ message: 'Server Side Error' });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25MaXN0QWxsQ2xpZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93ZWJzb2NrZXRzL2N1c3RvbUhhbmRsZXJzL29uTGlzdEFsbENsaWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsOEVBQW9GO0FBQ3BGLDBEQUFvRDtBQUNwRCxvREFBZ0Q7QUFDaEQsNERBQXdEO0FBQ3hELGdGQUE0RTtBQUM1RSxxREFBeUM7QUFJNUIsUUFBQSxPQUFPLEdBQUcsS0FBSyxFQUFFLEtBQTJCLEVBQWtDLEVBQUU7SUFDekYsSUFDQTtRQUNJLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUE7UUFDcEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSyxDQUFDLENBQUE7UUFDcEMsMEJBQTBCO1FBQzFCLE1BQU0sUUFBUSxHQUF1QixNQUFNLHVDQUF1QixDQUFDLE9BQU8sQ0FBQyxZQUFhLENBQUMsQ0FBQTtRQUV6RixNQUFNLE9BQU8sR0FBc0I7WUFDL0IsR0FBRyxFQUFDLE1BQU0saUNBQWUsQ0FBQyxhQUFLLEVBQUUsQ0FBQztZQUNsQyxRQUFRLEVBQUMsT0FBTyxDQUFDLFlBQWE7WUFDOUIsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDaEIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFXO1lBQy9CLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUMsUUFBYyxFQUFDLEVBQUM7U0FDMUYsQ0FBQTtRQUNELE1BQU0sbUJBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFFckIsT0FBTyxxQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFBO0tBQ2xEO0lBQ0QsT0FBTyxTQUFTLEVBQUM7UUFDYixNQUFNLHlCQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDM0IsT0FBTyxxQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUE7S0FDMUQ7QUFDTCxDQUFDLENBQUEifQ==