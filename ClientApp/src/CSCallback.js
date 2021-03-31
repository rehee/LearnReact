"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSCallback = void 0;
var CSCallback = function (callbackRef) {
    return function (input) {
        return null;
    };
    //let promise = new Promise<K>((res, rej) => {
    //  if (!!callbackRef.invokeMethodAsync) {
    //    let csCallback = callbackRef as dotNetHandler;
    //    csCallback.invokeMethodAsync<K>("Callback", null)
    //      .then(res);
    //    //return (obj: any, callback: any) => {
    //    //  callbackRef.invokeMethodAsync("Callback", obj).
    //    //    then(c => callback(c));
    //    //  return;
    //  };
    //  //if (!callbackRef) {
    //  //  return (obj) => callbackRef(obj);
    //  //}
    //})
    //return promise;
};
exports.CSCallback = CSCallback;
//# sourceMappingURL=CSCallback.js.map