import expect from "chai";
import { receiveMassageAndHandle } from "../src/helper/amqpHelper/receiveHandler.js";
import { sendMassageToQueue } from "../src/helper/amqpHelper/sendHandler.js";

const mockDataToHandle = {
    sendMassageURL: 'https://i2-prod.liverpoolecho.co.uk/incoming/article17096840.ece/ALTERNATES/s1200d/0_whatsappweb1_censored.jpg',
}

describe("Media handler", () => {
    it("Sending massage to queue", async () => {
        const res = await sendMassageToQueue(mockDataToHandle.sendMassageURL)
        expect.expect(res).to.equal(true);
    });

    it("Getting massage from queue", async () => {
        const res = await receiveMassageAndHandle();
        expect.expect(res).to.equal(true);
    });
});
