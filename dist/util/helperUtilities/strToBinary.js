"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strToBinary = void 0;
const mongodb_1 = require("mongodb");
exports.strToBinary = (str) => {
    if (str.buffer) {
        return str;
    }
    let obj;
    if (typeof str === 'object') {
        if ('$binary' in str) {
            obj = str.$binary;
        }
        else if ('[$]binary' in str) {
            obj = str['[$]binary'];
        }
    }
    else if (str.indexOf('$binary') > -1) {
        obj = JSON.parse(str).$binary;
    }
    else if (str.indexOf('[$]binary') > -1) {
        obj = JSON.parse(str)['[$]binary'];
    }
    else {
        obj = str;
    }
    return new mongodb_1.Binary(Buffer.from(obj, 'base64'), 3);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyVG9CaW5hcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbC9oZWxwZXJVdGlsaXRpZXMvc3RyVG9CaW5hcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWdDO0FBRW5CLFFBQUEsV0FBVyxHQUFHLENBQUMsR0FBUSxFQUFVLEVBQUU7SUFDOUMsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1FBQ2QsT0FBTyxHQUFHLENBQUE7S0FDWDtJQUNELElBQUksR0FBRyxDQUFBO0lBQ1AsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDM0IsSUFBSSxTQUFTLElBQUksR0FBRyxFQUFFO1lBQ3BCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFBO1NBQ2xCO2FBQU0sSUFBSSxXQUFXLElBQUksR0FBRyxFQUFFO1lBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDdkI7S0FDRjtTQUFNLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN0QyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUE7S0FDOUI7U0FBTSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDeEMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUE7S0FDbkM7U0FBTTtRQUNMLEdBQUcsR0FBRyxHQUFHLENBQUE7S0FDVjtJQUVELE9BQU8sSUFBSSxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ2xELENBQUMsQ0FBQSJ9