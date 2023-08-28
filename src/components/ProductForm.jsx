
const ProductForm = ({ formData,handleChange,handleSubmit,text }) => {
  
  return (
    <article id="add-product" className="mb-4 mt-4">
      <h1 className="px-2 mt-5 home-text display-5 mb-5 border-bottom">{text} Product</h1>
      <form class="p-2 fs-5 fst-italic" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="name" class="form-label">
            Product Name:
          </label>
          <input
            type="text"
            class="form-control border-warning"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">
            Product Price:
          </label>
          <input
            type="number"
            class="form-control border-warning"
            id="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div class="mb-3">
          <label for="amount" class="form-label">
            Product Quantity:
          </label>
          <input
            type="number"
            class="form-control border-warning"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <label for="image" class="form-label">
          Product Image:
        </label>
        <div class="input-group mb-3">
          <span class="input-group-text border-warning" id="basic-addon3">
            https://example.com/
          </span>
          <input
            type="url"
            class="form-control border-warning"
            id="image"
            value={formData.image}
            onChange={handleChange}
            aria-describedby="basic-addon3"
            required
          />
        </div>
        <div class="text-center">
          <button type="submit" class="add-to-cart nav-link fw-semibold btn btn-outline-warning btn-light fs-2 py-1 px-5 mt-5">
            <i class="fa-solid fa-cart-plus me-2"></i>Let's {text} It !
          </button>
        </div>
      </form>
    </article>
  );
};

export default ProductForm;
