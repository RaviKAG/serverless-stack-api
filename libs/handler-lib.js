export default function handler(lambda) {
    return async function (event, context) {
        let body;
        let statusCode;

        // console.log(` event from handler  ${JSON.stringify(event)} \n\n `);
        // console.log(` lambda - ${lambda}`);

        try {
            // Run the Lambda
            body = await lambda(event, context);
            statusCode = 200;
        } catch (e) {
            // console.log(` \n error from handler ${JSON.stringify(e.stringify)}\n `);
            body = { error: e.message };
            statusCode = 500;
        }

        // Return HTTP response
        return {
            statusCode,
            body: JSON.stringify(body),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            }
        };
    };
};