import React from 'react'

function Product({product}) {
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body">
                <img src={product.image??"https://placeimg.com/160/160/arch/grayscale"} alt="titre"/>

                <h2 className="card-title">
                    {product.name}
                    <div className="badge badge-success ">{product.price}€/u</div>
                </h2>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{product.quantity} unités</div>
                </div>
                <button className='btn btn-success btn-sm'>Ajouter au panier</button>
            </div>
        </div>)
}

export default Product