import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.auth_token;
    const { userId } = jwt.verify(token, process.env.JWT_Secret || "mykey");
    req.userId = userId;
    next();
  } catch (err) {
    res.status(400).send({ error: "Invalid Token", errorMsg: err.message });
  }
};
