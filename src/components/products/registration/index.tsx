import { Product } from "app/models/products";
import { useProductService } from "app/services/product.service";
import { Input } from "components/common";
import { Layout } from "components/layout";
import { useState } from "react";
import { converterBigDecimal } from "app/util/money";
import { Alert } from "components/common/message";

export const RegisterProducts: React.FC = () => {
  const [sku, setSku] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [messages, setMessages] = useState<Array<Alert>>([]);
  const service = useProductService();

  const submit = () => {
    const product: Product = {
      id,
      sku,
      price: converterBigDecimal(price),
      name,
      description,
    };

    if (id) {
      service.update(product).then((response) => {
        setMessages([
          { typeColor: "success", text: "Successfully updated product" },
        ]);
      });
    } else {
      service.save(product).then((productResponse) => {
        setId(productResponse.id);
        setDate(productResponse.creationDate);
        setMessages([
          { typeColor: "success", text: "Successfully saved product" },
        ]);
      });
    }
  };

  return (
    <Layout title="Register Products" messagens={messages}>
      {id && (
        <div className="columns">
          <Input
            label="  Code *"
            columnClasses="is-half "
            value={id}
            id="inputId"
            disabled
          />
          <Input
            label="  Date: *"
            value={date}
            columnClasses="is-half "
            id="inputDate"
            disabled
          />
        </div>
      )}
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
          currency
          maxLength={19}
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
            {id ? "Update" : "Save"}
          </button>
        </div>
        <div className="control">
          <button className="button is-warning">Previous</button>
        </div>
      </div>
    </Layout>
  );
};
