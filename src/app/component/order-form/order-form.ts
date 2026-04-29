// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// @Component({
//   selector: 'app-order-form',
//   templateUrl: './order-form.html',
//   styleUrls: ['./order-form.scss']
// })
// export class orderForm {
//   orderForm: FormGroup;
//   depositAmount: number = 500;

//   constructor(private fb: FormBuilder) {
//     this.orderForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       simulationType: ['interior', Validators.required],
//       buildingSize: ['', Validators.required],
//       buildingUse: ['', Validators.required],
//       currentDate: [new Date().toISOString().substring(0, 10), Validators.required],
//       targetDate: ['', Validators.required]
//     });

//     this.orderForm.get('simulationType')?.valueChanges.subscribe(value => {
//       this.depositAmount = value === 'interior' ? 500 : 700;
//     });
//   }

//   onSubmit() {
//     if (this.orderForm.valid) {
//       const formData = {
//         ...this.orderForm.value,
//         depositAmount: this.depositAmount
//       };
//       console.log('Form submitted:', formData);
//     }
//   }
// }
