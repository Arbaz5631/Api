import Utils from '../../utils'
import {apiSuccessMessage, httpConstants} from '../../common/constants'
import BLManager from './manger'

export default class ContentsController {
    async addContent(request, response) {
        lhtWebLog('Inside addContent', request.body, 'addContent', 0, '')
        const [error, addContentRes] = await Utils.parseResponse(new BLManager().addContent(request.body))
        if (!addContentRes) return Utils.handleError(error, request, response)
        return Utils.response(response, addContentRes, apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }

    async getContentsList(request, response) {
        lhtWebLog('Inside getContentsList', request.body, 'getContentsList', 0, '')
        const [error, advertisersListRes] = await Utils.parseResponse(new BLManager().getContentsList(request.body))
        if (!advertisersListRes) return Utils.handleError(error, request, response)
        return Utils.response(response, advertisersListRes, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }

    async getContentDetails(request, response) {
        lhtWebLog('Inside getContentDetails', request.body, 'getContentDetails', 0, '')
        const [error, getContentDetailsRes] = await Utils.parseResponse(new BLManager().getContentDetails(request.query))
        if (!getContentDetailsRes) return Utils.handleError(error, request, response)
        return Utils.response(response, getContentDetailsRes, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }

    async updateContent(request, response) {
        lhtWebLog('Inside updateContent', request.body, 'updateContent', 0, '')
        const [error, updateContentRes] = await Utils.parseResponse(new BLManager().updateContent({...request.body, ...request.query}))
        if (!updateContentRes) return Utils.handleError(error, request, response)
        return Utils.response(response, updateContentRes, apiSuccessMessage.UPDATE_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }
}
