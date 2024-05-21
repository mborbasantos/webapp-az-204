const baseURL = `https://clistaticfunction.azurewebsites.net`;
export const environment = {
    production: true,
    triggers: {
        http: `${baseURL}/httpTriggerFunc`
    }
};
