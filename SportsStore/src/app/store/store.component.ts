import { ProductRepository } from './../model/product-repository';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product-model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html'
})
export class StoreComponent implements OnInit {
  public selectedCategory = null;

  constructor(private repository: ProductRepository) { }

  get products(): Product[] {
      return this.repository.getProducts(this.selectedCategory);
  }

  get categories(): string[] {
      return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
      this.selectedCategory = newCategory;
  }

  ngOnInit(): void {}
}
