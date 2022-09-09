import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit, OnChanges {
  @Input() userName: any;
  hi!: string;
  constructor() { }

  ngOnInit(): void {
    alert("hi");
    setTimeout(() => {
      // this.hi="hii"
    }, 2000);

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
