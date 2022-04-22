"use strict";

import amqp from "amqplib/callback_api.js";
import { amqpCommon } from "../../common/amqp.js";

const receiveMassageAndHandle = async (handlerMedia) => {
    amqp.connect(amqpCommon.link, function (errConnectReceive, connection) {
        if (errConnectReceive) {
            return `Error connection receive msg from queue -->  ${errConnectReceive}`;
        }
        connection.createChannel(function (errCreateChanelReceive, channel) {
            if (errCreateChanelReceive) {
                return `Error creation channel receive msg from queue -->  ${errCreateChanelReceive}`;
            }

            channel.assertQueue(amqpCommon.queue, {
                durable: false,
            });

            channel.consume(
                amqpCommon.queue,
                async function (msg) {
                    await handlerMedia(msg.content.toString());
                },
                {
                    noAck: true,
                }
            );
        });
    });

    return true;
};

export { receiveMassageAndHandle };
