import srtFileParser from "../lib";
describe("Parser Tests", () => {
  test("should return caption blocks", () => {
    const captionBlocks = [
      {
        id: "1",
        start: 49592,
        end: 52887,
        text: `BAZILARI ATEŞLE YOK OLACAK DER DÜNYA
BAZILARI BUZLA`,
      },
      {
        id: "2",
        start: 52970,
        end: 56599,
        text: `ARZULARIN TADINA BAKTIĞIM KADARIYLA
BENİM TERCİHİM ATEŞTEN YANA`,
      },
    ];
    const result = srtFileParser(`1
00:00:49,592 --> 00:00:52,887
BAZILARI ATEŞLE YOK OLACAK DER DÜNYA
BAZILARI BUZLA

2
00:00:52,970 --> 00:00:56,599
ARZULARIN TADINA BAKTIĞIM KADARIYLA
BENİM TERCİHİM ATEŞTEN YANA`);
    expect(result).toEqual(captionBlocks);
  });
});
