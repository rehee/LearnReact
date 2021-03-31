const CSCallback = (callbackRef: any,) => {
  if (!!callbackRef.invokeMethodAsync) {

    return (obj: any, callback: any) => {
      callbackRef.invokeMethodAsync("Callback", obj).
        then(c => callback(c));
      return;
    };
  }
  if (!callbackRef) {
    return (obj) => callbackRef(obj);
  }
}
export { CSCallback }