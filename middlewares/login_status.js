/* module.exports = (req,res,next) =>{
  console.log(req);
  if(!req.user){
      // return res.staus(401).send({error : 'You must be logged in to Perform the action'})
      return false;
      // next();
  }
  else
    return true;
} */

module.exports =  =>{
  console.log(req);
  return "hello";
}