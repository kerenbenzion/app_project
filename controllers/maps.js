const Branch = require("../models/Branch")

function showmaps(req,res){
    res.render('../views/maps');
}

function getbranches(req, res) {
    Branch.find().then(results => {
        res.json(results)
    });
}

// function GetMap() {
//     window.createMap = ()=> new Microsoft.Maps.Map("#myMap", {zoom: 7})
//     // Create an instance of the search manager and re-enter function
//     window.createSearchManager = (map,cb) =>
//     {
//         Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
//             window.searchManager = new Microsoft.Maps.Search.SearchManager(map);
//             cb();
//         });}
//     window.addRoomToMap = addRoomToMap;
//
//     // addRoomToMap('omer', 'תל אביב');
// }
//
// function addRoomToMap(req, res) {
//     var address = req.body.address
//     var address = req.body.address
//     findLocationByAddress(address, map, function (location) {
//         var roomLocation = location;
//         var roomPoint = new Microsoft.Maps.Pushpin(roomLocation);
//         //map.setView({ bounds: result.bestView })
//         var infobox = new Microsoft.Maps.Infobox(roomLocation, {
//             title: name,
//             description: address,
//             visible: false
//         });
//         infobox.setMap(map);
//         Microsoft.Maps.Events.addHandler(roomPoint, 'click', function () {
//             infobox.setOptions({visible: true});
//         });
//         map.entities.push(roomPoint);
//     });
// }
// function findLocationByAddress(address, map, foo) {
//     if (!window.searchManager) {
//         window.createSearchManager(map, ()=>{
//             findLocationByAddress(address, map, foo)
//         })
//     } else {
//         // If search manager is not defined, load the search module
//         var searchRequest = {
//             where: address,
//             callback: function (r) {
//                 foo(r.results[0].location);
//             },
//             errorCallback: function (e) {
//                 // If there is an error
//                 console.log("No results found for this address: " + address);
//             }
//         };
//         // Make the geocode request
//         window.searchManager.geocode(searchRequest);
//     }
// }
module.exports={
    showmaps,
    getbranches
    // GetMap,
    // findLocationByAddress,
    // addRoomToMap
}