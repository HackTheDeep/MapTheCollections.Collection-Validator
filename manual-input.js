console.log("Hello Human...")﻿

$(document).ready(function () {

        var MyLocationField = function (config) {
            jsGrid.Field.call(this, config);
        };

        MyLocationField.prototype = new jsGrid.Field({
    
            css: "date-field",            // redefine general property 'css'
            address_components: "",    // TODO: If one of these, show only that type: https://developers.google.com/places/supported_types
    
            sorter: function (loc1, loc2) {
                return loc1 < loc2;
            },
    
            itemTemplate: function (value) {
                console.log(this._insertPicker[0].value, value);
                let x = localStorage.getItem(value);
    
                return value;
            },
    
            insertTemplate: function (value) {
                this._insertPicker = $("<input>");
                var autocomplete = new google.maps.places.Autocomplete(this._insertPicker[0]);
                google.maps.event.addListener(autocomplete, 'place_changed', function () {
                    let addressMetta = {};
                    addressMetta.types = autocomplete.getPlace().address_components;
                    addressMetta.lat = autocomplete.getPlace().geometry.location.lat();
                    addressMetta.lng = autocomplete.getPlace().geometry.location.lng();
                    console.log(autocomplete.getPlace(), addressMetta);
                    sessionStorage.setItem(autocomplete.getPlace().formatted_address, JSON.stringify(addressMetta));
                });
                return this._insertPicker;
            },
    
            editTemplate: function (value) {
                this._insertPicker = $("<input>");
                var autocomplete = new google.maps.places.Autocomplete(this._insertPicker[0]);
                google.maps.event.addListener(autocomplete, 'place_changed', function () {
                    let addressMetta = {};
                    addressMetta.types = autocomplete.getPlace().address_components;
                    addressMetta.lat = autocomplete.getPlace().geometry.location.lat();
                    addressMetta.lng = autocomplete.getPlace().geometry.location.lng();
                    console.log(autocomplete.getPlace(), addressMetta);
                    sessionStorage.setItem(autocomplete.getPlace().formatted_address, JSON.stringify(addressMetta));
                });
                return this._insertPicker;
            },
    
            insertValue: function () {
                return this._insertPicker[0].value;
            },
    
            editValue: function () {
                return this._insertPicker[0].value;
            }
        });
    
    
        jsGrid.fields.location = MyLocationField;
    
        var MyDateField = function (config) {
            jsGrid.Field.call(this, config);
        };
    
        MyDateField.prototype = new jsGrid.Field({
    
            css: "ui-datepicker",            // redefine general property 'css'
            //align: "center",              // redefine general property 'align'
    
            myCustomProperty: "foo",      // custom property
    
            sorter: function (date1, date2) {
                return new Date(date1) - new Date(date2);
            },
    
            itemTemplate: function (value) {

                return new Date(value).toDateString();
            },
    
            insertTemplate: function (value) {
                return this._insertPicker = $("<input>").datepicker({ defaultDate: new Date() });
            },
    
            editTemplate: function (value) {
                return this._editPicker = $("<input>").datepicker().datepicker("setDate", new Date(value));
            },
    
            insertValue: function () {
                return this._insertPicker.datepicker("getDate").toISOString();
            },
    
            editValue: function () {
                return this._editPicker.datepicker("getDate").toISOString();
            }
        });
    
        jsGrid.fields.date = MyDateField;
    
    
    
        // ************************** //
        // **  CONTINENT DROPDOWN  ** //
        // ************************** //
        var continents = [
            { Name: "Africa", Id: 0 },
            { Name: "Antarctica", Id: 1 },
            { Name: "Asia", Id: 2 },
            { Name: "Europe", Id: 3 },
            { Name: "North America", Id: 4 },
            { Name: "Oceania", Id: 5 },
            { Name: "South America", Id: 6 }
        ];
        
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
            width: "auto",
            height: "auto",
    
    
            inserting: true,
            editing: true,
            sorting: true,
            paging: true,
            pageSize: 100,

            // onItemInserting: function(args) {
                //TODO Ask Chris what fields will be required
                // console.log(args, args.item);
                // if(!args.item.name) {
                //     args.cancel = true;
                //     alert("Specify the name of the item!");
                // }
            // },

            fields: [
                { type: "control", css: "enter-btn" },

                { name: "Locality Continent", type: "select", items: continents, valueField: "Id", textField: "Name" },
                { name: "Locality Country", type: "location" },
                { name: "Locality Dept/ Province/ State", type: "location" },

                { name: "Locality Island", type: "text" },
                { name: "Locality Island/ Group", type: "text" },
                { name: "Locality Lake/ Pond/ Resevoir", type: "location" },
                { name: "Locality Bay/ Sound/ Harbor", type: "location" },

                { name: "Locality Latitude", type: "number" },
                { name: "Locality Longitude", type: "number" },

                { name: "Locality IRN", type: "number" },
                { name: "Locality Notes", type: "text" },

                { name: "Locality Ocean", type: "text" },

                { name: "Locality Precise Location", type: "text" },
                { name: "Locality River", type: "text" },
                { name: "Locality Sea/ Gulf", type: "text" },
                { name: "Locality Stream", type: "text" },
                { name: "Locality Township", type: "text" },
                { name: "Locality Verbatim", type: "text" },
                { name: "Location CollectedDate from", type: "text" },
                { name: "Location CollectedDate to", type: "text" },
                { name: "Location Collection", type: "text" },
                { name: "Location Depth end (m)", type: "number" },
                { name: "Location Depth start (m)", type: "number" },
                { name: "Location Elevation from (m)", type: "number" },
                { name: "Location Elevation to (m)", type: "number" },
                { name: "Location Elevation verbatim", type: "text" },
                { name: "TaxName Family", type: "text" },
                { name: "TaxName Genus", type: "text" },
                { name: "TaxName Order", type: "text" },
                { name: "TaxName Species", type: "text" },
                { name: "TaxName Subspecies", type: "text" },
                { name: "Taxonomy Number of Specimens", type: "text" },
                { name: "Tracking Number", type: "text" },
                { name: "Tracking CatNumber", type: "number" },
                { name: "Tracking CatPrefix", type: "text" },
                { name: "Tracking CatSuffix", type: "text" },

    
            ]
        });
    // Start showing initial item
    //$('#jsGrid').jsGrid("insertItem");


    $('button#add').click(function () {
            $('#jsGrid').jsGrid("insertItem");
        });
    
        $('button#export-csv').click(function (evt) {
            evt.target.disabled = true;

            var data = $("#jsGrid").jsGrid("option", "data");
            var JSONdata = JSON.stringify(data);


            var fileName = "Collections export_" + new Date();

            JSONToCSVConvertor(JSONdata, fileName, true);



            evt.target.disabled = false;

            // TODO: Use exportData instead
            // var csv = $("#grid").jsGrid("exportData");
        });
    
        function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
            var CSV = '';
            //Set Report title in first row or line
    
            CSV += ReportTitle + '\r\n\n';
    
            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";
    
                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {
    
                    //Now convert each value to string and comma-seprated
                    row += index + ',';
                }
    
                row = row.slice(0, -1);
    
                //append Label row with line break
                CSV += row + '\r\n';
            }
    
            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row = "";
    
                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index in arrData[i]) {
                    row += '"' + arrData[i][index] + '",';
                }
    
                row.slice(0, row.length - 1);
    
                //add a line break after each row
                CSV += row + '\r\n';
            }
    
            if (CSV == '') {
                alert("Invalid data");
                return;
            }
    
            //Generate a file name
            var fileName = "MyReport_";
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");
    
            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    
            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    
    
            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;
    
            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:hidden";
            link.download = fileName + ".csv";
    
            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    
    });