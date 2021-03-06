import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';

import { PlaylistsComponent } from './playlists/playlists.component';

import { PlaylistService } from '../../../../services/playlist.service';

@Component({
	moduleId: module.id,
	selector: 'mu-playlist-data',
	templateUrl: 'playlist-data.component.html',
	directives: [PlaylistsComponent, MD_TABS_DIRECTIVES],
	providers: [PlaylistService]
})

export class PlaylistDataComponent {
	dataLoaded: boolean = true;
	private selectedIndex;

	private tabs = [
		{
			label: 'Tab 0'
		},
		{
			label: 'Tab 1'
		},
		{
			label: 'Favourites'
		}
	];

	constructor(public playlistService: PlaylistService) {
			this.selectedIndex = 0;
		}

	ngOnInit() {
		// this.playlistService.getPlaylists();
	}

	handleSelection(event) {
		// console.log(this.selectedIndex);
	}

}
