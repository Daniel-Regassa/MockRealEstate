angular
    .module('property')
    .component('property', {
        templateUrl: '/property/property.template.html',
        controller: ['$location', 'listingData', '$http', function propertyController($location, listingData, $http){

            var self = this;    
            // maybe a vulnerability, unsure
            // reads anything in url after .../property/
            self.idIndex = $location.$$path.lastIndexOf("/") + 1;
            self.id = Number($location.$$path.slice(self.idIndex));
            self.id = Math.floor(self.id);


            // check if id is NaN
            if (!self.id){
                console.log(self.id);
                window.location.replace("#!/error");
            }

            if (self.id > listingData.listingArray.length || self.id < 1){
                window.location.replace("#!/error");
            }

            console.log(self.id);

            self.listing = listingData.listingArray[self.id - 1];
            self.address = this.listing.address;

            self.weather

            $http({
                method: 'GET',
                url: 'https://api.weatherapi.com/v1/forecast.json?key=279a7911efb748e79f6235301241801&q=' + self.address
                }).then(function successCallback(response){
                    self.weather = response.data.forecast.forecastday[0].day;
                    console.log(self.weather);
                    }, function errorCallback(response){
                        }
            );

            
        }]
    });