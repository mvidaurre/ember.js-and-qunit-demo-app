
App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('albums', function() {
    this.resource('album', { path: ':album_id' });
  });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.AlbumsRoute = Ember.Route.extend({
  model: function() {
    return albums;
  }
});

App.AlbumRoute = Ember.Route.extend({
  model: function(params) {
    return albums.findBy('id', params.album_id);
  }
});

App.AlbumController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
    }
  },

  duration: function() {
    var tracks = this.get('tracks');
    var album_duration = new Date()
    var initial_album_duration = album_duration
    tracks.forEach(function(val, index) {
      album_duration = sumDuration(album_duration, val.duration) 
    });
    return hhmmss(album_duration - initial_album_duration)
  }.property('tracks.@each.duration')

});

function sumDuration(date, duration) {
    time = duration.split(':'); // split it at the colons
    return new Date(date.getTime() + time[0]*60000 + time[1]*6000);
}

function hhmmss(time_on_ms){
  var totalSec = time_on_ms / 1000;
  var hours = parseInt( totalSec / 3600 ) % 24;
  var minutes = parseInt( totalSec / 60 ) % 60;
  var seconds = totalSec % 60;

  return (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
}

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

var albums = [{
      id: '1',
      artistid:"spotify:artist:1Cs0zKBU1kc0i8ypK3B9ai",
      name:"F*** Me, I'm Famous 2013",
      artist:"David Guetta",
      released:"2013",
      img:"https://d3rt1990lpmkn.cloudfront.net/300/5f32804ef2065930c4d2377bb9ebc50d3799b091",
      tracks:[
         {
            available:true,
            href:"https://play.spotify.com/track/1NMc5CKnUiIbiYcPXWW0Jw",
            name:"Play Hard - Albert Neve Remix",
            duration: '4:32'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5cJwiInRK5yVdtrPW2YUyv",
            name:"Sweet Nothing [feat. Florence Welch]",
            duration: '9:53'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/3kTtGvmM3UVjrJLfxdU9AJ",
            name:"I Could Be The One - Nicktim - Avicii vs. Nicky Romero",
            duration: '7:21'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/05HelLTFXPh50xvy83nkYC",
            name:"Easy - Extended Mix",
            duration: '6:54'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5XJkTV0u9j2O5MQP0AiCsl",
            name:"If I Lose Myself",
            duration: '10:25'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/1wckIaC2m3aeFAQgecA1qW",
            name:"Symphonica - Original Mix",
            duration: '5:34'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5432syNPbthIoLaX5TnCZQ",
            name:"Head Up - Original Mix",
            duration: '7:11'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5oFa4NllWi8624l2OiErcJ",
            name:"BOOM! - Original Mix",
            duration: '5:37'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/3XupdqcjyHTEvV6luB5I9O",
            name:"Vertigo",
            duration: '4:59'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/4fsRBEb4PIbCr69f6TsjJ6",
            name:"Ain't A Party [feat. Harrison]",
            duration: '3:49'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/3xTzVa75e6P4EE7LIW87tZ",
            name:"Rasputin",
            duration: '8:22'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/4zn4IYy6gLfzmQbv62Ezqa",
            name:"Wakanda - Original",
            duration: '6:19'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/67OO0DW2VJAyXKOttJbVn0",
            name:"Who - Original Mix",
            duration: '4:56'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/2GzCZ0E5cEPHsTd0tyvyNv",
            name:"This Is What It Feels Like [feat. Trevor Guthrie] - David Guetta Remix",
            duration: '11:11'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/2rPxJLazfvjQzlQOJnYH2F",
            name:"Alive - David Guetta Remix",
            duration: '8:32'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/1FgKAGhx3PU2c2dN9N6n9c",
            name:"Dynamo - Original Mix",
            duration: '6:54'
         }
      ],
      href:"spotify:album:7uF5Ku1jLVenPLaofZMMHg"
   },{
      id: '2',
      artistid:"spotify:artist:1Cs0zKBU1kc0i8ypK3B9ai",
      name:"Nothing But the Beat Ultimate",
      artist:"David Guetta",
      released:"2012",
      img:"https://d3rt1990lpmkn.cloudfront.net/300/ef2f1d6b9ff17f6a1e819229d7ae98fe7708493e",
      tracks:[
         {
            available:true,
            href:"https://play.spotify.com/track/2dOTkLZFbpNXrhc24CnTFd",
            name:"Titanium - feat. Sia",
            duration: '8:49'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/6F6TsdD0ijquDSjcr9lgIt",
            name:"Turn Me On - feat. Nicki Minaj",
            duration: '4:28'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/4zuy08yhEhlu5YSTM3WqRD",
            name:"She Wolf (Falling to Pieces) [feat. Sia]",
            duration: '5:49'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5VAKwJzAJgpysx7FL9W6MJ",
            name:"Without You - feat. Usher",
            duration: '6:39'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/10w1VHXe5Ti6YK80yM9A8K",
            name:"I Can Only Imagine - feat. Chris Brown & Lil Wayne",
            duration: '7:52'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/0BBZuOGGBj9u4X3rAfmae8",
            name:"Play Hard - feat. Ne-Yo & Akon",
            duration: '6:53'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/3VPGF9KIbomfGAOH8FocNL",
            name:"Wild One Two (feat. David Guetta, Nicky Romero, Sia) [Edit]",
            duration: '4:22'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/0CDmYYe9zm6xZzV6S6H60q",
            name:"Just One Last Time - feat. Taped Rai",
            duration: '6:21'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/6lpbvUVPsjInxrk8cKIVZy",
            name:"In My Head - feat. Nervo",
            duration: '3:39'
         },
         {
            available:true,
            explicit:true,
            href:"https://play.spotify.com/track/7yO48FWUkqsrdxrwkGcnwl",
            name:"Where Them Girls At - feat. Nicki Minaj & Flo Rida",
            duration: '4:44'
         },
         {
            available:true,
            explicit:true,
            href:"https://play.spotify.com/track/6KBD2g9nzhDlPdW7cbAEix",
            name:"Little Bad Girl - feat. Taio Cruz & Ludacris",
            duration: '6:31'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/0ROzrfNfYGkJwCQFPL56EL",
            name:"Sweat (Snoop Dogg vs. David Guetta) [Remix]",
            duration: '8:50'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/2C0B4gD8bIUn01eqdEcilH",
            name:"Crank It Up - feat. Akon",
            duration: '4:02'
         },
         {
            available:true,
            explicit:true,
            href:"https://play.spotify.com/track/7r6UUPnBCAPQSfitMWzXU3",
            name:"Nothing Really Matters - feat. will.i.am",
            duration: '7:07'
         },
         {
            available:true,
            explicit:true,
            href:"https://play.spotify.com/track/55OevWk74PykKDtKnlA1uZ",
            name:"I Just Wanna F. - feat. Timbaland & Dev",
            duration: '3:52'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/2MsLJgBqoRwQwO9lMwflO9",
            name:"Night of Your Life - feat. Jennifer Hudson",
            duration: '4:05'
         },
         {
            available:true,
            explicit:true,
            href:"https://play.spotify.com/track/1g13QKRzafR7wjPM7V7oG7",
            name:"Repeat - feat. Jessie J",
            duration: '8:19'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/6erwH5ZOEmxBzhaoB5mS2r",
            name:"Every Chance We Get We Run - feat. Tegan & Sara",
            duration: '4:41'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/3bHGsq7NzkavkCAK3zEAUZ",
            name:"Sunshine",
            duration: '5:31'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/61GBXUDju6XkR4JTDelTD1",
            name:"Lunar",
            duration: '9:07'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/3KZpqiEjVVemGDifzMPhcw",
            name:"What the F***",
            duration: '4:30'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/0hP68geWn2iUBnEgDidLTV",
            name:"Metropolis",
            duration: '1:32'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/0vWkkFqbuqA97HgE6Z7zeT",
            name:"The Alphabeat",
            duration: '3:25'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5N7MHmNFjEyscwkDzJnPTR",
            name:"Metro Music",
            duration: '5:02'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5EuezxtMjgE0PuCau3oJ1k",
            name:"Toy Story",
            duration: '4:12'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/3rq1P9LD0sqob0GLyyCg5i",
            name:"The Future",
            duration: '3:39'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5GlFLuZt3zmbuOTDvI0Ygl",
            name:"Dreams",
            duration: '2:52'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/70MlQKQ50d4dsh2bjfGIrC",
            name:"Paris",
            duration: '4:29'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/7gl3QfhVGTMC3Mq8QPBdFe",
            name:"Glasgow",
            duration: '3:52'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5z7UlmBUz6qI220LlrfCcH",
            name:"Little Bad Girl - Instrumental Club Mix",
            duration: '4:21'
         }
      ],
      href:"spotify:album:1fAn5gw4Q5HN8Wpx2neYd2"
   },{
      id: '3',
      artistid:"spotify:artist:1Cs0zKBU1kc0i8ypK3B9ai",
      name:"Cathy & David Guetta Present FMIF ! Ibiza Mix 2012",
      artist:"David Guetta",
      released:"2012",
      img:"https://d3rt1990lpmkn.cloudfront.net/300/6fd498d752601bdfe69777fc570314161805f0cd",
      tracks:[
         {
            available:true,
            href:"https://play.spotify.com/track/3rpMFuK7c7SByhSxTWgXAo",
            name:"Turn Me On (feat. Nicki Minaj) [Michael Calfan Remix]",
            duration: '3:33'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/1izCOYUM5VG7dS3z6lXl5L",
            name:"Can't Stop Me",
            duration: '5:12'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/1FH8xDvDxxkkTFCR2mG4Kh",
            name:"Wild One Two (feat. David Guetta, Nicky Romero, Sia)",
            duration: '3:21'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/1zjwnPI7Lbb4fBIUQP67PG",
            name:"Million Voices",
            duration: '5:12'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/4WAOeQEgQTJYTFoeVRk8u4",
            name:"Silhouettes",
            duration: '4:54'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/1vHN274ryYdsAWOyBE6BDx",
            name:"The Veldt (feat. Chris James) [8 Minute Edit]",
            duration: '8:00'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/47807uQKdGHYvNtjjco3iS",
            name:"Feel So Close - Radio Edit",
            duration: '5:02'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/7b529nCPD2PyG1uCuVA4Xe",
            name:"Metropolis",
            duration: '3:30'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/7pXAfr0oPswOflimKCh0h7",
            name:"Get Low",
            duration: '4:01'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/7eNzjUrOk6FCqCCRDbAVVT",
            name:"Cascade - Original Mix",
            duration: '3:51'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/0wV4BL8SD7OjyJCxtmYd90",
            name:"Greyhound - Radio Edit",
            duration: '4:57'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/79CpltU6ZPXVkdZGqV8dBM",
            name:"Quasar",
            duration: '2:22'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5khFaAGCM4UbWMy3z3bPjz",
            name:"Bong",
            duration: '4:41'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/0pTi2KB9bUA89Cc03JLPBm",
            name:"WTF!? - feat. ZROQ",
            duration: '3:22'
         },
         {
            available:true,
            href:"https://play.spotify.com/track/593x8YAcWWHJU1KT75mDyv",
            name:"I Can Only Imagine (feat. Chris Brown & Lil Wayne) [David Guetta & Daddy's Groove Remix]",
            duration: '1:22'
         }
      ],
      href:"spotify:album:4kovLueNGJufTDqdoGlW8e"
   }]