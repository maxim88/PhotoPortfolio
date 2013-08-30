using System.Web.Mvc;

namespace PhotoPortfolio.Controllers
{
  public class HomeController : Controller
  {
    public ActionResult Index()
    {
      return View();
    }

    public ActionResult About()
    {
      return View();
    }
  }
}
