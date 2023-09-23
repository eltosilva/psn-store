import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../components/shared/shared.module';

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, SharedModule],
	exports: [],
})
export class PagesModule {}
