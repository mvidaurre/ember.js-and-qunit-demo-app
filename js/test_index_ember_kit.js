test("Check HTML is returned", function() { 
  visit("/").then(function() {
    ok(exists("*"), "Found HTML!");
  });
});

test("root lists first page of posts", function(){
  visit("/").then(function() {
    equal(find(".post").length, 3, "The first page should have 3 posts");
    // Assuming we know that 3 posts display per page and that there are more than 3 posts
  });
});

test("should have three albums", function(){
  visit("/albums").then(function() {
    equal(find(".album").length, 3, "The first page should have 3 albums");
  });
});

test("should be albums of David Guetta", function(){
  visit("/albums").then(function() {
    ok(find(".album:contains('David Guetta')").length, "The artist should be David Guetta");
  });
});

test("should have 16 tracks the album F*** Me, I'm Famous 2013", function(){
  visit("/albums/1").then(function() {
    equal(find(".track").length, 16, "The first page should have 16 tracks");
  });
});

test("should have as a track 'Turn Me On'", function(){
  visit("/albums/2").then(function() {
    ok(find(".track:contains('Turn Me On')").length, "Turn Me On should be a track for this album");
  });
});

test("should change the name of de album when it is edited", function(){
  visit("/albums/1").then(function() {
    click('button#edit').then(function() {
    return fillIn("#album-name-field", "Fuck Me, I'm Famous 2013")
  }).then(function() {
    ok(find(".span9 h1:contains('Fuck')").length, "The name of the album should change at editing");
  });
  });
});