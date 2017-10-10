Happify - API v1
================

An api to help make the bad things go away, or at least look a bit better.  Built on express and mongodb.

** Routes / Usage

POST `sub/[nasty-stuff]/[nice-stuff]` : adds a new substitution to the list

GET `subs/` : gets all currently listed substitutions

GET `sub/happy/` : gets the nasty equivalent of a nice phrase

GET `sub/nasty/` : gets the nice equivalent of a nasty phrase

that's it.  Now go and make things seem happier.

[mongoose docs](http://mongoosejs.com/docs/guide.html)
[express docs](https://expressjs.com/en/4x/api.html)
