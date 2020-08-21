"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.sign = void 0;
const jwt = __importStar(require("jsonwebtoken"));
exports.sign = (payload, secret, options) => {
    return new Promise((resolve, reject) => {
        const callback = (error, encoded) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(encoded);
            }
        };
        if (options === undefined) {
            jwt.sign(payload, secret, callback);
        }
        else {
            jwt.sign(payload, secret, options, callback);
        }
    });
};
exports.verify = (token, secret, options) => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return new Promise((resolve, reject) => {
        const callback = (error, decoded) => {
            if (error || !decoded) {
                reject(error);
            }
            else {
                resolve(decoded);
            }
        };
        if (options === undefined) {
            jwt.verify(token, secret, callback);
        }
        else {
            jwt.verify(token, secret, options, callback);
        }
    });
};
//# sourceMappingURL=index.js.map