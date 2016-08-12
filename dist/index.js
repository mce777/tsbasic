var __paeckchen_cache__ = [];
function __paeckchen_require__(index) {
    if (!(index in __paeckchen_cache__)) {
        __paeckchen_cache__[index] = { module: { exports: {} } };
        modules[index](__paeckchen_cache__[index].module, __paeckchen_cache__[index].module.exports);
    }
    return __paeckchen_cache__[index].module;
}
var modules = [function _0(module, exports) {
        var test = 'hello console';
        console.log(test);
    }];
__paeckchen_require__(0);
//# sourceMappingURL=index.js.map