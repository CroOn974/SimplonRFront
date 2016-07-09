
(function() {


    
    
    var app = angular.module('simplonR', [ ]).config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    });
    
     
    
    
    app.controller('ApprenantsController', ['$http', function($http){

        var store = this;
        store.products = [ ];

        
        $http.get('http://127.0.0.1:8000/applicant/applicant.json').success(function(data){

            store.products = data;

        });
        
        
        
        
        store.del = function(id){
            var index = getSelectedIndex(id);
            
            store.products.splice(index,1);
            
            
        };
        
        
        store.add = function(){
         store.date = new Date();
          store.products.push({
              surname:store.surname, firstname:store.firstname, birth_date:store.birth_date,birth_place:store.birth_place,email:store.email,codecademy_profile:store.codecademy_profile,creation_date:store.date
              
          });
            store.surname = '';
            store.firstname = '';
            store.birth_place = '';
            store.email = '';
            store.codecademy_profile = '';
            store.birth_date = '';
            
        };
        
//        store.selectEdit = function(id){
//             var index = getSelectedIndex(id);
//            var product ='';
//            
//        };
        
     
        
        
        function getSelectedIndex(id){
          for(var i=0; i<store.products.length;i++)
              if(store.products[i].id == id)
                  return i;
          return -1; 
            
        };


    }]);
    
   



})();




