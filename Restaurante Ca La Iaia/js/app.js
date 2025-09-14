var app = angular.module('miTienda', []);

app.controller('MainController', ['$scope', function($scope)
{
    $scope.title = "Ca la Iaia";
    $scope.subtitle = "Como lo hacía tu yaya";
    $scope.products = 
    [
        {
            name: "Croquetas de Pollo",
            image: "../img/croquetas.jpg",
            price: 8.95,
            likes: 0
        },
        {
            name: "Lasaña Boloñesa",
            image: "../img/lasaña.jpg",
            price: 11.99,
            likes: 0
        },
        {
            name: "Ravioli de la Yaya",
            image: "../img/ravioli.jpg",
            price: 13.75,
            likes: 0
        },
        {
            name: "Salmón a la Plancha",
            image: "../img/salmon.jpg",
            price: 15,
            likes: 0
        },
        {
            name: "Ensalada con Queso",
            image: "../img/ensalada.jpg",
            price: 12.75,
            likes: 0
        },
        {
            name: "Flan de Huevo",
            image: "../img/flan.jpg",
            price: 5,
            likes: 0
        },
        {
            name: "Tarta de Naranja",
            image: "../img/tarta.jpg",
            price: 6.25,
            likes: 0
        },
        {
            name: "Café",
            image: "../img/coffee.jpg",
            price: 1.20,
            likes: 0
        },
        {
            name: "Capuccino",
            image: "../img/capuccino.jpg",
            price: 2.1,
            likes: 0
        }
    ]
}]);