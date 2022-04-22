import chai from "chai";
import chaiHttp from "chai-http";
import { server } from "../src/main.js";
const should = chai.should();

chai.use(chaiHttp);

const mockDataToHandle = {
    sendMassageURL: 'https://i2-prod.liverpoolecho.co.uk/incoming/article17096840.ece/ALTERNATES/s1200d/0_whatsappweb1_censored.jpg',
}

describe("API Media Handler", () => {
    describe("Post url", () => {
        it("It should return status 200 and text", (done) => {
            chai.request(server)
                .post("/media-handle")
                .send(mockDataToHandle.sendMassageURL)
                .end((err, res) => {
                    should.exist(res);
                    res.should.have.status(200);
                    res.body.should.be.eql("Media successfully handled!");
                    done();
                });
        });
    });
});
