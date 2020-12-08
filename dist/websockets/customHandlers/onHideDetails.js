"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const errorHandler_1 = require("../../util/errorHandler");
const responses_1 = require("../../util/responses");
const newId_1 = require("../../util/helperUtilities/newId");
const convertToBase64_1 = require("../../util/helperUtilities/convertToBase64");
const sendToClient_1 = require("../../sendToClient");
exports.handler = async (event) => {
    try {
        const context = event.requestContext;
        const message = {
            _id: await convertToBase64_1.convertToBase64(newId_1.newId()),
            clientID: context.connectionId,
            date: Date.now(),
            domainName: context.domainName,
            stage: context.stage,
            message: { status: 'success', response: '_hideDetails', body: { message: 'Hide Detail App Display' } }
        };
        await sendToClient_1.send([message]);
        return responses_1.responses._200({ message: 'initialised' });
    }
    catch (exception) {
        await errorHandler_1.throwError(exception);
        return responses_1.responses._400({ message: 'Server Side Error' });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25IaWRlRGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93ZWJzb2NrZXRzL2N1c3RvbUhhbmRsZXJzL29uSGlkZURldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsMERBQW9EO0FBQ3BELG9EQUFnRDtBQUNoRCw0REFBd0Q7QUFDeEQsZ0ZBQTRFO0FBQzVFLHFEQUF5QztBQUc1QixRQUFBLE9BQU8sR0FBRyxLQUFLLEVBQUUsS0FBMkIsRUFBa0MsRUFBRTtJQUN6RixJQUNBO1FBQ0ksTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQTtRQUVwQyxNQUFNLE9BQU8sR0FBc0I7WUFDL0IsR0FBRyxFQUFDLE1BQU0saUNBQWUsQ0FBQyxhQUFLLEVBQUUsQ0FBQztZQUNsQyxRQUFRLEVBQUMsT0FBTyxDQUFDLFlBQWE7WUFDOUIsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDaEIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFXO1lBQy9CLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFDLHlCQUF5QixFQUFDLEVBQUM7U0FDbEcsQ0FBQTtRQUNELE1BQU0sbUJBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFFckIsT0FBTyxxQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFBO0tBQ3BEO0lBQ0QsT0FBTyxTQUFTLEVBQUM7UUFDYixNQUFNLHlCQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDM0IsT0FBTyxxQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUE7S0FDMUQ7QUFDTCxDQUFDLENBQUEifQ==