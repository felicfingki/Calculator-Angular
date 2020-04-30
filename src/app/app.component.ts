import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

perhitungan = ''; 
hasil = ''; 
angka1: number;
angka2: number; 
operator = ''; 
calculationString = ''; 
booloperator;
press(isi: string) {
   if (isi === '/' || isi === 'x' || isi === '-' || isi === '+') {
      const lastKey = this.hasil[this.hasil.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+')  {
        this.booloperator = true;
      }
      if ((this.booloperator) || (this.hasil === '')) {
        return;
      }
      this.angka1 = parseFloat(this.hasil);
      this.operator = isi;
      this.booloperator = true;
   }
   if (this.hasil.length === 10) {
     return;
   }
   this.hasil += isi;
}
samadengan() {
    this.calculationString = this.hasil;
    this.angka2 = parseFloat(this.hasil.split(this.operator)[1]);
    if (this.operator === '/') {
      this.perhitungan = this.hasil;
      this.hasil = (this.angka1 / this.angka2).toString();
      this.perhitungan = this.calculationString;
      if (this.hasil.length > 9) {
        this.hasil = this.hasil.substr(0, 9);
      }
    } else if (this.operator === 'x') {
      this.perhitungan = this.hasil;
      this.hasil = (this.angka1 * this.angka2).toString();
      this.perhitungan = this.calculationString;
      if (this.hasil.length > 9) {
        this.hasil = 'ERROR';
        this.perhitungan = 'Range Exceeded';
      }
    } else if (this.operator === '-') {
      this.perhitungan = this.hasil;
      this.hasil = (this.angka1 - this.angka2).toString();
      this.perhitungan = this.calculationString;
    } else if (this.operator === '+') {
      this.perhitungan = this.hasil;
      this.hasil = (this.angka1 + this.angka2).toString();
      this.perhitungan = this.calculationString;
      if (this.hasil.length > 9) {
        this.hasil = 'ERROR';
        this.perhitungan = 'Range Exceeded';
      }
    } else {
      this.perhitungan = 'ERROR: Invalid Operation';
    }

}
}