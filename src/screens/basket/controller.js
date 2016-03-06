export default function($scope, ProductsModel, BasketModel) {
    const counts = BasketModel.counts();
    const productIDs = Object.keys(counts);
    const getProduct = (productID) => ProductsModel.filter(({id}) => id == productID)[0];

    $scope.products = productIDs
        .map((productID) => {
            const product = getProduct(productID);

            return Object.assign({}, product, {
                quantity: counts[productID]
            });
        });

    $scope.total = productIDs
        .reduce((total, productID) => {
            const product = getProduct(productID);
            const quantity = counts[productID];

            return total + (product.price * quantity);
        }, 0);
}
