import { Component, Input } from '@angular/core';
import { IGame } from 'src/app/types/game';

@Component({
	selector: 'ps-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent {
	@Input() public game: IGame | undefined;
	@Input() public emphasis: string = '';
}
