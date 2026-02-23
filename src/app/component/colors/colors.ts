import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colors',
  imports: [FormsModule, CommonModule],
  templateUrl: './colors.html',
  styleUrl: './colors.scss'
})
export class Colors {
  myColor: string = ""
  newArr: string[] = ["black", "red", ""]
  lastsArr: string[] = ["", "", ""];
  isTheArrFull: boolean = false;
  count: number = 0;
  //1. להגדיר מערך בגודל 3😂
  //2. לבדוק שהצבע הנוכחי לא קיים במערך
  //3. אם קיים - הודעה
  //4. אחרת לכניס למערך
  ///כשהמערך מתמלא -
  //לדאוד להוציא את הותיק

  saveColor() {

    for (let index = 0; index < this.lastsArr.length; index++) {
      if (this.lastsArr[index] == this.myColor) {
        this.count++
      }

    }
    if (this.count != 0) {
      this.isTheArrFull = true;
    }
      
    else {
      this.isTheArrFull = false;
      for (let index = 0; index < this.lastsArr.length; index++) {
        this.lastsArr[index] = this.lastsArr[index + 1];
      }

      this.lastsArr[this.lastsArr.length - 1] = this.myColor

    } console.log(this.lastsArr);
    this.count = 0
  }



}