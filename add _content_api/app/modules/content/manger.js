import ContentModel from '../../models/content';

export default class Manger {
    addContent = async (requestData) => {
        const advertiserObject = new ContentModel(requestData)
        return advertiserObject.saveData();
    }

    getContentsList = async () => {
        return ContentModel.findData({});
    }

    getContentDetails = async (requestData) => {
        return ContentModel.findData({_id: requestData.id});
    }

    updateContent = async (requestData) => {
        const findObj = { _id: requestData.id }

        const advertiserDetails = await ContentModel.findOneData(findObj)
        if (!advertiserDetails) throw 'Content does not exist';

        if (requestData.addedOn)
            delete requestData.addedOn;
        requestData.modifiedOn = new Date().getTime();
        return ContentModel.findOneAndUpdateData(findObj, requestData)
    }
}
