using System.Web.Http;

namespace PhotoPortfolio.Controllers
{
    public class AboutController : ApiController
    {
      private static string aboutText = "";

      // GET api/values/5
      public About Get()
      {
        return new About { Text = aboutText };
      }

      // POST api/values
      public void Post(About about)
      {
        aboutText = about.Text;
      }

      // PUT api/values/5
      public void Put(int id, [FromBody]string value)
      {
      }

      // DELETE api/values/5
      public void Delete(int id)
      {
      }

      public class About
      {
        public string Text;
      }
    }
}
