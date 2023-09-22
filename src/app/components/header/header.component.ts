import { Component } from '@angular/core';

@Component({
	selector: 'ps-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	templateName: string = '';

	public openSubMenu(name: string) {
		if (this.templateName == name) this.templateName = '';
		else this.templateName = name;
	}
}
