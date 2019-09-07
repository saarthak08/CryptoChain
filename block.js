const {GENESIS_DATA}=require('./config')
const cryptoHash=require('./crypto-hash')

class Block{
    constructor({timestamp, lastHash, hash, data,nonce,difficulty}){
        this.timestamp=timestamp;
        this.lastHash=lastHash;
        this.hash=hash;
        this.data=data;
        this.nonce=nonce;
        this.difficulty=difficulty;
    }
    static genesis(){
        return new Block(GENESIS_DATA);                 //Factory Pattern Method
    }
    
    static mineBlock({lastBlock, data}){
        //const timestamp=Date.now();
        const {difficulty}=lastBlock;
        let nonce=0,hash,timestamp;
        do{
            nonce++;
            timestamp=Date.now();
            hash=cryptoHash(timestamp,lastBlock.hash,data,nonce,difficulty);
        }
        while(hash.substring(0,difficulty!==replace('0'.repeat(difficulty))));
        return new this({
            timestamp:timestamp,
            lastHash:lastBlock.hash,
            data:data,
            difficulty:difficulty,
            nonce:nonce,
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