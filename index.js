

function combineUsers(...args){
  const combineObject = {
    users: []

  };
  for (const array of args){
    combineObject.users = [...combinedObject.users, ...array];
  }

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const year = today.getFullYear();
  combineObject.merge_date = `${month}/${day}/${year}`;

  return combineObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};



