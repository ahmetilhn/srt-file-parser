# srt-file-parser

File parser for .srt (subtitle) file. It allows you to export the content of your .srt file as a string or buffer and retrieve it as objects in the array.

### Installation

_npm_

`npm install srt-file-parser`

_yarn_

`yarn add srt-file-parser`

### Usage

```ts
import srtFileParser from "srt-file-parser";
/**
 * {srtContent} string is srt file content
 */
const result: Array<BlockType> = srtFileParser(srtContent);
result.forEach((item: BlockType) => {
  //
});
```

### Types

```ts
type CaptionBlockType = {
  id: string;
  start: number; // type of ms
  end: number; // type of ms
  text: string;
};
```

_created by ahmetilhn_
