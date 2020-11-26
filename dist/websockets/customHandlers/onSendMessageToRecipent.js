"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const responses_1 = require("../../util/responses");
const errorHandler_1 = require("../../util/errorHandler");
const insertDocument_1 = require("../../util/databaseUtilities/insertDocument");
const findDocuments_1 = require("../../util/databaseUtilities/findDocuments");
const newId_1 = require("../../util/helperUtilities/newId");
const convertToBase64_1 = require("../../util/helperUtilities/convertToBase64");
const sendToClient_1 = require("../../sendToClient");
exports.handler = async (event) => {
    try {
        const context = event.requestContext;
        const body = JSON.parse(event.body);
        const payload = {
            _id: await convertToBase64_1.convertToBase64(newId_1.newId()),
            clientID: context.connectionId,
            recipientClientID: body.params.recipentClientID,
            message: body.params.value,
            date: Date.now(),
            domainName: context.domainName,
            stage: context.stage
        };
        await insertDocument_1.insertMessageDoc(payload);
        const clientMessage = {
            _id: await convertToBase64_1.convertToBase64(newId_1.newId()),
            clientID: context.connectionId,
            recipientClientID: body,
            message: { status: 'success', response: '_sendMessageToRecipent', body: { message: { value: body.params.value, senderID: payload.clientID } } },
            date: Date.now(),
            domainName: context.domainName,
            stage: context.stage
        };
        const recipentClient = await findDocuments_1.getClientForID(body.params.recipentClientID);
        const outboundMessage = {
            _id: await convertToBase64_1.convertToBase64(newId_1.newId()),
            clientID: recipentClient.clientID,
            message: { status: 'success', response: '_recievedMessageFromClient', body: { message: { senderClientID: context.connectionId, value: body.params.value } } },
            date: Date.now(),
            domainName: recipentClient.domainName,
            stage: recipentClient.stage
        };
        await sendToClient_1.send([clientMessage, outboundMessage]);
        return responses_1.responses._200({ message: 'received message' });
    }
    catch (exception) {
        await errorHandler_1.throwError(exception);
        return responses_1.responses._400({ message: 'Server Side Error' });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25TZW5kTWVzc2FnZVRvUmVjaXBlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvd2Vic29ja2V0cy9jdXN0b21IYW5kbGVycy9vblNlbmRNZXNzYWdlVG9SZWNpcGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxvREFBZ0Q7QUFDaEQsMERBQW9EO0FBQ3BELGdGQUE4RTtBQUM5RSw4RUFBMEU7QUFFMUUsNERBQXdEO0FBQ3hELGdGQUE0RTtBQUM1RSxxREFBeUM7QUFFNUIsUUFBQSxPQUFPLEdBQUcsS0FBSyxFQUFFLEtBQTJCLEVBQWtDLEVBQUU7SUFDekYsSUFBSTtRQUNBLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUE7UUFDcEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSyxDQUFDLENBQUE7UUFDcEMsTUFBTSxPQUFPLEdBQXNCO1lBQy9CLEdBQUcsRUFBRSxNQUFNLGlDQUFlLENBQUMsYUFBSyxFQUFFLENBQUM7WUFDbkMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxZQUFhO1lBQy9CLGlCQUFpQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCO1lBQy9DLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDMUIsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDaEIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFXO1lBQy9CLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztTQUN2QixDQUFBO1FBQ0QsTUFBTSxpQ0FBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUUvQixNQUFNLGFBQWEsR0FBc0I7WUFDckMsR0FBRyxFQUFFLE1BQU0saUNBQWUsQ0FBQyxhQUFLLEVBQUUsQ0FBQztZQUNuQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFlBQWE7WUFDL0IsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUFDO1lBQ3ZJLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2hCLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVztZQUMvQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7U0FDdkIsQ0FBQTtRQUVELE1BQU0sY0FBYyxHQUFzQixNQUFNLDhCQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBRTVGLE1BQU0sZUFBZSxHQUFzQjtZQUN2QyxHQUFHLEVBQUUsTUFBTSxpQ0FBZSxDQUFDLGFBQUssRUFBRSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxjQUFjLENBQUMsUUFBUztZQUNsQyxPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsT0FBTyxDQUFDLFlBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsRUFBQyxFQUFDO1lBQ3ZKLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2hCLFVBQVUsRUFBRSxjQUFjLENBQUMsVUFBVztZQUN0QyxLQUFLLEVBQUUsY0FBYyxDQUFDLEtBQUs7U0FDOUIsQ0FBQTtRQUVELE1BQU0sbUJBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFBO1FBRTVDLE9BQU8scUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFBO0tBQ3pEO0lBQ0QsT0FBTyxTQUFTLEVBQUM7UUFDYixNQUFNLHlCQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDM0IsT0FBTyxxQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUE7S0FDMUQ7QUFDTCxDQUFDLENBQUEifQ==