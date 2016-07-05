import { Component, Input } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
	moduleId: module.id,
	selector: 'mu-reddit-post',
	templateUrl: 'post.component.html',
	directives: [MD_CARD_DIRECTIVES]
})
export class PostComponent {
	@Input() post;


	constructor() {}

	 ngOnInit() {
		 var date = new Date(this.post.created * 1000);
		 this.post.created = date.getHours();
	 }

}