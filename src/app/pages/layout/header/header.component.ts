import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseMobileCheckComponent } from 'src/app/shared/components/mobile-check/mobile-check.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends BaseMobileCheckComponent implements OnInit, OnDestroy {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.initWindowResizeListener();
  }

  ngOnDestroy(): void {
    this.removeWindowResizeListener();
  }
}
