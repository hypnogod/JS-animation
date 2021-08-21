const _0x49f3 = [
  "47937pKLRJU",
  "centerX",
  "2MiTcWj",
  "mousemove",
  "draw",
  "117464acTNyN",
  "98723snYfjg",
  "108474VROoQw",
  "width",
  "innerWidth",
  "addEventListener",
  "color",
  "6689hbcPWr",
  "black",
  "bezierCurveTo",
  "random",
  "centerY",
  "height",
  "mouseup",
  "1KrOfsD",
  "sqrt",
  "speedY",
  "strokeStyle",
  "18uDHRKk",
  "29jZeYQv",
  "innerHeight",
  "speedX",
  "resize",
  "41851lTcYbY",
  "fillStyle",
  "228131QmTEyb",
  "1JfZkLM",
  "fill",
  "getElementById",
  "stroke",
  "mousedown",
];
const _0x2f9f = function (_0x225f4d, _0x217705) {
  _0x225f4d = _0x225f4d - 0x9e;
  let _0x49f33f = _0x49f3[_0x225f4d];
  return _0x49f33f;
};
const _0x5da128 = _0x2f9f;
(function (_0x1e132c, _0x5a99c4) {
  const _0x500088 = _0x2f9f;
  while (!![]) {
    try {
      const _0x4c4592 =
        -parseInt(_0x500088(0xc0)) * parseInt(_0x500088(0xb4)) +
        -parseInt(_0x500088(0xa7)) +
        parseInt(_0x500088(0xad)) +
        parseInt(_0x500088(0xb2)) * -parseInt(_0x500088(0xaf)) +
        -parseInt(_0x500088(0xa1)) * parseInt(_0x500088(0xb9)) +
        -parseInt(_0x500088(0xa8)) * -parseInt(_0x500088(0xb3)) +
        -parseInt(_0x500088(0xa5)) * -parseInt(_0x500088(0xa0));
      if (_0x4c4592 === _0x5a99c4) break;
      else _0x1e132c["push"](_0x1e132c["shift"]());
    } catch (_0x144041) {
      _0x1e132c["push"](_0x1e132c["shift"]());
    }
  }
})(_0x49f3, 0x20d40);
const canvas = document[_0x5da128(0xaa)]("canvas1"),
  ctx = canvas["getContext"]("2d");
(canvas[_0x5da128(0xb5)] = window[_0x5da128(0xb6)]),
  (canvas[_0x5da128(0xbe)] = window[_0x5da128(0xa2)]);
const edge = 0x64;
let drawing = ![];
const mouse = { x: null, y: null };
window[_0x5da128(0xb7)](_0x5da128(0xb0), (_0x260368) => {
  (mouse["x"] = _0x260368["x"]), (mouse["y"] = _0x260368["y"]);
});
class Root {
  constructor(_0x18d2a1, _0x5c7fcd, _0x17f1e4, _0x74f4f3, _0xe64ebf) {
    const _0x579249 = _0x5da128;
    (this["x"] = _0x18d2a1),
      (this["y"] = _0x5c7fcd),
      (this[_0x579249(0xb8)] = _0x17f1e4),
      (this[_0x579249(0xae)] = _0x74f4f3),
      (this[_0x579249(0xbd)] = _0xe64ebf),
      (this[_0x579249(0xa3)] = 0x0),
      (this[_0x579249(0x9e)] = 0x0);
  }
  [_0x5da128(0xb1)]() {
    const _0x122371 = _0x5da128;
    (this[_0x122371(0xa3)] += (Math[_0x122371(0xbc)]() - 0.5) / 0x2),
      (this[_0x122371(0x9e)] += (Math[_0x122371(0xbc)]() - 0.5) / 0x2),
      (this["x"] += this["speedX"]),
      (this["y"] += this[_0x122371(0x9e)]);
    const _0x486b1e = this["x"] - this[_0x122371(0xae)],
      _0x444635 = this["y"] - this[_0x122371(0xbd)],
      _0x8b472f = Math[_0x122371(0xc1)](
        _0x486b1e * _0x486b1e + _0x444635 * _0x444635
      ),
      _0xc04e39 = (-_0x8b472f / edge + 0.8) * edge;
    if (_0xc04e39 > 0x0) {
      requestAnimationFrame(this[_0x122371(0xb1)]["bind"](this)),
        ctx["beginPath"]();
      var _0x26668d = _0xc04e39 * 0.3;
      ctx["moveTo"](this["x"], this["y"] + _0x26668d),
        ctx[_0x122371(0xbb)](
          this["x"],
          this["y"],
          this["x"] - _0xc04e39 / 0x2,
          this["y"],
          this["x"] - _0xc04e39 / 0x2,
          this["y"] + _0x26668d
        ),
        ctx[_0x122371(0xbb)](
          this["x"] - _0xc04e39 / 0x2,
          this["y"] + (_0xc04e39 + _0x26668d) / 0x2,
          this["x"],
          this["y"] + (_0xc04e39 + _0x26668d) / 0x2,
          this["x"],
          this["y"] + _0xc04e39
        ),
        ctx[_0x122371(0xbb)](
          this["x"],
          this["y"] + (_0xc04e39 + _0x26668d) / 0x2,
          this["x"] + _0xc04e39 / 0x2,
          this["y"] + (_0xc04e39 + _0x26668d) / 0x2,
          this["x"] + _0xc04e39 / 0x2,
          this["y"] + _0x26668d
        ),
        ctx["bezierCurveTo"](
          this["x"] + _0xc04e39 / 0x2,
          this["y"],
          this["x"],
          this["y"],
          this["x"],
          this["y"] + _0x26668d
        ),
        (ctx[_0x122371(0xa6)] = this[_0x122371(0xb8)]),
        ctx[_0x122371(0xa9)](),
        (ctx[_0x122371(0x9f)] = _0x122371(0xba)),
        ctx[_0x122371(0xab)]();
    }
  }
}
function branchOut() {
  const _0x5efd08 = _0x5da128;
  if (drawing) {
    const _0x2ceaa9 = mouse["x"],
      _0x4cc329 = mouse["y"];
    for (let _0x24899f = 0x0; _0x24899f < 0x3; _0x24899f++) {
      const _0x300f50 = new Root(
        mouse["x"],
        mouse["y"],
        "red",
        _0x2ceaa9,
        _0x4cc329
      );
      _0x300f50[_0x5efd08(0xb1)]();
    }
  }
}
// notthing in this code
window[_0x5da128(0xb7)](_0x5da128(0xa4), () => {
  const _0x19be53 = _0x5da128;
  (canvas[_0x19be53(0xb5)] = window[_0x19be53(0xb6)]),
    (canvas[_0x19be53(0xbe)] = window[_0x19be53(0xa2)]);
}),
  window["addEventListener"](_0x5da128(0xb0), () => {
    branchOut();
  }),
  window[_0x5da128(0xb7)](_0x5da128(0xac), () => {
    drawing = !![];
  }),
  window[_0x5da128(0xb7)](_0x5da128(0xbf), () => {
    drawing = ![];
  });
