const jwt=require('jsonwebtoken')

module.exports=(req,res,next)=>{
  const token=(req.headers.authorization||'').split(' ')[1]
  try {
    req.user=jwt.verify(token,process.env.SECRETKEY)
    next()
  } catch {
    res.status(401).json({msg:"please sign in"})
  }
}
