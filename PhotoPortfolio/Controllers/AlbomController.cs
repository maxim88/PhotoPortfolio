using System.Web.Http;

namespace PhotoPortfolio.Controllers
{
    public class AlbomController : ApiController
    {     
      // GET api/values/5
      public About Get()
      {
        return new About { Text = "go go go" };
      }

      // POST api/values
      public void Post([FromBody]string value)
      {
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
