var serviceModule = angular.module('listingData', []);

serviceModule.service('listingData', function(){
    var self = this;

    self.listingArray = [
        {id:1, name: 'White House', source: "./images/whitehouse.jpg", desc: "A home fit for a president", address: "1600 Pennsylvania Avenue NW, Washington, DC 20500", price: 1000000},
        {id:2, name: 'Kremlin', source: "./images/kremlin.jpg", desc: "A home fit for a president", address: "Vozdvizhenka St., 1 Moscow Kremlin, Moscow 103132 Russia", price: 1000000},
        {id:3, name: 'Buckingham Palace', source: "./images/buckingham-palace.jpg", desc: "A home fit for a king", address: "Buckingham Palace, London SW1A 1AA", price: 1000000},
        {id:4, name: 'Taj Mahal', source: "./images/taj-mahal.jpg", desc: "A home fit for an emperor", address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001 ", price: 1000000},
        {id:5, name: 'Palace of Versailles', source: "./images/versailles.jpg", desc: "A home fit for a king", address: "Palace of Versailles, Versailles, FR 78000", price: 1000000},
        {id:6, name: 'Pyramid of Giza', source: "./images/giza.jpg", desc: "A home fit for a pharoah", address: "Sahara Desert", price: 1000000},
        {id:7, name: 'Cinderella Castle', source: "./images/cinderella-castle.jpg", desc: "A home fit for a Disney princess", address: "World Drive, Orlando, FL 32830", price: 1000000},
        {id:8, name: 'Winter Palace', source: "./images/winter-palace.jpg", desc: "A home fit for a tsar", address: "Дворцовая наб., 30, Санкт-Петербург, RU 191186", price: 1000000},
        {id:9, name: 'Forbidden City', source: "./images/forbidden-city.jpg", desc: "A home fit for an emperor", address: "Forbidden City", price: 1000000},
        {id:10, name: 'Tokyo Imperial Palace', source: "./images/tokyo-imperial-palace.jpg", desc: "A home fit for an emperor", address: "千代田 1-1, 千代田区, JP 100-8111", price: 1000000},

    ];
});