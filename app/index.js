import angular from 'angular';
import css from 'bootstrap/dist/css/bootstrap.css';
import RouteModule from 'angular-route'
import { PageComponent } from './page.component';


angular.module('app',[
	RouteModule
/*	Countdown,
	GravatarModule,
	GameModule*/
])
.component('sgpMain', PageComponent)
.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true)

	$routeProvider

	.when('/', {
		template: '<sgp-main></sgp-main>'
	})
    .otherwise({
    	redirectTo: '/'
    })
});