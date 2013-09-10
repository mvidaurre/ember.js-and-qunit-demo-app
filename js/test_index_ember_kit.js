test("Check HTML is returned", function() { 
  visit("/").then(function() {
    ok(exists("*"), "Found HTML!");
  });
});

test("root lists first page of posts", function(){
  visit("/").then(function() {
    equal(find(".post").length, 3, "The first page should have 3 posts");
    // Assuming we know that 5 posts display per page and that there are more than 5 posts
  });
});