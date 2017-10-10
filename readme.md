Happify - API v1
================

An api to help make the bad things go away, or at least look a bit better.  Built on express and mongodb.

** Usage

`npm run start:db` to start up the db, you'll need mongodb installed
`npm run start:server` to boot up the express server

** Routes

POST `sub/[nasty-stuff]/[nice-stuff]` : adds a new substitution to the list <= not built yet

GET `subs/` : gets all currently listed substitutions <= not built yet

GET `sub/happy/[nasty-phrase]` : gets the nasty equivalent of a nice phrase <= not built yet

GET `sub/nasty/[nice-phrase]` : gets the nice equivalent of a nasty phrase <= not built yet

GET `sub/[id]`: get sub with given id

DELETE `sub/[id]`: delete a current sub <= not built yet

that's it.  Now go and make things seem happier.

[mongoose docs](http://mongoosejs.com/docs/guide.html)
[express docs](https://expressjs.com/en/4x/api.html)
[mongodb](https://docs.mongodb.com/manual/)
