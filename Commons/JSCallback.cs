using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace System
{
  public static class JS
  {
    public static DotNetObjectReference<JSReference<T, K>> Func<T, K>(Func<T, K> callback = null)
    {
      var obj = new JSReference<T, K>(callback);
      return DotNetObjectReference.Create<JSReference<T, K>>(obj);
    }

    public static ValueTask Callback(this IJSRuntime jsRuntime, string method, string elementId, params object[] args)
    {
      var firstArg = new object[] { elementId };
      return jsRuntime.InvokeVoidAsync(method, firstArg.Union(args).ToArray());
    }
  }

  public class JSReference<T, K>
  {
    private Func<T, K> callback { get; set; }
    public JSReference(Func<T, K> callback)
    {
      this.callback = callback;
    }
    [JSInvokable]
    public K Callback(T input)
    {
      if (callback == null)
        return default;
      return callback.Invoke(input);
    }
  }
}
