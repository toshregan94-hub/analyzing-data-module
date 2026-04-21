const datejs = require('datejs');

function combineUsers(...args){
  const combineObject = {
    users: []

  };
  for (const array of args){
    combineObject.users = [...combinedObject.users, ...array];
  }

  combineObject.merge_date = new Date().toLocaleDateString('en-US',{
    month: 'numeric',
    day: 'numeric',
    year:'numeric'
  });
  return combineObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};


