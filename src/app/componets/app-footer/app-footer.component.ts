import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {

  @Input()
  isMainPageVisible!: boolean;

  @Input()
  isAboutUsPageVisible!: boolean;

  @Input()
  isContactPageVisible!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
