
'use strict';
// Firebase App is always required and must be first
//import * as firebase from "firebase.js";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
//import "firebase/analytics";

// Add the Firebase products that you want to use
//import "firebase/auth";
//import "firebase/database";
// Comment out (or don't require) services you don't want to use
// require("firebase/storage");

//let button = document.getElementById('Submit');

//button.onclick = function(element) {
//  console.log("STOP FAKE NEWS CHROME EXTENSION INTIALIZED !!!");
//}
var firebaseConfig = {
          apiKey: "AIzaSyA87lY1oquijg6NVCmmbu7aYlTjgmRJ65M",
          authDomain: "fakenewsdb.firebaseapp.com",
          databaseURL: "https://fakenewsdb.firebaseio.com",
          projectId: "fakenewsdb",
          storageBucket: "fakenewsdb.appspot.com",
          messagingSenderId: "377833857885",
          appId: "1:377833857885:web:b2f02a466840d9d641beb4",
          measurementId: "G-RW1C6LHHGS"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        
        var dbRef_1_c = firebase.database().ref('website1/citizenRating');
        var dbRef_1_a = firebase.database().ref('website1/authorityRating');
        var dbRef_1_o = firebase.database().ref('website1/overallRating');
        var dbRef_1_u = firebase.database().ref('website1/url');

        var dbRef_2_c = firebase.database().ref('website2/citizenRating');
        var dbRef_2_a = firebase.database().ref('website2/authorityRating');
        var dbRef_2_o = firebase.database().ref('website2/overallRating');
        var dbRef_2_u = firebase.database().ref('website2/url');

        var dbRef_3_c = firebase.database().ref('website3/citizenRating');
        var dbRef_3_a = firebase.database().ref('website3/authorityRating');
        var dbRef_3_o = firebase.database().ref('website3/overallRating');
        var dbRef_3_u = firebase.database().ref('website3/url');

        var url_a = "https://dummywebsite-d9505.firebaseapp.com/second.html";
        var url_b = "https://dummywebsite-d9505.firebaseapp.com/first.html";

        //dbRef_1_a.once('value', snap=>a_score.innerText = snap.val());
        //dbRef_1_c.once('value', snap=>c_score.innerText = snap.val());
        //dbRef_1_o.once('value', snap=>o_score.innerText = snap.val());
        

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;

    dbRef_1_u.once("value")
	  .then(function(snapshot) {
	    var a = snapshot.val();  // true
	    
	    if(a == url) {
	    console.log("exists!");
	    dbRef_1_a.once('value', snap=>a_score.innerText = snap.val());
        dbRef_1_c.once('value', snap=>c_score.innerText = snap.val());
        dbRef_1_o.once('value', snap=>o_score.innerText = snap.val());
        
	  }
	  });
	  dbRef_2_u.once("value")
	  .then(function(snapshot) {
	    var a = snapshot.val();  // true
	    
	    if(a == url) {
	    console.log("exists!");
	    dbRef_2_a.once('value', snap=>a_score.innerText = snap.val());
        dbRef_2_c.once('value', snap=>c_score.innerText = snap.val());
        dbRef_2_o.once('value', snap=>o_score.innerText = snap.val());
        
	  }
	  });

	  if(url != url_a & url != url_b){
	  	dbRef_3_u.set(url);
	    dbRef_3_a.once('value', snap=>a_score.innerText = snap.val());
	    dbRef_3_c.once('value', snap=>c_score.innerText = snap.val());
	    dbRef_3_o.once('value', snap=>o_score.innerText = snap.val());
	  }
    
    // use `url` here inside the callback because it's asynchronous!
});


  document.addEventListener('DOMContentLoaded', function () {
   document.getElementById('fact_b').onclick = function() {
   	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    	if (url == url_a){
    		dbRef_1_a.once('value', snap=>a_score.innerText = snap.val());

		  dbRef_1_c.once('value', function(snapshot){
		    c_score.innerText = snapshot.val()+1;
		    dbRef_1_c.set(snapshot.val()+1);
		  })
		  
		  dbRef_1_o.once('value', function(snapshot){
		    o_score.innerText = snapshot.val()+1;
		    dbRef_1_o.set(snapshot.val()+1);
		  })

    	}
    	if (url == url_b){
    		  dbRef_2_a.once('value', snap=>a_score.innerText = snap.val());

			  dbRef_2_c.once('value', function(snapshot){
			    c_score.innerText = snapshot.val()+1;
			    dbRef_2_c.set(snapshot.val()+1);
			  })
			  
			  dbRef_2_o.once('value', function(snapshot){
			    o_score.innerText = snapshot.val()+1;
			    dbRef_2_o.set(snapshot.val()+1);
			  })

    	}
    	if(url != url_a & url != url_b){
	  		  dbRef_3_a.once('value', snap=>a_score.innerText = snap.val());

			  dbRef_3_c.once('value', function(snapshot){
			    c_score.innerText = snapshot.val()+1;
			    dbRef_3_c.set(snapshot.val()+1);
			  })
			  
			  dbRef_3_o.once('value', function(snapshot){
			    o_score.innerText = snapshot.val()+1;
			    dbRef_3_o.set(snapshot.val()+1);
			  })
	  }
	})
      
    };
    
    document.getElementById('fake_b').onclick = function() {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    	let url = tabs[0].url;
    	if (url == url_a){
    		  dbRef_1_a.once('value', snap=>a_score.innerText = snap.val());

			  dbRef_1_c.once('value', function(snapshot){
			    c_score.innerText = snapshot.val()-1;
			    dbRef_1_c.set(snapshot.val()-1);
			  })
			  
			  dbRef_1_o.once('value', function(snapshot){
			    o_score.innerText = snapshot.val()-1;
			    dbRef_1_o.set(snapshot.val()-1);
			  })
    	}
    	if (url == url_b){
    		  dbRef_2_a.once('value', snap=>a_score.innerText = snap.val());

			  dbRef_2_c.once('value', function(snapshot){
			    c_score.innerText = snapshot.val()-1;
			    dbRef_2_c.set(snapshot.val()-1);
			  })
			  
			  dbRef_2_o.once('value', function(snapshot){
			    o_score.innerText = snapshot.val()-1;
			    dbRef_2_o.set(snapshot.val()-1);
			  })

    	}
    	if(url != url_a & url != url_b){
	  		  dbRef_3_a.once('value', snap=>a_score.innerText = snap.val());

			  dbRef_3_c.once('value', function(snapshot){
			    c_score.innerText = snapshot.val()-1;
			    dbRef_3_c.set(snapshot.val()-1);
			  });
			  
			 dbRef_3_o.once('value', function(snapshot){
			    o_score.innerText = snapshot.val()-1;
			    dbRef_3_o.set(snapshot.val()-1);
			  })

	  }
	})

    };
});
