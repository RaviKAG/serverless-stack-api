import handler from './libs/handler-lib';
import dynamodb from './libs/dynamodb-lib';

export const main = handler(async (event, handlet) => {

    const param = {

        TableName: process.env.tableName,
        Key: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: event.pathParameters.id
        }
    };

    const result = await dynamodb.delete(param);

    console.log(` Deleted Data ${JSON.stringify(result)}`);

    return { status: true };
});