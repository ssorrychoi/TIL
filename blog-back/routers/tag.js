const express = require("express");
const router = express.Router();
const { Tag, validateTag } = require("../models/tag");
const wrapper = require("../common/wrapper");

router.get(
  "/",
  wrapper(async (req, res, next) => {
    const tags = await Tag.find();
    res.json({ tags });
    next();
  })
);

router.post(
  "/",
  wrapper(async (req, res, next) => {
    const name = req.body.name;
    if (validateTag(req.body).error) {
      res.json({ error: "양식에 맞지 않음" });
      next();
      return;
    }
    const tag = new Tag({
      name
    });
    await tag.save();
    res.json({ tag });
    next();
  })
);

router.get(
  "/:name",
  wrapper(async (req, res, next) => {
    const name = req.params.name;
    const tag = await Tag.findOne({ name });
    if (tag) {
      res.json({ tag });
    } else {
      res.json({ error: "태그가 없습니다" });
    }
    next();
  })
);

module.exports = router;
