var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My MATH 2551 Website   copyright  "
},
{
  "id": "sec-1-1-three-dim-space",
  "level": "1",
  "url": "sec-1-1-three-dim-space.html",
  "type": "Section",
  "number": "1.1",
  "title": "Three Dimensional Space",
  "body": " Three Dimensional Space  Much of our study this semester will be of functions that can either be graphed in three dimensional space or are defined on points in , so we begin by giving some basic vocabulary for .   Points in are specified as an ordered triple . We plot these points as shown in the diagram above, with each coordinate specifying how far to move from the origin in each of the three orthogonal directions defining this space. These are given by the coordinate axes : the -axis is the set of all points with coordinates both equal to , and similarly for the other two axes. An extremely important feature of this coordinate system is that it is right-handed , which means that if you align your right thumb with the direction of the -axis, then your fingers curl from the -axis towards the -axis. We will have opportunities throughout the course to choose one of two possible orientations for a mathematical object, and we will consistently make the choice that results in a right-handed system.  Besides the three coordinate axes, we will often work with the coordinate planes: . Points on the -plane, for example, all have the form for some real numbers and . These planes split into eight octants . The ordering of these octants varies by reference, but the first octant is consistently the octant where all three coordinates are non-negative: .  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
