export default function($scope, $state, ProductsModel, BasketModel) {
    const productID = parseInt($state.params.id, 10);
    const [product] = ProductsModel.filter(({id}) => id == productID);

    Object.assign($scope, product, {
        price: product.price.toFixed(2)
    });

    $scope.addToBasket = () => {
        BasketModel.add(productID);
    };
}
