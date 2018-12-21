import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
             <p *ngIf="heroes.length > 3">There are many heroes!</p>
             <ul>
                <li *ngFor="let hero of heroes">
                    <span>My favorite hero is: {{hero.name}}</span>
                </li>
            </ul>`
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [new Hero(1, 'Windstorm'), new Hero(1, 'Bombasto'), new Hero(1, 'Magneta'), new Hero(1, 'Tornado')];
  myHero = this.heroes[0];
}
