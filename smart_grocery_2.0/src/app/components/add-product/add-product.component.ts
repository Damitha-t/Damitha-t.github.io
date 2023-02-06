import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor (private fb: FormBuilder) {}

  productForm = this.fb.group({
    productName : ['', Validators.required],
    description : ['', Validators.required],
    category : ['', Validators.required],
    brand : ['', Validators.required],
    expireDate : ['', Validators.required],
    manufactureDate : ['', Validators.required],
    batchNumber : ['', Validators.required],
    unitPrice : ['', Validators.required],
    quantity : ['', Validators.required],
    createdDate : ['', Validators.required],
  });

  ngOnInit() : void {
    alert("ngOnInit called");
    console.log("triggered ngOnInit");
  }

  onSubmit() {}

  ngDoCheck() {
    console.log("Triggered ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("Triggered ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("Triggered ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("Triggered ngAfterContentChecked");
  }

  ngAfterViewChecked() {
    console.log("Triggered ngAfterViewChecked");
  }

  ngOnDestroy() {
    alert("ngDestroy called")
    console.log("Triggered ngOnDestroy");
  }


}
