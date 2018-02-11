$(document).ready(function () {

    //var clients = [
    //    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue", "Married": false },
    //    { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av.", "Married": true },
    //    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St.", "Married": false },
    //    { "Name": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave", "Married": true },
    //    { "Name": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street", "Married": false }
    //];

    //var countries = [
    //    { Name: "", Id: 0 },
    //    { Name: "United States", Id: 1 },
    //    { Name: "Canada", Id: 2 },
    //    { Name: "United Kingdom", Id: 3 }
    //];

    //$("#jsGrid").jsGrid({
    //    width: "100%",
    //    height: "400px",

    //    inserting: true,
    //    editing: true,
    //    sorting: true,
    //    paging: true,

    //    data: clients,

    //    fields: [
    //        { name: "Name", type: "text", width: 150, validate: "required" },
    //        { name: "Age", type: "number", width: 50 },
    //        { name: "Address", type: "text", width: 200 },
    //        { name: "Country", type: "select", items: countries, valueField: "Id", textField: "Name" },
    //        { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
    //        { type: "control" }
    //    ]
    //});

    $("#jsGrid").jsGrid({
        width: "100%",
        height: "400px",

        inserting: true,
        editing: true,
        sorting: true,
        paging: true,

        fields: [
            { name: "Locality_BaySoundHarbor", type: "text" },
            { name: "Locality_Continent", type: "text" },
            { name: "Locality_Country ", type: "text" },
            { name: "Locality_DeptProvinceState", type: "text" },
            { name: "Locality_IRN", type: "number" },
            { name: "Locality_Island", type: "text" },
            { name: "Locality_IslandGroup", type: "text" },
            { name: "Locality_Lake/Pond/Resevoir", type: "text" },
            { name: "Locality_Latitude", type: "number" },
            { name: "Locality_Longitude", type: "number" },
            { name: "Locality_Notes", type: "text" },
            { name: "Locality_Ocean", type: "text" },
            { name: "Locality_Precise Location", type: "text" },
            { name: "Locality_River", type: "text" },
            { name: "Locality_SeaGulf", type: "text" },
            { name: "Locality_Stream", type: "text" },
            { name: "Locality_Township", type: "text" },
            { name: "Locality_Verbatim", type: "text" },
            { name: "Location_Collected Day from", type: "-" },
            { name: "Location_Collected Day to", type: "-" },
            { name: "Location_Collected Month from", type: "-" },
            { name: "Location_Collected Monthto", type: "-" },
            { name: "Location_Collected Year from", type: "-" },
            { name: "Location_Collected Year to", type: "-" },
            { name: "Location_CollectedDate from", type: "date" },
            { name: "Location_CollectedDate to", type: "date" },
            { name: "Location_Collection", type: "text" },
            { name: "Location_Depth end (m)", type: "number" },
            { name: "Location_Depth start (m)", type: "number" },
            { name: "Location_Elevation from (m)", type: "number" },
            { name: "Location_Elevation to (m)", type: "number" },
            { name: "Location_Elevation verbatim", type: "text" },
            { name: "Tax_Group (yellow - fill in)", type: "text" },
            { name: "TaxName_Family", type: "text" },
            { name: "TaxName_Genus", type: "text" },
            { name: "TaxName_Order", type: "text" },
            { name: "TaxName_Species", type: "text" },
            { name: "TaxName_Subspecies", type: "text" },
            { name: "Taxonomy_Number of Specimens", type: "text" },
            { name: "Tracking Number", type: "number" },
            { name: "Tracking_CatNumber", type: "number" },
            { name: "Tracking_CatPrefix", type: "text" },
            { name: "Tracking_CatSuffix", type: "text" },


            { type: "control" }


        ]
    });

});