import { Product } from "app/models/products";
import { useProductService } from "app/services/product.service";
import { Input } from "components/common";
import { Layout } from "components/layout";
import { useState } from "react";

export const RegisterProducts: React.FC = () => {
  const [sku, setSku] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const service = useProductService();

  const submit = () => {
    const product: Product = {
      sku,
      price: parseFloat(price),
      name,
      description,
    };
    service
      .save(product)
      .then((productResponse) => console.log(productResponse));
  };

  return (
    <Layout title="Register Products">
      <div className="columns">
        <Input
          label="  SKU: *"
          columnClasses="is-half "
          value={sku}
          onChange={setSku}
          id="inputSKU"
          placeholder="Enter product SKU"
        />
        <Input
          label="  Price: *"
          value={price}
          columnClasses="is-half "
          onChange={setPrice}
          id="inputPrice"
          placeholder="Enter the product price "
        />
      </div>

      <div className="columns">
        <Input
          label="  Name: *"
          value={name}
          columnClasses="is-full "
          onChange={setName}
          id="inputName"
          placeholder="Enter product name "
        />
      </div>

      <div className="columns">
        <div className="field is-full column">
          <label htmlFor="inputDes" className="label">
            Description: *
          </label>
          <div className="control">
            <textarea
              id="inputDes"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="textarea"
              placeholder="Enter detailed product description "
            />
          </div>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button onClick={submit} className="button is-success">
            Save
          </button>
        </div>
        <div className="control">
          <button className="button is-warning">Previous</button>
        </div>
      </div>
    </Layout>
  );
};
