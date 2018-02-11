

// console.log("Hello")

// AUTOCOMPLETE SAMPLE!!
// var input = document.getElementById('input');
// var autocomplete;
// function initialize() {
//   // autocomplete = new google.maps.places.Autocomplete(document.getElementById('input'),{ types: ['(cities)'] });
//   autocomplete = new google.maps.places.Autocomplete(document.getElementById('input'),{  });
//   google.maps.event.addListener(autocomplete, 'place_changed', function() {
//     var address_components=autocomplete.getPlace().address_components;
//     var city='';
//     var country='';
//     for(var j =0 ;j<address_components.length;j++){
//       console.log(address_components[j]);
//        city =address_components[0].long_name;
//        if(address_components[j].types[0]=='country'){
//           country=address_components[j].long_name;
//         }
//     }
//     document.getElementById('data').innerHTML="City Name : <b>" + city + "</b> <br/>Country Name : <b>" + country + "</b>";
//   })
// }
// window.onload = initialize();


// *********************** //
// **  LOCATION FIELD  ** //
// ********************* //
var MyLocationField = function(config) {
    jsGrid.Field.call(this, config);
};

MyLocationField.prototype = new jsGrid.Field({

    css: "date-field",            // redefine general property 'css'
    address_components: "",    // TODO: If one of these, show only that type: https://developers.google.com/places/supported_types

    sorter: function(loc1, loc2) {
        return loc1 < loc2;
    },

    itemTemplate: function(value) {
      console.log(this._insertPicker[0].value, value);
      let x = localStorage.getItem(value);

      return value;
    },

    insertTemplate: function(value) {
      this._insertPicker = $("<input>");
      var autocomplete = new google.maps.places.Autocomplete(this._insertPicker[0]);
      google.maps.event.addListener(autocomplete, 'place_changed', function() {
        let addressMetta = {};
        addressMetta.types = autocomplete.getPlace().address_components;
        addressMetta.lat = autocomplete.getPlace().geometry.location.lat();
        addressMetta.lng = autocomplete.getPlace().geometry.location.lng();
        console.log(autocomplete.getPlace(), addressMetta);
        sessionStorage.setItem(autocomplete.getPlace().formatted_address,JSON.stringify(addressMetta));
      });
      return this._insertPicker;
    },

    editTemplate: function(value) {
      this._insertPicker = $("<input>");
      var autocomplete = new google.maps.places.Autocomplete(this._insertPicker[0]);
      google.maps.event.addListener(autocomplete, 'place_changed', function() {
        let addressMetta = {};
        addressMetta.types = autocomplete.getPlace().address_components;
        addressMetta.lat = autocomplete.getPlace().geometry.location.lat();
        addressMetta.lng = autocomplete.getPlace().geometry.location.lng();
        console.log(autocomplete.getPlace(), addressMetta);
        sessionStorage.setItem(autocomplete.getPlace().formatted_address,JSON.stringify(addressMetta));
      });
      return this._insertPicker;
    },

    insertValue: function() {
        return this._insertPicker[0].value;
    },

    editValue: function() {
        return this._insertPicker[0].value;
    }
});

jsGrid.fields.location = MyLocationField;

// ******************* //
// **  DATE FIELD  ** //
// ******************* //
var MyDateField = function(config) {
    jsGrid.Field.call(this, config);
};

MyDateField.prototype = new jsGrid.Field({

    css: "date-field",            // redefine general property 'css'
    align: "center",              // redefine general property 'align'

    myCustomProperty: "foo",      // custom property

    sorter: function(date1, date2) {
        return new Date(date1) - new Date(date2);
    },

    itemTemplate: function(value) {
//       var moment = require('moment');
// moment().format();
      // console.log(value, moment(value, "YYYY-MMMM-D"));

        return new Date(value).toDateString();
    },

    insertTemplate: function(value) {
        return this._insertPicker = $("<input>").datepicker({ defaultDate: new Date() });
    },

    editTemplate: function(value) {
        return this._editPicker = $("<input>").datepicker().datepicker("setDate", new Date(value));
    },

    insertValue: function() {
        return this._insertPicker.datepicker("getDate").toISOString();
    },

    editValue: function() {
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


    // SAMPLE USE!!
    //
    //     $("#jsGrid").jsGrid({
    //         fields: [
    //           { name: "Location", type: "location", myCustomProperty: "bar" },
    //           { name: "Date", type: "date" },
    //         ]
    //     });
