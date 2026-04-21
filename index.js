const datejs = require('datejs');

function combineUsers(...args){
  const combineObject = {
    users: []

  };
  for (const array of args){
    combineObject.users = [...combinedObject.users, ...array];
  }

  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combineObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};



