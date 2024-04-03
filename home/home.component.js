angular
    .module('home')
    .component('home', {
        templateUrl: '/home/home.template.html',
        controller: ['listingData', function homeController(listingData){
            // this.listingArray = [
            //     {id:1, name: 'White House', source: "images/whitehouse.jpg", desc: "A home fit for a president", address: "1600 Pennsylvania Avenue NW, Washington, DC 20500", price: 1000000},
            //     {id:2, name: 'Kremlin', source: "images/kremlin.jpg", desc: "A home fit for a president", address: "Vozdvizhenka St., 1 Moscow Kremlin, Moscow 103132 Russia", price: 1000000},
            //     {id:3, name: 'Buckingham Palace', source: "images/buckingham-palace.jpg", desc: "A home fit for a king", address: "Buckingham Palace, London SW1A 1AA", price: 1000000}

            // ];

            this.listingArray = listingData.listingArray;
        }]
    });