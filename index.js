 require('datejs');

function combineUsers(...args){
  const combineObject = {
    users: []

  };
  for (const array of args){
    combineObject.users = [...combinedObject.users, ...array];
  }

  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  return combineObject;
}


module.exports = combineUsers;



