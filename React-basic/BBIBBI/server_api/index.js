// require
const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send([
    {
      num: "0",
      msg: "저는 당신의 0순위에요"
    },
    {
      num: "0000",
      msg: "보고싶다"
    },
    {
      num: "0024",
      msg: "영원히 사랑해"
    },
    {
      num: "0027",
      msg: "땡땡이 치자"
    },
    {
      num: "0090",
      msg: "가고 있는 중이다(go)"
    },
    {
      num: "0124",
      msg: "영원히 사랑해"
    },
    {
      num: "0179",
      msg: "영원한 친구"
    },
    {
      num: "017942",
      msg: "영원한 친구 사이"
    },
    {
      num: "0242",
      msg: "연인사이"
    },
    {
      num: "045",
      msg: "빵사와"
    },
    {
      num: "100",
      msg: "돌아와(Back)"
    },
    {
      num: "100003",
      msg: "만세"
    },
    {
      num: "100024",
      msg: "많이 사랑해"
    },
    {
      num: "1004",
      msg: "당신의 천사로부터"
    },
    {
      num: "1010235",
      msg: "열렬히 사모해"
    },
    {
      num: "10288",
      msg: "열이 펄펄"
    },
    {
      num: "1052",
      msg: "사랑해(lo V e)"
    },
    {
      num: "108",
      msg: "괴롭다(108번뇌)"
    },
    {
      num: "11010",
      msg: "흥!"
    },
    {
      num: "1177155400",
      msg: "I miss you"
    },
    {
      num: "1182",
      msg: "일을 빨리 진행하시죠"
    },
    {
      num: "1200",
      msg: "지금 바빠 (일이 빵빵)"
    }
  ]);
});
app.listen(3000, () => {
  console.log(`3000번 port에 http server를 띄웠습니다.`);
});
