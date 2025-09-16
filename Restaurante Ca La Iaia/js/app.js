var app = angular.module('miTienda', []);

app.controller('MainController', ['$scope', function($scope)
{
    $scope.titulo = "Ca la Iaia";
    $scope.subtitulo = "Como lo hacía tu yaya";
    $scope.productos = 
    [
        {
            nombre: "Croquetas de Pollo",
            imagen: "../img/croquetas.jpg",
            precio: 8.95,
            likes: 0
        },
        {
            nombre: "Lasaña Boloñesa",
            imagen: "../img/lasaña.jpg",
            precio: 11.99,
            likes: 0
        },
        {
            nombre: "Ravioli de la Yaya",
            imagen: "../img/ravioli.jpg",
            precio: 13.75,
            likes: 0
        },
        {
            nombre: "Salmón a la Plancha",
            imagen: "../img/salmon.jpg",
            precio: 15,
            likes: 0
        },
        {
            nombre: "Ensalada con Queso",
            imagen: "../img/ensalada.jpg",
            precio: 12.75,
            likes: 0
        },
        {
            nombre: "Flan de Huevo",
            imagen: "../img/flan.jpg",
            precio: 5,
            likes: 0
        },
        {
            nombre: "Tarta de Naranja",
            imagen: "../img/tarta.jpg",
            precio: 6.25,
            likes: 0
        },
        {
            nombre: "Café",
            imagen: "../img/coffee.jpg",
            precio: 1.20,
            likes: 0
        },
        {
            nombre: "Capuccino",
            imagen: "../img/capuccino.jpg",
            precio: 2.1,
            likes: 0
        }
    ]
}]);