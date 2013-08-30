using System.Web.Http;

namespace PhotoPortfolio.Controllers
{
  using System.Collections.Generic;
  using System.Linq;

  public class AlbomController : ApiController
    {
    private static List<Albom> alboms = new List<Albom> { new Albom { Name = "Cars", Preview = "http://englishwell.info/uploads/taginator/Dec-2012/pictures.jpg" }, new Albom { Name = "Nature", Preview = "http://englishwell.info/uploads/taginator/Dec-2012/pictures.jpg" } }; 
      // GET api/values/5
    public IEnumerable<Albom> Get()
      {
        return alboms;
      }

    // GET api/values/5
    public Albom Get(string id)
    {
      return alboms.FirstOrDefault(item => item.Id == id);
    }

      // POST api/values
      public void Post(Albom albom)
      {
      }

      // PUT api/values/5
      public void Put(int id, Albom albom)
      {
      }

      // DELETE api/values/5
      public void Delete(int id)
      {
      }

      public class Albom
      {
        public string Id;
        public string Name;
        public string Description;

        public string Preview;
      }
    }
}
