class ProductService {
	constructor($http) {
		this.$http = $http;
	}

	getProducts() {
		return this.$http.get("http://localhost:3004/products");
	}
}

export default ProductService;