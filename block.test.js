const Block=require("./block");
const {GENESIS_DATA}=require('./config.js');

describe('Block',function callback(){
    const timestamp='a-date';
    const lastHash='lastHash';
    const hash='hash';
    const data='data';
    const block=new Block({timestamp,lastHash,hash,data});
    it('has a timestamp, lastHash, hash & data',() => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    })
});


describe('genesis',()=>{
    const genesisBlock=Block.genesis();
    console.log('genesisBlock',genesisBlock);
    it('returns a block instance',()=>{
        expect(genesisBlock instanceof Block).toBe(true);
    });

    it('returns the genesis data',()=>{
        expect(genesisBlock).toEqual(GENESIS_DATA);
    })

});

describe('mineBlock',()=>{
    const lastBlock=Block.genesis();
    const data= 'mined data';
    const minedBlock=Block.mineBlock({lastBlock, data});
    it('returns a block instance',()=>{
        expect(minedBlock instanceof Block).toBe(true);
    });

    it('sets the `lastHash` to be the hash of the lastBlock',()=>{
        expect(minedBlock.lastHash).toEqual(lastBlock.hash);  //In jest, expected value goes into the toEqual & to be Equal value goes into the expected value
                                                            //which isn't the regular rule in the programming world.
    });

    it('sets the `data`',()=>{
        expect(minedBlock.data).toEqual(data);
    });

    it('sets a `timestamp`',function (){
        expect(minedBlock.timestamp).not.toEqual(undefined);
    });

});


