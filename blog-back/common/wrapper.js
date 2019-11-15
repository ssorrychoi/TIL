module.exports = asyncFn => {
  return async (req, res, next) => {
    try {
      return await asyncFn(req, res, next);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "unknown" });
      return next();
    }
  };
};
