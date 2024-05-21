const baseURL = `http://localhost:7071/api`;
export const environment = {
    production: false,
    triggers: {
        http: `${baseURL}/httpTriggerFunc`
    }
};
