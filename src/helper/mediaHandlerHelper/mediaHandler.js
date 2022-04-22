import Tesseract from "tesseract.js";

const mediaHandlerHelper = async (url) => {
    Tesseract.recognize(url, "eng", { logger: () => { console.log('Handling media,  wait...'); } }).then(({ data: { text } }) => {
        console.log(`\nText:\n>-------\n${text}-------<\n`);
    });
    return;
};

export { mediaHandlerHelper };
