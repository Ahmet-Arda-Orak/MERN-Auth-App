const mongoose = require('mongoose');
const bcrypt = require("bcrypt")
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username:{
    type: String,
    required: true,
    minlength: 2
  },
  lastname:{
      type: String,
      required: true,
      minlength: 2
  },
  email: {
    type: String,
    unique: true, 
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
});

userSchema.pre("save", async function(next){
  const user = this;
  if (user.isModified("password")){
    user.password = await bcrypt.hash(user.password,10);
  }
  next();
})


userSchema.statics.findUser = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    return;
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch){
    return;
  }
  return user;
};


userSchema.plugin(uniqueValidator);

const User = mongoose.model('ModelName', userSchema);

module.exports = User;