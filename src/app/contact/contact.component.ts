import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm!:FormGroup
  submit = false

  constructor(private fb:FormBuilder){

  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.contactForm = this.fb.group({
      name:['', Validators.required],
      message:['', [Validators.required, Validators.minLength(10)]]
    })
  }

  onSubmit(){
    console.log(this.contactForm)
    if (this.contactForm.valid){
      this.submit = true
    }
  }
}
