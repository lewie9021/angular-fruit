export default function($scope, ProductsModel, BasketModel) {
    const products = ProductsModel.reduce((map, product) => {
        return Object.assign(map, {[product.id]: product});
    }, {});
    const total = () => {
        const counts = BasketModel.counts();

        return Object.keys(counts).reduce((total, productID) => {
            const product = products[productID];
            const quantity = counts[productID];

            return total + (product.price * quantity);
        }, 0).toFixed(2);
    };

    $scope.products = Object.keys(BasketModel.counts())
        .map((productID) => {
            const product = products[productID];

            return Object.assign({}, product, {
                price: product.price.toFixed(2),
                quantity: () => BasketModel.get(productID)
            });
        });

    $scope.total = total;
    $scope.add = (productID) => BasketModel.add(productID);
    $scope.remove = (productID) =>  BasketModel.remove(productID);
}
