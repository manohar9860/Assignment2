import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './favorites.html',
})
export class FavoritesComponent  {

  public country = [
        { "id":1, "name":"India", "language":"Hindi", "path":"assets/images/ind.jpg" },
        { "id":2, "name":"Shrilanka", "language":"Hindi", "path":"assets/images/sri.jpg" },
        { "id":3, "name":"Austrelia", "language":"Hindi", "path":"assets/images/aus.jpg" },
        { "id":4, "name":"China", "language":"Hindi", "path":"assets/images/china.jpg" },
        { "id":5, "name":"Pakistan", "language":"Hindi", "path":"assets/images/pak.jpg" },
        { "id":6, "name":"Nepal", "language":"Hindi", "path":"assets/images/nep.jpg" }
    ] ;

  constructor(private router: Router) { 
  }

  gotoCountry() : void {
  	this.router.navigateByUrl('/next');
  }
}