
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
  }
});

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
            name:"Play Hard - Albert Neve Remix"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5cJwiInRK5yVdtrPW2YUyv",
            name:"Sweet Nothing [feat. Florence Welch]"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/3kTtGvmM3UVjrJLfxdU9AJ",
            name:"I Could Be The One - Nicktim - Avicii vs. Nicky Romero"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/05HelLTFXPh50xvy83nkYC",
            name:"Easy - Extended Mix"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5XJkTV0u9j2O5MQP0AiCsl",
            name:"If I Lose Myself"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/1wckIaC2m3aeFAQgecA1qW",
            name:"Symphonica - Original Mix"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5432syNPbthIoLaX5TnCZQ",
            name:"Head Up - Original Mix"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5oFa4NllWi8624l2OiErcJ",
            name:"BOOM! - Original Mix"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/3XupdqcjyHTEvV6luB5I9O",
            name:"Vertigo"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/4fsRBEb4PIbCr69f6TsjJ6",
            name:"Ain't A Party [feat. Harrison]"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/3xTzVa75e6P4EE7LIW87tZ",
            name:"Rasputin"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/4zn4IYy6gLfzmQbv62Ezqa",
            name:"Wakanda - Original"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/67OO0DW2VJAyXKOttJbVn0",
            name:"Who - Original Mix"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/2GzCZ0E5cEPHsTd0tyvyNv",
            name:"This Is What It Feels Like [feat. Trevor Guthrie] - David Guetta Remix"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/2rPxJLazfvjQzlQOJnYH2F",
            name:"Alive - David Guetta Remix"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/1FgKAGhx3PU2c2dN9N6n9c",
            name:"Dynamo - Original Mix"
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
            name:"Titanium - feat. Sia"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/6F6TsdD0ijquDSjcr9lgIt",
            name:"Turn Me On - feat. Nicki Minaj"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/4zuy08yhEhlu5YSTM3WqRD",
            name:"She Wolf (Falling to Pieces) [feat. Sia]"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5VAKwJzAJgpysx7FL9W6MJ",
            name:"Without You - feat. Usher"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/10w1VHXe5Ti6YK80yM9A8K",
            name:"I Can Only Imagine - feat. Chris Brown & Lil Wayne"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/0BBZuOGGBj9u4X3rAfmae8",
            name:"Play Hard - feat. Ne-Yo & Akon"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/3VPGF9KIbomfGAOH8FocNL",
            name:"Wild One Two (feat. David Guetta, Nicky Romero, Sia) [Edit]"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/0CDmYYe9zm6xZzV6S6H60q",
            name:"Just One Last Time - feat. Taped Rai"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/6lpbvUVPsjInxrk8cKIVZy",
            name:"In My Head - feat. Nervo"
         },
         {
            available:true,
            explicit:true,
            href:"https://play.spotify.com/track/7yO48FWUkqsrdxrwkGcnwl",
            name:"Where Them Girls At - feat. Nicki Minaj & Flo Rida"
         },
         {
            available:true,
            explicit:true,
            href:"https://play.spotify.com/track/6KBD2g9nzhDlPdW7cbAEix",
            name:"Little Bad Girl - feat. Taio Cruz & Ludacris"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/0ROzrfNfYGkJwCQFPL56EL",
            name:"Sweat (Snoop Dogg vs. David Guetta) [Remix]"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/2C0B4gD8bIUn01eqdEcilH",
            name:"Crank It Up - feat. Akon"
         },
         {
            available:true,
            explicit:true,
            href:"https://play.spotify.com/track/7r6UUPnBCAPQSfitMWzXU3",
            name:"Nothing Really Matters - feat. will.i.am"
         },
         {
            available:true,
            explicit:true,
            href:"https://play.spotify.com/track/55OevWk74PykKDtKnlA1uZ",
            name:"I Just Wanna F. - feat. Timbaland & Dev"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/2MsLJgBqoRwQwO9lMwflO9",
            name:"Night of Your Life - feat. Jennifer Hudson"
         },
         {
            available:true,
            explicit:true,
            href:"https://play.spotify.com/track/1g13QKRzafR7wjPM7V7oG7",
            name:"Repeat - feat. Jessie J"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/6erwH5ZOEmxBzhaoB5mS2r",
            name:"Every Chance We Get We Run - feat. Tegan & Sara"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/3bHGsq7NzkavkCAK3zEAUZ",
            name:"Sunshine"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/61GBXUDju6XkR4JTDelTD1",
            name:"Lunar"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/3KZpqiEjVVemGDifzMPhcw",
            name:"What the F***"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/0hP68geWn2iUBnEgDidLTV",
            name:"Metropolis"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/0vWkkFqbuqA97HgE6Z7zeT",
            name:"The Alphabeat"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5N7MHmNFjEyscwkDzJnPTR",
            name:"Metro Music"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5EuezxtMjgE0PuCau3oJ1k",
            name:"Toy Story"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/3rq1P9LD0sqob0GLyyCg5i",
            name:"The Future"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5GlFLuZt3zmbuOTDvI0Ygl",
            name:"Dreams"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/70MlQKQ50d4dsh2bjfGIrC",
            name:"Paris"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/7gl3QfhVGTMC3Mq8QPBdFe",
            name:"Glasgow"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5z7UlmBUz6qI220LlrfCcH",
            name:"Little Bad Girl - Instrumental Club Mix"
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
            name:"Turn Me On (feat. Nicki Minaj) [Michael Calfan Remix]"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/1izCOYUM5VG7dS3z6lXl5L",
            name:"Can't Stop Me"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/1FH8xDvDxxkkTFCR2mG4Kh",
            name:"Wild One Two (feat. David Guetta, Nicky Romero, Sia)"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/1zjwnPI7Lbb4fBIUQP67PG",
            name:"Million Voices"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/4WAOeQEgQTJYTFoeVRk8u4",
            name:"Silhouettes"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/1vHN274ryYdsAWOyBE6BDx",
            name:"The Veldt (feat. Chris James) [8 Minute Edit]"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/47807uQKdGHYvNtjjco3iS",
            name:"Feel So Close - Radio Edit"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/7b529nCPD2PyG1uCuVA4Xe",
            name:"Metropolis"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/7pXAfr0oPswOflimKCh0h7",
            name:"Get Low"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/7eNzjUrOk6FCqCCRDbAVVT",
            name:"Cascade - Original Mix"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/0wV4BL8SD7OjyJCxtmYd90",
            name:"Greyhound - Radio Edit"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/79CpltU6ZPXVkdZGqV8dBM",
            name:"Quasar"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/5khFaAGCM4UbWMy3z3bPjz",
            name:"Bong"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/0pTi2KB9bUA89Cc03JLPBm",
            name:"WTF!? - feat. ZROQ"
         },
         {
            available:true,
            href:"https://play.spotify.com/track/593x8YAcWWHJU1KT75mDyv",
            name:"I Can Only Imagine (feat. Chris Brown & Lil Wayne) [David Guetta & Daddy's Groove Remix]"
         }
      ],
      href:"spotify:album:4kovLueNGJufTDqdoGlW8e"
   }]