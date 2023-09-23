import { Component } from '@angular/core';
import { IGame } from 'src/app/types/game';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	games: IGame[] = [
		{
			image: 'assets/bt-1.jpg',
			price: 129.99,
			players: ['DISC', 'PS5'],
			title: 'Battleship',
		},
		{
			image: 'assets/bt-4.jpg',
			price: 115.99,
			players: ['PS4', 'PS5'],
			title: 'AAA',
		},
		{
			image: 'assets/bt-5.jpg',
			price: 99.99,
			players: ['DISC', 'PS4'],
			title: 'BBB',
		},
		{
			image: 'assets/bt-bad-company-2.jpg',
			price: 119.99,
			players: ['PS5'],
			title: 'CCC',
		},
	];
}
