const TransactionPool=require('./transaction-pool');
const Transaction=require('./transaction');
const Wallet=require('./index');

describe('Transaction Pool',()=>{
    let transactionPool, transaction;
    const senderWallet=new Wallet();
    beforeEach(()=>{
        transactionPool=new TransactionPool();
        transaction=new Transaction({
            senderWallet,
            recipient:'foo',
            amount:50
        });
    });

    describe('setTransaction()',()=>{
        it('adds a Transaction',()=>{
            transactionPool.setTransaction(transaction);
            expect(transactionPool.transactionMap[transaction.id]).toBe(transaction);
        });
        it()
    });

    describe('existingTransaction()',()=>{
       it('returns an existing transaction given an input address',()=>{
            transactionPool.setTransaction(transaction);
            expect(transactionPool.existingTransaction({inputAddress:senderWallet.publicKey })
            ).toBe(transaction);
       });
    });
});