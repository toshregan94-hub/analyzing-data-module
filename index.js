 require('datejs');

function combineUsers(...args){
  const combineObject = {
    users: []

  };
  for (const array of args){
    combineObject.users = [...combinedObject.users, ...array];
  }

  const today = new Date();
  const m = today.getMonth() + 1;
  const d = today.getDate();
  const yyyy = today.getFullYear();
  combinedObject.merge_date = m + '/' + d + '/' + yyyy;

  return combineObject;
}


module.exports = combineUsers;



