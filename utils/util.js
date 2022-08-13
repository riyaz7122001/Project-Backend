import jwt from "jsonwebtoken";
// import mg from "mailgun-js";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );
};
