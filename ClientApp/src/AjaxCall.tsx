
export function Ajax<T>(): Promise<T> {

  var promise = new Promise<T>((res, reject) => {
    (window as any).DotNet.invokeMethodAsync('LearnReact', 'ReturnArrayAsync')
      .then(b => res(b));



  });
  return promise;
}

