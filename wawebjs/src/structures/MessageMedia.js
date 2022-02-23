'use strict';




 
export class MessageMedia {
    constructor(mimetype, data, filename) {
        /**
         * MIME type of the attachment
         * @type {string}
         */
        this.mimetype = mimetype;

        /**
         * Base64 encoded data that represents the file
         * @type {string}
         */
        this.data = data;

        /**
         * Name of the file (for documents)
         * @type {?string}
         */
        this.filename = filename;
    }


   
}


