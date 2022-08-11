import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="products">Shop</Link>
      <Link href="sell">Sell</Link>
      <Link href="orders">Orders</Link>
      <Link href="account">Account</Link>
      {/* <Link href="index.js">Cart</Link> */}
    </nav>
  );
}
