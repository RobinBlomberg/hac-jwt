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
const Jwt = __importStar(require("../src"));
const assert_1 = require("assert");
(async () => {
    const encoded = await Jwt.sign({
        object: {
            foo: 45
        },
        username: 'foobar'
    }, 'secret');
    const decoded = await Jwt.verify(encoded, 'secret');
    assert_1.deepStrictEqual(decoded.object, {
        foo: 45
    });
    assert_1.strictEqual(decoded.username, 'foobar');
    assert_1.strictEqual(typeof decoded.iat, 'number');
    console.log('\u001b[32m✓ Test "hcu-jwt" passed.\u001b[39m');
})();
//# sourceMappingURL=index.js.map