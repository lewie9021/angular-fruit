export default function($scope, $state, ProductsModel, BasketModel) {
    const productID = parseInt($state.params.id, 10);
    const [product] = ProductsModel.filter(({id}) => id == productID);

    Object.assign($scope, product);

    $scope.addToBasket = () => {
        BasketModel.add(productID);
    };
}
