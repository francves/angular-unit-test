import {Injectable} from "@angular/core";
@Injectable()
export class PlacesService{
	places = [
		{id: 1, name: 'Catedral de Barquisimeto'},
		{id: 2, name: 'Pizzería Milan'}
	];
	getPlaces(){
		return this.places;
	}
}
