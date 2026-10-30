import { Component } from '@angular/core';
import { Goods } from '../Class/Goods';
import { Markers } from '../Class/Markers';

@Component({
  imports: [],
  selector: 'app-goods-component',
  styleUrl: './goods-component.css',
  templateUrl: './goods-component.html',
})
export class GoodsComponent {
  goods_show: string = '';
  markers_show: string = '';

  calcGoods(
    amount1_str: string,
    price1_str: string,
    amount2_str: string,
    price2_str: string,
    name2: string,
    s2_str: string,
  ) {
    this.goods_show = '';
    this.markers_show = '';

    let hasError = false;

    if (!amount1_str || !price1_str) {
      this.goods_show = 'Помилка: Заповніть поля Товару!';
      hasError = true;
    } else {
      let amount1 = Number(amount1_str);
      let price1 = Number(price1_str);

      if (isNaN(amount1) || isNaN(price1)) {
        this.goods_show = 'Помилка: Некоректні дані у Товарі!';
        hasError = true;
      } else if (!Number.isInteger(amount1)) {
        this.goods_show = 'Помилка: Кількість має бути цілою!';
        hasError = true;
      } else if (amount1 < 0 || price1 < 0) {
        this.goods_show = 'Помилка: Значення не можуть бути від’ємними!';
        hasError = true;
      } else {
        let goods = new Goods(amount1, price1);
        this.goods_show = 'Загальна вартість товару = ' + goods.getCost().toFixed(2) + ' грн';
      }
    }

    if (!amount2_str || !price2_str || !name2.trim() || !s2_str) {
      this.markers_show = 'Помилка: Заповніть поля Фломастерів!';
      hasError = true;
    } else {
      let amount2 = Number(amount2_str);
      let price2 = Number(price2_str);
      let s2 = Number(s2_str);

      if (isNaN(amount2) || isNaN(price2) || isNaN(s2)) {
        this.markers_show = 'Помилка: Некоректні дані у Фломастерах!';
        hasError = true;
      } else if (!Number.isInteger(amount2)) {
        this.markers_show = 'Помилка: Кількість має бути цілою!';
        hasError = true;
      } else if (!Number.isInteger(s2)) {
        this.markers_show = 'Помилка: Сорт (s) має бути цілим!';
        hasError = true;
      } else if (amount2 < 0 || price2 < 0) {
        this.markers_show = 'Помилка: Значення не можуть бути від’ємними!';
        hasError = true;
      } else if (s2 < 1) {
        this.markers_show = 'Помилка: Сорт (s) повинен бути не менше 1!';
        hasError = true;
      } else {
        let markers = new Markers(amount2, price2, name2.trim(), s2);
        this.markers_show =
          'Назва: ' +
          markers.name +
          ' | Вартість з урахуванням сорту = ' +
          markers.getCost().toFixed(2) +
          ' грн';
      }
    }
  }
}