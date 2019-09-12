const express=require('express');
const bodyParser=require('body-parser');
const Blockchain=require('./blockchain/blockchain');
const PubSub=require('./app/pubsub');
const request=require('request');

const app=express();
const blockchain=new Blockchain();
const DEFAULT_PORT=3000;
let PEER_PORT;
const pubsub=new PubSub({blockchain});
const ROOT_NODE_ADDRESS=`http://localhost:${DEFAULT_PORT}`;

const syncChains = ()=>{
    request({url:`${ROOT_NODE_ADDRESS}/api/blocks`},(error,response,body)=>{
        if(!error&&response.statusCode===200){
            const rootChain=JSON.parse(body);
            console.log('replace chain on a sync with ',rootChain);
            blockchain.replaceChain(rootChain);
        }
    });
};

if(process.env.GENERATE_PEER_PORT==='true'){
    PEER_PORT=DEFAULT_PORT+ Math.ceil(Math.random()*1000);
}

//setTimeout(()=> pubsub.broadcastChain(),1000);

const PORT=PEER_PORT || DEFAULT_PORT;
app.listen(PORT,()=>{
    console.log(`listening at localhost port:${PORT}`);
    if(PORT!==DEFAULT_PORT){
        syncChains();
    }
;})

app.use(bodyParser.json());


app.get('/api/blocks',(req,res)=>{
    res.json(blockchain.chain);
});

app.post('/api/mine',(req,res)=>{
    const {data} = req.body;
    blockchain.addBlock({data});
    pubsub.broadcastChain();
    res.redirect('/api/blocks');
});
