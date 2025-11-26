interface Buffer {
  //% helper=bufferGetData
  data: number[];
  //% helper=bufferPush
  push(byte: number): void;
  //% helper=bufferRemoveElement
  removeElement(byte: number): boolean;
  //% helper=bufferPop
  pop(): number;
  //% helper=bufferShift
  shift(): number;
  //% helper=bufferUnshift
  unshift(): number;
}

namespace helpers {
    export function bufferGetData(buf: Buffer): number[] {
      return buf.toArray(NumberFormat.Int8LE);
    }

    export function bufferPush(buf: Buffer, byte: number) {
      buf.data.push(byte);
    }

    export function bufferRemoveElement(buf: Buffer, byte: number) {
        buf.data.removeElement(byte);
    }

    export function bufferPop(buf: Buffer) {
        return buf.data.pop();
    }

    export function bufferShift(buf: Buffer) {
     return buf.data.shift();
    }
    
    export function bufferUnshift(buf: Buffer, byte: number) {
     return buf.data.unshift(byte);
    }
}
