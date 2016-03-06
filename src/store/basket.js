export default function() {
    // TODO: This could look in local storage on intial load.
    let basket = {};

    return {
        counts: () => {
            return basket;
        },
        total: () => {
            return Object.keys(basket)
                .reduce((accumulator, key) => accumulator + basket[key], 0);;
        },
        add: (productID) => {
            const count = basket[productID] || 0;

            basket[productID] = count  + 1;
        },
        remove: (productID) => {
            const count = basket[productID];

            if (count)
                return basket[productID] = count - 1;

            delete basket[productID];
        },
        clear: (productID) => {
            delete basket[productID];
        },
        empty: () => {
            basket = {};
        }
    };
};
