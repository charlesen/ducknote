import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public notesService: NotesService,
    private alertCtrl: AlertController,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.notesService.load();
  }

  addNote() {
    this.alertCtrl.create({
      header: 'Nouvelle note',
      inputs: [
        {
          type: 'text',
          name: 'title',
          placeholder: 'Intitulé de la note...'
        },
        {
          type: 'text',
          name: 'content',
          id: 'note-content',
          placeholder: 'Saisissez votre texte ici...'
        }
      ],
      buttons: [
        {
          text: 'Annuler'
        },
        {
          text: 'Ajouter',
          handler: (data) => {
            this.notesService.createNote(data.title, data.content);
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

}
