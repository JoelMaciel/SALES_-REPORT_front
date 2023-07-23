import { Layout } from "components/layout";
import { useState } from "react";

export const RegisterProducts: React.FC = () => {
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submit = () => {
    const product = { sku, price, name, description };
    console.log(product);
  };

  return (
    <Layout title="Register Products">
      <div className="columns">
        <div className="field is-half column ">
          <label htmlFor="inputSKU" className="label">
            SKU: *
          </label>
          <div className="control">
            <input
              id="inputSKU"
              value={sku}
              onChange={(event) => setSku(event.target.value)}
              className="input"
              placeholder="Enter product SKU"
            />
          </div>
        </div>
        <div className="field is-half column">
          <label htmlFor="inputPrice" className="label">
            Price: *
          </label>
          <div className="control">
            <input
              id="inputPrice"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              className="input"
              placeholder="Enter the product price "
            />
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="field is-full column">
          <label htmlFor="inputName" className="label">
            Name: *
          </label>
          <div className="control">
            <input
              id="inputName"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="input"
              placeholder="Enter product name "
            />
          </div>
        </div>
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
