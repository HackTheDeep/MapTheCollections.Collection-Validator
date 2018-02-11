using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MapTheCollections.CollectionValidator.Controllers {
    public class HomeController : Controller {

        public ActionResult Index() {
            return RedirectToLocal("/Home/ManualInput");
        }

        public ActionResult CSVUpload() {
            return View();
        }

        public ActionResult ManualInput() {

            return View();
        }

        private ActionResult RedirectToLocal(string returnUrl) {
            if (Url.IsLocalUrl(returnUrl)) {
                return Redirect(returnUrl);
            }
            else {
                return RedirectToAction("Index","Home");
            }
        }

    }
}