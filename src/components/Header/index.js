import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart } from './styles';

import img from '../../assets/images/rocketshoes.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={img} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My car</strong>
          <span> {cartSize} itens</span>
        </div>
        <MdShoppingCart size={36} color="#FFFF" />
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
