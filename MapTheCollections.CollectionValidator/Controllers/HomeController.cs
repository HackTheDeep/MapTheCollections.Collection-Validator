using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MapTheCollections.CollectionValidator.Controllers {
    public class HomeController : Controller {

        public ActionResult Index() {
            return View();
        }

        public ActionResult CSVUpload() {
            return View();
        }

        public ActionResult ManualInput() {
            ViewBag.Message = "Your manual input page.";

            return View();
        }
    }
}