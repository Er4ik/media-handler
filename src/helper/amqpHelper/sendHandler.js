'use strict';

import amqp from "amqplib/callback_api.js";
import { amqpCommon } from "../../common/amqp.js";

const sendMassageToQueue = async (msg) => {
    amqp.connect(amqpCommon.link, function (errConSent, connection) {
        if (errConSent) {
            return `Error sent msg to queue -->  ${errConSent}`;
        }

        connection.createChannel(function (errChanelSent, channel) {
            if (errChanelSent) {
                return `Error sent msg to queue -->  ${errChanelSent}`;
            }

            channel.assertQueue(amqpCommon.queue, {
                durable: false,
            });

            channel.sendToQueue(amqpCommon.queue, Buffer.from(`${msg}`));
        });

        setTimeout(function () {
            connection.close();
        }, 500);
    });

    return true;
}

export { sendMassageToQueue };