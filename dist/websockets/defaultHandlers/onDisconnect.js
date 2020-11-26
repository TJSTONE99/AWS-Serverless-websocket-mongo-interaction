"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const responses_1 = require("../../util/responses");
const errorHandler_1 = require("../../util/errorHandler");
const deleteDocument_1 = require("../../util/databaseUtilities/deleteDocument");
const sendToClient_1 = require("../../sendToClient");
const convertToBase64_1 = require("../../util/helperUtilities/convertToBase64");
const newId_1 = require("../../util/helperUtilities/newId");
const findDocuments_1 = require("../../util/databaseUtilities/findDocuments");
exports.handler = async (event) => {
    try {
        const context = event.requestContext;
        const params = { clientID: context.connectionId };
        const toBeDeletedClient = await findDocuments_1.findClientByID(params.clientID);
        if (toBeDeletedClient) {
            await deleteDocument_1.deleteClientDoc(params);
            await deleteDocument_1.deleteMessageDocs(params);
            const _stillConnectedClients = await findDocuments_1.findAllConnectedClients(context.connectionId);
            for (const _client of _stillConnectedClients) {
                await sendToClient_1.send([
                    {
                        _id: await convertToBase64_1.convertToBase64(newId_1.newId()),
                        clientID: _client.clientID,
                        message: { status: 'success', response: '_clientRemovedFromRoom', body: { client: toBeDeletedClient } },
                        date: Date.now(),
                        domainName: _client.domainName,
                        stage: _client.stage
                    }
                ]);
            }
        }
        return responses_1.responses._200({ message: 'disconnected' });
    }
    catch (exception) {
        await errorHandler_1.throwError(exception);
        return responses_1.responses._400({ message: 'Server Side Error' });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25EaXNjb25uZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3dlYnNvY2tldHMvZGVmYXVsdEhhbmRsZXJzL29uRGlzY29ubmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxvREFBZ0Q7QUFDaEQsMERBQW9EO0FBQ3BELGdGQUFnRztBQUVoRyxxREFBeUM7QUFDekMsZ0ZBQTRFO0FBQzVFLDREQUF3RDtBQUN4RCw4RUFBb0c7QUFFdkYsUUFBQSxPQUFPLEdBQUcsS0FBSyxFQUFFLEtBQTJCLEVBQWtDLEVBQUU7SUFDekYsSUFBSTtRQUNBLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUE7UUFDcEMsTUFBTSxNQUFNLEdBQWUsRUFBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFlBQWEsRUFBQyxDQUFBO1FBQzVELE1BQU0saUJBQWlCLEdBQUcsTUFBTSw4QkFBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMvRCxJQUFJLGlCQUFpQixFQUNyQjtZQUNJLE1BQU0sZ0NBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUM3QixNQUFNLGtDQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQy9CLE1BQU0sc0JBQXNCLEdBQUcsTUFBTSx1Q0FBdUIsQ0FBQyxPQUFPLENBQUMsWUFBYSxDQUFDLENBQUE7WUFFbkYsS0FBSyxNQUFNLE9BQU8sSUFBSSxzQkFBc0IsRUFDNUM7Z0JBQ0ksTUFBTSxtQkFBSSxDQUFDO29CQUNQO3dCQUNJLEdBQUcsRUFBRSxNQUFNLGlDQUFlLENBQUMsYUFBSyxFQUFFLENBQUM7d0JBQ25DLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTt3QkFDMUIsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFDLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEVBQUM7d0JBQ2xHLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO3dCQUNoQixVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVU7d0JBQzlCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztxQkFDdkI7aUJBQ0osQ0FBQyxDQUFBO2FBQ0w7U0FDSjtRQUVELE9BQU8scUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQTtLQUNyRDtJQUNELE9BQU8sU0FBUyxFQUFDO1FBQ2IsTUFBTSx5QkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzNCLE9BQU8scUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFBO0tBQzFEO0FBQ0wsQ0FBQyxDQUFBIn0=