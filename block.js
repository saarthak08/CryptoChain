const {GENESIS_DATA}=require('./config')

class Block{
    constructor({timestamp, lastHash, hash, data}){
        this.timestamp=timestamp;
        this.lastHash=lastHash;
        this.hash=hash;
        this.data=data;
    }
    static genesis(){
        return new Block(GENESIS_DATA);                 //Factory Pattern Method
    }
    
    static mineBlock({lastBlock, data}){
        return new this({
            timestamp:Date.now(),
            lastHash:lastBlock.hash,
            data:data,
        });
    }
}
/*
var block=new Block(
    {timestamp:new Date().getTime(),
      lastHash:'foo-lastHash',
      hash:'fooHash',
      data:'myData'});

console.log(block);
*/

module.exports=Block;