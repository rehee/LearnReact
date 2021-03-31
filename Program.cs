using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace LearnReact
{
  public class Program
  {
    static long c = 0;
    public static async Task Main(string[] args)
    {
      var builder = WebAssemblyHostBuilder.CreateDefault(args);
      builder.RootComponents.Add<App>("#app");

      
      
      builder.Services.AddTransient(sp =>
      {
        c++;
        return new HttpClient {
          MaxResponseContentBufferSize = c,
          BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) };
      });

      await builder.Build().RunAsync();
    }
  }
}
