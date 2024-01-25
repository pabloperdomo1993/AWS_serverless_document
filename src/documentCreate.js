const { dynamodb } = require('./const/providers');
const { sendResponse } = require('./utils/sendResponse');
const { v4: uuidV4 } = require('uuid');

module.exports.documentCreate = async (event) => {
    const { notes, documentNumber } = JSON.parse(event.body);
    const createdDate = new Date();

    try {
        await dynamodb.put({
            TableName: 'documentsTable',
            Item: {
                idDocument: uuidV4(),
                notes: notes,
                idUser: '',
                idFile: '',
                documentNumber: documentNumber,
                createdBy: '',
                createdDate: createdDate.toString(),
                updatedBy: '',
                updatedDate: '',
            }
        }).promise();
        
        return sendResponse(200, 'Created document successfully!');
    } catch (error) {
        return sendResponse(400, error);
    }
}