"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToBase64 = void 0;
const strToBinary_1 = require("./strToBinary");
exports.convertToBase64 = async (str) => {
    return await strToBinary_1.strToBinary(str).buffer.toString('base64');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydFRvQmFzZTY0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWwvaGVscGVyVXRpbGl0aWVzL2NvbnZlcnRUb0Jhc2U2NC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBMkM7QUFFOUIsUUFBQSxlQUFlLEdBQUcsS0FBSyxFQUFFLEdBQVEsRUFBbUIsRUFBRTtJQUNqRSxPQUFPLE1BQU0seUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3pELENBQUMsQ0FBQSJ9