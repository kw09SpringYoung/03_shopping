import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as actionProducts from '../store/action/product.action'
import * as actionCarts from '../store/action/cart.action'

class Product extends React.Component {
    componentDidMount() {
        const { loadProducts } =  this.props
        loadProducts()
    }
    render() {
        const { products,addProductToCart } = this.props
        console.log(products)
        return (
            <section className="container content-section">
            <h2 className="section-header">商品列表</h2>
            <div className="shop-items">
            {
                products.map(product => (
                    <div className="shop-item" key={product.id}>
                        <img className="shop-item-image" src={`http://localhost:3005${product.thumbnail}`} />
                        <span className="shop-item-title">{product.title}</span>
                        <div className="shop-item-details">
                            <span className="shop-item-price">￥{product.price}</span>
                            <button className="btn btn-primary shop-item-button" type="button" onClick={()=>{ addProductToCart(product.id) }}>加入购物车</button>
                        </div>
                    </div>
                ))
            }
            </div>
        </section>
        )
    }
}
// 获取 store 中的状态（state）并映射到 props 中
const mapStateToProps = state => ({
    products: state.products
})
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(actionProducts,dispatch),
    ...bindActionCreators(actionCarts,dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Product)