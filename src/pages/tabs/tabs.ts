import { AddAlimentoPage } from './../add-alimento/add-alimento';
import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  

  tab1Root = HomePage;
  tab2Root = AddAlimentoPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
