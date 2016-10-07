import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { StorageService } from './storage.service';

declare var $:any;
declare var gapi:any;

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  // moduleId: module.id,
  selector: 'about',
  templateUrl: './views/contacts.component.html'
  // providers: [StorageService]
})

export class ContactsComponent implements OnInit {
  allContacts=[];
  selectContact={};
  //resp=null;
  constructor(private storageService: StorageService) {
    this.googleScript();
    console.log();
    this.sample();
  }

  sample():any {
    $('document').ready(function(){
      $('.sampleClass').click(function(){
        console.log("Clicked button");
        alert("Clicked");
        console.log('ddd',$('.col-xs-12'));
      });
    });
  }

  googleScript():void {
      var google = document.createElement('script');
      google.type = 'text/javascript';
      google.async = true;
      google.src = '//apis.google.com/js/platform.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(google, s);
      console.log("script added");
      var that=this;
      setTimeout(function(){ that.googleApi(); },3000);

  }

  googleApi():void {
    console.log("came inside");
    gapi.load('auth2', function() {
      gapi.auth2.init({
        client_id: "704173116896-ri8f7pifm59tpuplapmjb8fti5gm3jkd.apps.googleusercontent.com",
      });
    });
    gapi.signin2.render('g-signin2', {
        'scope': 'profile email https://www.googleapis.com/auth/contacts.readonly',
        'width': 200,
        'height': 40,
        'longtitle': true,
        'onsuccess': this.onSignIn
    });
  }

  onSignIn(googleUser):any {
    var auth2 = gapi.auth2.getAuthInstance();
    var profile="";
    if (auth2.isSignedIn.get()) {
      profile = auth2.currentUser.get().getBasicProfile();
    } else {
      profile = googleUser.getBasicProfile();
    }
    //console.log(profile);
    //var id_token = googleUser.getAuthResponse().id_token;
        //console.log("ID Token: " + id_token);
  }

  ngOnInit():any {
    //this.allContacts=this.storageService.getContacts();
    let resp=this.storageService.getContacts() //.subscribe( data => { console.log("resss",data); this.allContacts=data; this.selectContact=data[0]; } );
    console.log(resp);
    // resp.subscribe(data => console.log(data) );
    if(Array.isArray(resp)) {
      this.allContacts=resp;
      this.selectContact=resp[0];
    }
    else {
      resp.subscribe( data => { this.allContacts=data; this.selectContact=data[0]; } );
    }
  }

  onSelect(cont:Contact) {
    this.selectContact=cont;
  }
}
