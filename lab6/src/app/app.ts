import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header} from './header/header';
import { GoodsComponent } from './goods-component/goods-component';

@Component({
  imports: [RouterOutlet, Header, GoodsComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title='lab6';
}
