// import {Injectable} from '@angular/core';
// import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
// import {Recipe} from './recipe.model';
// import {DataStorageService} from '../shared/data-storage.service';
// import {Observable} from 'rxjs';
//
// @Injectable({providedIn: 'root'})
// export class RecipeResolverService implements Resolve<Recipe[]> {
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
//     return this.dataStorageService.fetchRecipes()[0];
//   }
//
//   constructor(private dataStorageService: DataStorageService) {
//   }
//
// }
