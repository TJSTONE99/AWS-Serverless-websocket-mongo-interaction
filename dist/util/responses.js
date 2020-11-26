"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responses = void 0;
exports.responses = {
    _200(data) {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 200,
            body: JSON.stringify(data),
        };
    },
    _400(data = {}) {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 400,
            body: JSON.stringify(data),
        };
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvcmVzcG9uc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsU0FBUyxHQUFHO0lBQ3JCLElBQUksQ0FBQyxJQUFRO1FBQ1QsT0FBTztZQUNILE9BQU8sRUFBRTtnQkFDTCxjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyw4QkFBOEIsRUFBRSxHQUFHO2dCQUNuQyw2QkFBNkIsRUFBRSxHQUFHO2FBQ3JDO1lBQ0QsVUFBVSxFQUFFLEdBQUc7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDN0IsQ0FBQztJQUNOLENBQUM7SUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7UUFDVixPQUFPO1lBQ0gsT0FBTyxFQUFFO2dCQUNMLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLDhCQUE4QixFQUFFLEdBQUc7Z0JBQ25DLDZCQUE2QixFQUFFLEdBQUc7YUFDckM7WUFDRCxVQUFVLEVBQUUsR0FBRztZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUM3QixDQUFDO0lBQ04sQ0FBQztDQUNKLENBQUEifQ==