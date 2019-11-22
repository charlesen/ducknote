import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// On importer le router + module de stockage
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root', // Il ne vous dit rien ce tag html (selecteur) ?
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Notes',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Rappels',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Profil',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Composants',
      url: '/composants',
      icon: 'apps'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // Bouton de déconnexion : suppression du statut de connexion + redirection vers la page de login
  logout() {
    this.storage.remove('userAuthenticated');
    this.router.navigate(['/login']);
  }
}
