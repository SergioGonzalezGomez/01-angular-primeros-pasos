import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

// los get son como propiedades. Si haces this. las propiedades salen en azul y los métodos en morado
  get caspitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'spiderman';
  }

  changeAge(age: number): void {
    this.age = age;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
