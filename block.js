class Block{
    constructor({timestamp, lastHash, hash, data}){
        this.timestamp=timestamp;
        this.lastHash=lastHash;
        this.hash=hash;
        this.data=data;
    }
}

var block=new Block(
    {timestamp:new Date().getTime(),
      lastHash:'foo-lastHash',
      hash:'fooHash',
      data:'myData'});

console.log(block);