export default function($scope, ProductsModel, BasketModel) {
    const products = ProductsModel.reduce((map, product) => {
        return Object.assign(map, {[product.id]: product});
    }, {});
    const counts = BasketModel.counts();
    const productIDs = Object.keys(counts);
    const total = productIDs.reduce((total, productID) => {
        const product = products[productID];
        const quantity = counts[productID];

        return total + (product.price * quantity);
    }, 0);

    $scope.products = productIDs.map((productID) => {
        const product = products[productID];

        return Object.assign({}, product, {
            price: product.price.toFixed(2),
            quantity: counts[productID]
        });
    });

    $scope.total = total.toFixed(2);
}
