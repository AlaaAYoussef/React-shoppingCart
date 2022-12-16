import Modal from 'react-modal'
function CartModal(props) {
    const {order,closeModal,cartItems}=props
  return (
    <>
      <Modal isOpen={order} onRequestClose={closeModal}>
        <div className="order-info">
          <span className="close-icon" onClick={closeModal}>
            &times;
          </span>
          <p className="alert-success">order done successfuly</p>
          <table>
            <tr>
              <td>Name:</td>
              <td>{order.name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{order.email}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>
                {cartItems.reduce((a, p) => {
                  return a + p.price;
                }, 0)}
              </td>
            </tr>
            <tr>
              {cartItems.map((p) => (
                <div className="cart-data">
                  <p>quantaty of this product:{p.qty}</p>
                  <p>title of this product:{p.title}</p>
                </div>
              ))}
            </tr>
          </table>
        </div>
      </Modal>
    </>
  );
}

export default CartModal;
