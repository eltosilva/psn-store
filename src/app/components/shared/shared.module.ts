import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { UtilsModule } from 'src/app/utils/utils.module';

@NgModule({
	declarations: [CardComponent],
	exports: [CardComponent],
	imports: [CommonModule, UtilsModule],
})
export class SharedModule {}
