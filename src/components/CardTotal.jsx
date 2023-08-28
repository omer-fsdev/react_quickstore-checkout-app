import React from "react";

const taxRate = 0.18;
const shipping = 25;

const CardTotal = ({ products }) => {
  const subtotal = products.reduce(
    (acc, product) =>
      product.price * product.dumpingRate * product.amount + acc,
    0
  );

  return (
    <table className="table w-100">
      <tbody className="fs-4">
        <tr className="text-end">
          <th className="text-start">Subtotal:</th>
          <td>
            $<span className="subtotal">{subtotal.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%):</th>
          <td>
            $<span className="tax">{(taxRate*subtotal).toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping:</th>
          <td>
            $<span className="shipping">{shipping}</span>
          </td>
        </tr>
        <tr className="text-end text-warning">
          <th className="text-start">Total:</th>
          <td>
            $<span className="total">{(subtotal + taxRate*subtotal + shipping).toFixed(2)}</span>
          </td>
        </tr>
      </tbody>
      <p className="mt-4 fs-5 ps-1">Click on the product name to update.</p>
    </table>
    
  );
};

export default CardTotal;
