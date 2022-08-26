import { useMutation } from '@apollo/client';
import { gql } from 'graphql-tag';
import { Router } from 'next/router';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './Products';

const CREATE_PRODUCT_MUTATION = gql`
mutation CREATE_PRODUCT_MUTATION(
  $name: String!
  $description: String!
  $price: Int!
  $image: Upload
) {
  createProduct(
    data:{
      name: $name
      description: $description
      price: $price
      status: 'AVAILABLE'
      photo: {
        create:{image: $image, altText: $name} }
    }
  ){
    id
    price
    description
    name
  }
}
`;

export default function CreateProduct() {
  const { inputs, handleChange } = useForm({
    image: '',
    name: '',
    price: 0,
    description: '',
  });

  const [createProduct, { loading, data, error }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();

        const res = await createProduct();
        clearForm();

        Router.push({
          pathname: `/product/${res.data.createProduct.id}`,
        });
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
export { CREATE_PRODUCT_MUTATION };
