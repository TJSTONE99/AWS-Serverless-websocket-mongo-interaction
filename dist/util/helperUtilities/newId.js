"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newId = void 0;
const uuid_1 = require("uuid");
const strToBinary_1 = require("./strToBinary");
exports.newId = () => {
    const strUuid = uuid_1.v1().replace(/-/g, '');
    const buffer = Buffer.from(strUuid, 'hex').toString('base64');
    return strToBinary_1.strToBinary(buffer);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3SWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbC9oZWxwZXJVdGlsaXRpZXMvbmV3SWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQXlCO0FBQ3pCLCtDQUEyQztBQUc5QixRQUFBLEtBQUssR0FBRyxHQUFXLEVBQUU7SUFDaEMsTUFBTSxPQUFPLEdBQUcsU0FBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUN0QyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDN0QsT0FBTyx5QkFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzVCLENBQUMsQ0FBQSJ9