const findLargestLevel = function(node) {

  var result = [];

  var queueOfNode = [node];

  while (queueOfNode.length !== 0) {
    var newQ = queueOfNode;
    var sum = 0;
    queueOfNode.forEach(function(n) {
      
        return sum = sum + n.value;

    })
    result.push(sum);
    queueOfNode = [];

    newQ.forEach(function(n) {
      if(n.left){
        queueOfNode.push(n.left);
      }
      if(n.right){
        queueOfNode.push(n.right);
      }
    })
  }
  var max = result.reduce(function(a,b){
    if(a >= b) {return a;}
    if(b > a) {return b;}
  });
  //return the index
  return result.indexOf(max);
};


var testNode = {value:-2,
               left:{value:-15,
                 left:{value:-20},
                 right:{value:-10}},
               right:{value:5,
                 left:{value:1},
                 right:{value:7,
                   right:{value:11}}}};

console.log(findLargestLevel(testNode));
