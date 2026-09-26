function Basket({ basket , handledelete , total }) {
  return (
    <section className="basket-section">
      <h2>My Basket</h2>

      {basket?.length === 0 ? (
        <div className="empty-basket">
          <p>Your basket is empty.</p>
        </div>
      ) : (
        <>
          <div className="basket-items">
            {basket?.map((item, index) => (
              <div className="basket-item" key={index}>
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>

                <button className="remove-btn" onClick={()=> handledelete(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="basket-total">
            <span>Total Price:</span>
            <strong>{total}</strong>
          </div>
        </>
      )}
    </section>
  );
}

export default Basket;
