"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const errorHandler_1 = require("../../util/errorHandler");
const responses_1 = require("../../util/responses");
const sendToClient_1 = require("../../sendToClient");
const convertToBase64_1 = require("../../util/helperUtilities/convertToBase64");
const newId_1 = require("../../util/helperUtilities/newId");
exports.handler = async (event) => {
    try {
        const context = event.requestContext;
        //send message to await initialise of client
        await sendToClient_1.send([
            {
                _id: await convertToBase64_1.convertToBase64(newId_1.newId()),
                clientID: context.connectionId,
                message: { status: 'success', response: '_onConnect', body: { message: 'Initialisation Required' } },
                date: Date.now(),
                domainName: context.domainName,
                stage: context.stage
            }
        ]);
        return responses_1.responses._200({ message: 'connected' });
    }
    catch (exception) {
        await errorHandler_1.throwError(exception);
        return responses_1.responses._400({ message: 'Server Side Error' });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25Db25uZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3dlYnNvY2tldHMvZGVmYXVsdEhhbmRsZXJzL29uQ29ubmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSwwREFBb0Q7QUFDcEQsb0RBQWdEO0FBQ2hELHFEQUF5QztBQUN6QyxnRkFBNEU7QUFDNUUsNERBQXdEO0FBRTNDLFFBQUEsT0FBTyxHQUFHLEtBQUssRUFBRSxLQUEyQixFQUFrQyxFQUFFO0lBQ3pGLElBQ0E7UUFDSSxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFBO1FBQ3BDLDRDQUE0QztRQUM1QyxNQUFNLG1CQUFJLENBQUM7WUFDUDtnQkFDSSxHQUFHLEVBQUUsTUFBTSxpQ0FBZSxDQUFDLGFBQUssRUFBRSxDQUFDO2dCQUNuQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFlBQWE7Z0JBQy9CLE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsRUFBRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsRUFBQztnQkFDL0YsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2hCLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVztnQkFDL0IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO2FBQ3ZCO1NBQ0osQ0FBQyxDQUFBO1FBQ0YsT0FBTyxxQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFBO0tBQ2xEO0lBQ0QsT0FBTyxTQUFTLEVBQUM7UUFDYixNQUFNLHlCQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDM0IsT0FBTyxxQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUE7S0FDMUQ7QUFDTCxDQUFDLENBQUEifQ==