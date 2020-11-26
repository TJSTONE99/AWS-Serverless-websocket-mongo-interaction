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
        //search mongo for messages for specific client
        const _clientMessages = await findDocuments_1.findAllMessagesForClient(body.clientID);
        const message = {
            _id: await convertToBase64_1.convertToBase64(newId_1.newId()),
            clientID: context.connectionId,
            date: Date.now(),
            domainName: context.domainName,
            stage: context.stage,
            message: { status: 'success', response: '_listAllMessagesForClient', body: { clients: _clientMessages } }
        };
        await sendToClient_1.send([message]);
        return responses_1.responses._200({ message: 'connected' });
    }
    catch (exception) {
        await errorHandler_1.throwError(exception);
        return responses_1.responses._400({ message: 'Server Side Error' });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25GZXRjaE1lc3NhZ2VzRm9yQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3dlYnNvY2tldHMvY3VzdG9tSGFuZGxlcnMvb25GZXRjaE1lc3NhZ2VzRm9yQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDhFQUFxRjtBQUNyRiwwREFBb0Q7QUFDcEQsb0RBQWdEO0FBQ2hELDREQUF3RDtBQUN4RCxnRkFBNEU7QUFDNUUscURBQXlDO0FBSTVCLFFBQUEsT0FBTyxHQUFHLEtBQUssRUFBRSxLQUEyQixFQUFrQyxFQUFFO0lBQ3pGLElBQ0E7UUFDSSxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFBO1FBQ3BDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUssQ0FBQyxDQUFBO1FBQ3BDLCtDQUErQztRQUMvQyxNQUFNLGVBQWUsR0FBd0IsTUFBTSx3Q0FBd0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFFMUYsTUFBTSxPQUFPLEdBQXNCO1lBQy9CLEdBQUcsRUFBQyxNQUFNLGlDQUFlLENBQUMsYUFBSyxFQUFFLENBQUM7WUFDbEMsUUFBUSxFQUFDLE9BQU8sQ0FBQyxZQUFhO1lBQzlCLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2hCLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVztZQUMvQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUMsMkJBQTJCLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFDLGVBQXFCLEVBQUMsRUFBQztTQUMzRyxDQUFBO1FBQ0QsTUFBTSxtQkFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUVyQixPQUFPLHFCQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUE7S0FDbEQ7SUFDRCxPQUFPLFNBQVMsRUFBQztRQUNiLE1BQU0seUJBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMzQixPQUFPLHFCQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQTtLQUMxRDtBQUNMLENBQUMsQ0FBQSJ9