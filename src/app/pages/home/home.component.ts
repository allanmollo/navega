import { CurrencyPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import data from './data/data.json'
import { SideMenuComponent } from '../layout/side-menu/side-menu.component';
import { BaseMobileCheckComponent } from 'src/app/shared/components/mobile-check/mobile-check.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AccordionModule, ButtonModule, ChartModule, CurrencyPipe, SideMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BaseMobileCheckComponent implements OnInit, OnDestroy {

  data: any;
  options: any;

  constructor(){
    super();
  }

  ngOnInit(): void {
    this.initWindowResizeListener();
    this.data = data;

    this.options = {
      cutout: '70%',
      responsive: false,
      maintainAspectRatio: false
    };
  }

  ngOnDestroy(): void {
    this.removeWindowResizeListener();
  }

}
