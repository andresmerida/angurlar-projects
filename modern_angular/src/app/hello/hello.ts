import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Title from component';
  protected isDisabled = false;

  protected onClick() {
    this.isDisabled = !this.isDisabled;
  }

  protected count = signal(0);
  protected doubleCount = computed(() => this.count() * 2);
  private readonly countLog = effect(() => console.log('Count changed:',this.count()));

  protected increment() {
    this.count.update(n => n + 1);
  }
  protected decrement() {
    this.count.update(n => n - 1);
  }
  protected reset() {
    this.count.set(0);
  }
}
