
class mainController {
  static get UID(){
    return "mainController"
  }
  
  /* @ngInject */
  constructor($scope, $log, ProductService, products) {
  	this.$scope = $scope;
  	this.$log = $log;
  	this.ProductService = ProductService;
    this.searchTerm = "";
    this.description = "cDemo Live is a search engine that lets you find products of all kinds, and specializes in New & Used Auto";
    this.products = products;
    this.productSelected = this.products[0];
    this.productCategorySelected = -1;
    console.log("This.products: " + this.products[0].name);
    //this.products = products;
    //console.log(ProductService.getProducts().then(response => response.data));
    //console.log(products);

    console.log(this.productCategories);

  	//this.$scope.$watch(() => this.productSelected, this.productChange);
  }


 //productChange(newVal, oldVal) {

    //console.log(newVal);

    /*
    return () => {
      console.log(newVal);
      console.log(this.ProductService.getProductCategories(newVal).then(response => response.data.categories));
    }
    */
  //}


  searchChange(newVal) {
  	console.log(newVal);
  }


  search() {
  	this.$log.log(this.searchTerm);
  }
}

mainController.$inject = ['$scope', '$log', 'ProductService', 'products'];
export default mainController;