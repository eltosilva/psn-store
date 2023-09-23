import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@NgModule({
	declarations: [HeaderComponent, MenuComponent],
	exports: [HeaderComponent],
	imports: [CommonModule, RouterModule],
})
export class HeaderModule {}
