const { dynamodb } = require('./const/providers');
const { sendResponse } = require('./utils/sendResponse');

module.exports.documentDelete = async (event) => {
    const { idDocument } = JSON.parse(event.body);

    try {
        await dynamodb.delete({
            TableName: 'documentsTable',
            Key: {
                idDocument: idDocument
            }
        }).promise();

        return sendResponse(200, 'Deleted document successfully!');
    } catch (error) {
        return sendResponse(400, error);
    }
}