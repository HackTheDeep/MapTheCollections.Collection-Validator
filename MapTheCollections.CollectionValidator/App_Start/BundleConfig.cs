﻿using System.Web;
using System.Web.Optimization;

namespace MapTheCollections.CollectionValidator {
    public class BundleConfig {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles) {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/plugins/datepicker3.css",
                      "~/Content/plugins/jsgrid.min.css",
                      "~/Content/plugins/jsgrid-theme.min.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                    "~/Scripts/app/csv-manager.js",
                    "~/Scripts/app/validator.js",
                    "~/Scripts/app/manual-input.js"));


            bundles.Add(new ScriptBundle("~/bundles/jsgrid").Include(
                "~/Scripts/plugins/jsgrid/jsgrid.min.js"));


            bundles.Add(new ScriptBundle("~/bundles/plugins").Include(
                "~/Scripts/plugins/boostrap-datepicker.js",
                "~/Scripts/plugins/jquery-ui.min.js",
                "~/Scripts/plugins/moment.js"));


        }
    }
}
