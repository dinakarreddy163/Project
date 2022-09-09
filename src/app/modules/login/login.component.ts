import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm: any;
  password?: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  submit() {
    if (this.loginForm.value.password == this.password) {
      this.router.navigate(['home']);
    } else {
      alert("In Valid Password");
    }
  }
  generatePwd() {
    this.password = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
      'abcdefghijklmnopqrstuvwxyz0123456789@#$+=';
    for (let i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random()
        * str.length + 1);
      this.password += str.charAt(char)
    }
  }
}
