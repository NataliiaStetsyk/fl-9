function userCard(options) {

    let cardOptions = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: []
    };

    const const100 = 100,
        tax = 0.5;

    return {

        putCredits: function(credit) {
            return cardOptions.balance + credit;
        },

        getCardOptions: function() {
            return cardOptions;
        },

        takeCredits: function(credit) {
            if (cardOptions.balance && cardOptions.transactionLimit > credit) {
                return cardOptions.balance - credit;
            }
        },

        setTransactionLimit: function(limit) {
            let setLimit = cardOptions.transactionLimit = limit;
            return setLimit;
        },

        transferCredits: function(credit, card) {
            const transfer = credit * tax / const100 + credit;

            if (transfer < cardOptions.balance) {
                return card.cardOptions.balance + transfer;
            }
            if (transfer < cardOptions.transactionLimit) {
                return cardOptions.balance - transfer;
            }


        }
    }
}
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.restriction = 3;
    }
    // Getters
    get keys() {
        return this.getCardByKey();
    }
    get cards() {
        return this.addCard();
    }
    // Methods
    getCardByKey(key) {
        return this.key;
    }
    addCard() {
        if (this.cards.length < this.restriction) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.log('The maximum quantity of cards for this user has been reached!');
        }
    }
}