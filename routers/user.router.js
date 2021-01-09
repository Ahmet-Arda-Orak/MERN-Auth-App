const express = require('express');
const User = require('../models/user.model');
const router = express.Router();

router.get("/datas", async(req,res)=>{
  await User.find()
  .then(data => res.json(data))
  .catch(err => res.status.json(err))
})

router.post('/signup', (req, res) => {
  const user = new User(req.body);
  req.session.user = user._id;
  user
    .save()
    .then((result) => {
      res.json({
        message: 'successfully created',
        auth: true,
      });
    })
    .catch((err) => {
      res.send(err)
    });
});


router.post('/signin', async (req, res) => {
  const { email,password } = req.body;
  const user = await User.findUser(email, password);
  if (user) {
    req.session.user = user._id;
    req.session.name = user.username;
    res.json({
      message: 'You are successfully login',
      auth: true
    });
  } else {
    res.json({
      message: 'Unable to login',
      auth: false
    });
  }
});


router.get("/hassignedin", async(req,res)=>{
  if(req.session.user){
    return res.json({
      auth:true,
      username:req.session.name
    })
  }
  return res.json({
    auth:false,
    message:"you are not logged"
  })
});

router.get("/signout",async(req,res)=>{
  req.session.destroy();
  res.json({
    auth:false,
    message:"Signout"
  })
})

module.exports = router;