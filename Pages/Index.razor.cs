using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace LearnReact.Pages
{

  public partial class Index
  {
    [Inject]
    public IJSRuntime js { get; set; }
    protected override async Task OnInitializedAsync()
    {

      await base.OnInitializedAsync();
    }
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
      if (firstRender)
      {


      }
      //await js.InvokeVoidAsync("RenderHW", "root", JSCallback.Function<dynamic, dynamic>(b =>
      // {
      //   var a = b;
      //   return null;
      // }));
      await base.OnAfterRenderAsync(firstRender);
      var b = example;
    }
    ElementReference example { get; set; }

    [Inject]
    public HttpClient hc { get; set; }
    private int count = 0;
    public async Task click()
    {
      count++;
      await js.Callback("RenderHW", "root", JS.Func<int, int>(b =>
        {
          count = b + 1;
          return count;
        }), count);
    }
  }

}
