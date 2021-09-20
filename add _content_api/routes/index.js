/**
 * Created by AyushK on 18/09/20.
 */
import * as ValidationManger from "../middleware/validation";
import ContentModule from "../app/modules/content";
import {stringConstants} from "../app/common/constants";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../config/swagger.json';

module.exports = (app) => {
    app.get('/', (req, res) => res.send(stringConstants.SERVICE_STATUS_HTML));

    /**
     * create swagger UI
     * **/
    app.use('/swagger-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    /**
     * route definition
     */
    app.post("/content", ValidationManger.validateAddContent, new ContentModule().addContent);
    app.get("/content-list", new ContentModule().getContentsList);
    app.get("/content", ValidationManger.validateGetContent, new ContentModule().getContentDetails);
    app.put("/content", ValidationManger.validateGetContent, ValidationManger.validateAddContent, new ContentModule().updateContent);
};
