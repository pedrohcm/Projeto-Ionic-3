import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
 //  tab4Root = ContactPage;
	//  tab5Root = ContactPage;
  constructor() {

  }

  //colocar metodos para retornar os usernames
}
