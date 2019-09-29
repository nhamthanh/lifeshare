import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  public users: Observable<any[]>;
  constructor(db: AngularFirestore) {
      this.users = db.collection('users').valueChanges();
  }

  ngOnInit() {
  }

}
