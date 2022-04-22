import { receiveMassageAndHandle } from "../helper/amqpHelper/receiveHandler.js";
import { sendMassageToQueue } from "../helper/amqpHelper/sendHandler.js";
import { mediaHandlerHelper } from "../helper/mediaHandlerHelper/mediaHandler.js";


class MediaHandlerService {
    async handleRequest(req, res) {
        try {
            await sendMassageToQueue(req.body.url);
            await receiveMassageAndHandle(mediaHandlerHelper);
            res.status(200).json(`Media successfully handled!`);
        } catch (error) {
            res.status(400).json(`Oops! Error handle media.`);
        }
    }
}

const mediaHandler = new MediaHandlerService;

export { mediaHandler }