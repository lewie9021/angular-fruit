export default function($scope, ProductsModel, BasketModel) {
    const productsMap = ProductsModel.reduce((map, product) => {
        return Object.assign(map, {[product.id]: product});
    }, {});

    $scope.products = Object.keys(BasketModel.counts())
        .map((productID) => {
            const product = productsMap[productID];

            return Object.assign({}, product, {
                price: product.price.toFixed(2),
                quantity: () => BasketModel.get(productID)
            });
        });
    $scope.total = () => {
        const counts = BasketModel.counts();

        return Object.keys(counts).reduce((total, productID) => {
            const product = productsMap[productID];
            const quantity = counts[productID];

            return total + (product.price * quantity);
        }, 0).toFixed(2);
    };
    $scope.add = (productID) => BasketModel.add(productID);
    $scope.remove = (productID) => {
        const count = BasketModel.get(productID);

        // Remove product from the list.
        if (count <= 1)
            $scope.products = $scope.products
            .filter(({id}) => id !== productID);

        BasketModel.remove(productID);
    };
    $scope.checkout = () => {
        // Clear the products list.
        $scope.products = [];

        BasketModel.clear();
    };
}
