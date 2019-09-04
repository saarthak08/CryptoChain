const {GENESIS_DATA}=require('./config')
const cryptoHash=require('./crypto-hash')

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
        const timestamp=Date.now();
        const hash=cryptoHash(timestamp,lastBlock.hash,data);
        return new this({
            timestamp:timestamp,
            lastHash:lastBlock.hash,
            data:data,
            hash:hash
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