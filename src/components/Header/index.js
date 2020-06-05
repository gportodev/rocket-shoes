import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart } from './styles';

import img from '../../assets/images/rocketshoes.svg';

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={img} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My car</strong>
          <span>
            {' '}
            {cartSize}
{' '}
itens
{' '}
</span>
        </div>
        <MdShoppingCart size={36} color="#FFFF" />
      </Cart>
    </Container>
  );
}
