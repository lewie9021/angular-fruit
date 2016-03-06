export default function($scope, ProductsModel, BasketModel) {
    // TODO: Convert the ProductsModel into a lookup object (key'd by ID).
    const getProduct = (productID) => ProductsModel.filter(({id}) => id == productID)[0];
    const counts = BasketModel.counts();
    const productIDs = Object.keys(counts);
    const total = productIDs.reduce((total, productID) => {
        const product = getProduct(productID);
        const quantity = counts[productID];

        return total + (product.price * quantity);
    }, 0);

    $scope.products = productIDs.map((productID) => {
        const product = getProduct(productID);

        return Object.assign({}, product, {
            price: product.price.toFixed(2),
            quantity: counts[productID]
        });
    });

    $scope.total = total.toFixed(2);
}
