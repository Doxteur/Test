import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

function Cart() {
    return (
        <>
            <a className="btn btn-ghost normal-case" href="/cart">
                <AiOutlineShoppingCart size={25} className="mx-2" />
            </a>
        </>)
}

export default Cart