
// simple helper class -
// game instances creator
tobi.Creator = function(game, root) {

this.game = game;
this.root = root;

}

tobi.Creator.prototype = {

addFromPool : function(containerName, node) {

  if (node === undefined || node === null) { node = this.root; }

  var obj = this.game.pool.pull(containerName);

  if (obj.component['collider'])
    this.game.physics.addColliderObj(obj.component.collider);

  obj._selfDestroy = false;

  if (obj != null)
    return node.addNode(obj);
  else
      return null;

},

add : function(gameObject, node) {

  if (node === undefined || node === null) { node = this.root; }

  if (tobi.Utils.isFunction(gameObject)) {
    this.create(gameObject);
    return;
  }

  gameObject = node.addNode(gameObject);


  return gameObject;


},

create : function(gameObject, x, y, node) {


  if (node === undefined || node === null) { node = this.root; }

  var obj = gameObject;

  if (tobi.Utils.isFunction(obj)) {

    obj = new gameObject();

  }

  //obj.depth = node.nodes.length;
  obj.game = this.game;

   obj = node.addNode(obj);



  var xx = 0;
  var yy = 0;

  if (typeof x != 'undefined')
    xx = x;

  if (typeof y !== 'undefined')
    yy = y;

    obj.position.x = xx;
    obj.position.y = yy;

    if (obj['start'])
      obj.start();

      if (obj.component['collider'])
        this.game.physics.addColliderObj(obj.component.collider);


  console.log(obj);

  return obj;

},

createClone : function(gameObject, x, y, node) {

    var obj = cloner.shallow.copy(gameObject);
    return this.create(obj,x,y,node);

}






}
