"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const errorHandler_1 = require("../../util/errorHandler");
const responses_1 = require("../../util/responses");
const insertDocument_1 = require("../../util/databaseUtilities/insertDocument");
const newId_1 = require("../../util/helperUtilities/newId");
const convertToBase64_1 = require("../../util/helperUtilities/convertToBase64");
const sendToClient_1 = require("../../sendToClient");
const findDocuments_1 = require("../../util/databaseUtilities/findDocuments");
exports.handler = async (event) => {
    try {
        const context = event.requestContext;
        const body = JSON.parse(event.body);
        //insert session into mongo
        const payload = {
            _id: await convertToBase64_1.convertToBase64(newId_1.newId()),
            clientID: context.connectionId,
            clientName: body.params.name,
            date: Date.now(),
            domainName: context.domainName,
            stage: context.stage
        };
        await insertDocument_1.insertClientDoc(payload);
        const message = {
            _id: await convertToBase64_1.convertToBase64(newId_1.newId()),
            clientID: context.connectionId,
            date: Date.now(),
            domainName: context.domainName,
            stage: context.stage,
            message: { status: 'success', response: '_initialise', body: { message: 'Initialisation Successful' } }
        };
        await sendToClient_1.send([message]);
        const _clients = await findDocuments_1.findAllConnectedClients(context.connectionId);
        for (const client of _clients) {
            const message = {
                _id: await convertToBase64_1.convertToBase64(newId_1.newId()),
                clientID: client.clientID,
                date: Date.now(),
                domainName: client.domainName,
                stage: client.stage,
                message: { status: 'success', response: '_clientAddedToRoom', body: { client: payload } }
            };
            await sendToClient_1.send([message]);
        }
        return responses_1.responses._200({ message: 'initialised' });
    }
    catch (exception) {
        await errorHandler_1.throwError(exception);
        return responses_1.responses._400({ message: 'Server Side Error' });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25Jbml0aWFsaXNlQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3dlYnNvY2tldHMvY3VzdG9tSGFuZGxlcnMvb25Jbml0aWFsaXNlQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBEQUFvRDtBQUNwRCxvREFBZ0Q7QUFDaEQsZ0ZBQTZFO0FBRTdFLDREQUF3RDtBQUN4RCxnRkFBNEU7QUFDNUUscURBQXlDO0FBRXpDLDhFQUFvRjtBQUV2RSxRQUFBLE9BQU8sR0FBRyxLQUFLLEVBQUUsS0FBMkIsRUFBa0MsRUFBRTtJQUN6RixJQUNBO1FBQ0ksTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQTtRQUNwQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFLLENBQUMsQ0FBQTtRQUNwQywyQkFBMkI7UUFDM0IsTUFBTSxPQUFPLEdBQXFCO1lBQzlCLEdBQUcsRUFBQyxNQUFNLGlDQUFlLENBQUMsYUFBSyxFQUFFLENBQUM7WUFDbEMsUUFBUSxFQUFDLE9BQU8sQ0FBQyxZQUFhO1lBQzlCLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDNUIsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDaEIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFXO1lBQy9CLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztTQUN2QixDQUFBO1FBQ0QsTUFBTSxnQ0FBZSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRTlCLE1BQU0sT0FBTyxHQUFzQjtZQUMvQixHQUFHLEVBQUMsTUFBTSxpQ0FBZSxDQUFDLGFBQUssRUFBRSxDQUFDO1lBQ2xDLFFBQVEsRUFBQyxPQUFPLENBQUMsWUFBYTtZQUM5QixJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNoQixVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVc7WUFDL0IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsRUFBQztTQUNuRyxDQUFBO1FBQ0QsTUFBTSxtQkFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUVyQixNQUFNLFFBQVEsR0FBdUIsTUFBTSx1Q0FBdUIsQ0FBQyxPQUFPLENBQUMsWUFBYSxDQUFDLENBQUE7UUFDekYsS0FBSyxNQUFNLE1BQU0sSUFBSSxRQUFRLEVBQzdCO1lBQ0ksTUFBTSxPQUFPLEdBQXNCO2dCQUMvQixHQUFHLEVBQUMsTUFBTSxpQ0FBZSxDQUFDLGFBQUssRUFBRSxDQUFDO2dCQUNsQyxRQUFRLEVBQUMsTUFBTSxDQUFDLFFBQVM7Z0JBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNoQixVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVc7Z0JBQzlCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDbkIsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUMsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxFQUFDO2FBQ3JGLENBQUE7WUFDRCxNQUFNLG1CQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1NBQ3hCO1FBR0QsT0FBTyxxQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFBO0tBQ3BEO0lBQ0QsT0FBTyxTQUFTLEVBQUM7UUFDYixNQUFNLHlCQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDM0IsT0FBTyxxQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUE7S0FDMUQ7QUFDTCxDQUFDLENBQUEifQ==