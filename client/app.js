var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
	$routeProvider.when('/dash', {
		controller: 'DashController',
		templateUrl: 'views/dash.html'
	})
		.when('/books', {
			controller: 'BooksController',
			templateUrl: 'views/books.html'
		})
		.when('/auth', {
			controller: 'AuthController',
			templateUrl: 'views/auth.html'
		})
		.when('/dash', {
			controller: 'DashController',
			templateUrl: 'views/dash.html'
		})
		.when('/newuser', {
			controller: 'NewUController',
			templateUrl: 'views/new_user.html'
		})
		.when('/books/details/:id', {
			controller: 'BooksController',
			templateUrl: 'views/books_details.html'
		})
		.when('/books/add', {
			controller: 'BooksController',
			templateUrl: 'views/add_book.html'
		})
		.when('/books/edit/:id', {
			controller: 'BooksController',
			templateUrl: 'views/edit_book.html'
		})
		.when('/drugs', {
			controller: 'DrugsController',
			templateUrl: 'views/drugs_home.html'
		})

		.when('/prescriptions', {
			controller: 'PrescriptionsController',
			templateUrl: 'views/viewprescription.html'
		})
		.when('/forget', {
			controller: 'ForgetController',
			templateUrl: 'views/forget.html'
		})

		.otherwise({
			redirectTo: '/dash'
		})
})