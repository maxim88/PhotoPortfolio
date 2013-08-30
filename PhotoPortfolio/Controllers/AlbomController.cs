using System.Web.Http;

namespace PhotoPortfolio.Controllers
{
  using System.Collections.Generic;

  public class AlbomController : ApiController
    {     
      // GET api/values/5
    public IEnumerable<Albom> Get()
      {
        return new[] { new Albom { Name = "Cars" }, new Albom { Name = "Nature" } };
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

      public class Albom
      {
        public string Name;
        public string Description;
      }
    }
}
