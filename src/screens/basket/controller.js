export default function($scope, ProductsModel, BasketModel) {
    const counts = BasketModel.counts();

    $scope.products = Object.keys(counts)
        .map((productID) => {
            const [product] = ProductsModel.filter(({id}) => id == productID);

            return Object.assign({}, product, {
                quantity: counts[productID]
            });
        });
}
