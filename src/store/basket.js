export default function(localStorageService) {
    // Attempt to load from Local Storage before falling back on an empty basket.
    let basket = localStorageService.get("basket") || {};
    // Save to Local Storage whenever we modify the basket.
    const save = () => localStorageService.set("basket", basket);

    return {
        counts: () => {
            return basket;
        },
        get: (productID) => {
            return basket[productID];
        },
        total: () => {
            return Object.keys(basket)
                .reduce((accumulator, key) => accumulator + basket[key], 0);;
        },
        add: (productID) => {
            const count = basket[productID] || 0;

            basket[productID] = count  + 1;

            save();
        },
        remove: (productID) => {
            const count = basket[productID];

            if (count > 1)
                basket[productID] = count - 1;
            else
                delete basket[productID];

            save();
        },
        clear: (productID) => {
            delete basket[productID];

            save();
        },
        empty: () => {
            basket = {};

            save();
        }
    };
};
