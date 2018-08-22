"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    getUTCTimeStamp() {
        const date = new Date(new Date().toUTCString());
        const millis = date.getTime();
        return millis;
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map