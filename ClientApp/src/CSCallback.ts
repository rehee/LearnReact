interface dotNetHandler {
  invokeMethodAsync<T>(methodName: string, ...args): Promise<T>;
}
const CSCallback: <T, K>(callbackRef: dotNetHandler | ((input: T) => Promise<K>)) => (input: T) => Promise<K> =
  <T, K>(callbackRef: dotNetHandler | any) => {
    return (input: T) => {
      let promise = new Promise<K>((res: (cbInput: K) => void, rej) => {
        if (!!callbackRef.invokeMethodAsync) {
          let csCallback = callbackRef as dotNetHandler;
          csCallback.invokeMethodAsync<K>("Callback", input)
            .then(b => res(b))
            .catch(e => rej(e));
          return;
        }

        if (!!callbackRef) {
          try {
            let cb = callbackRef as (input: T) => Promise<K>;
            cb(input)
              .then(b => res(b))
              .catch(e => rej(e));
            return;
          }
          catch (ex) {
            rej(ex);
            return;
          }
        }
        if (!callbackRef) {
          rej("No callbakref");
          return;
        }
      });
      return promise;
    };
  }
function aa(callbacl: (string) => void) {

}
export { CSCallback, dotNetHandler }