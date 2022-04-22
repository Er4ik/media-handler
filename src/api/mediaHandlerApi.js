import { Router } from 'express';
import { mediaHandler } from '../services/mediaHandlerService.js';

const mediaHandlerApi = Router();

mediaHandlerApi.post('/media-handle', async (req, res) => {
        return await mediaHandler.handleRequest(req, res);
    })

export { mediaHandlerApi };