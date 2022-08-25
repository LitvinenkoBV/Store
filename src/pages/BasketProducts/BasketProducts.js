import ProductCard from "../../components/ProductCard/ProductCard.js";
import "./BasketProducts.scss";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, FormGroup, Box, Button } from "@mui/material";
import { object, string, number } from "yup";
import { cleanProductsToBuy } from "../../store/products_to_buy/action.js";

const initialValues = {
  firstName: "",
  secondName: "",
  age: "",
  deliveryAddress: "",
  phoneNumder: "",
};

const BasketProducts = (props) => {
  const arrProductsToBuy = useSelector((state) => state.productsToBuy);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(cleanProductsToBuy());
  };

  return (
    <>
      <ul
        className="products"
        style={{ maxWidth: "1200px", margin: "0 auto " }}
      >
        {arrProductsToBuy.map((product) => {
          return (
            <ProductCard
              key={product.vendorCode}
              product={product}
              dataModalId={1}
              deleteCard={true}
              openModal={props.openModal}
              disabledBtn={true}
            />
          );
        })}
      </ul>
      {arrProductsToBuy.length !== 0 && (
        <>
          <div
            style={{ textAlign: "center", fontSize: "30px", marginTop: "40px" }}
          >
            Confirm Your Purchase
          </div>
          <Formik
            validationSchema={object({
              firstName: string()
                .required("First name is a required field")
                .min(2)
                .max(100),
              secondName: string()
                .required("Second name is a required field")
                .min(2)
                .max(100),
              age: number()
                .required("Age is a required field")
                .min(16)
                .max(200),
              deliveryAddress: string()
                .required("Delivery address is a required field")
                .min(2)
                .max(100),
              phoneNumder: number()
                .required("Phone number is a required field")
                .min(2),
            })}
            initialValues={initialValues}
            onSubmit={(values) => {
              handleSubmit();
              console.log(values);
              console.log(arrProductsToBuy);
            }}
          >
            {() => (
              <Form>
                <Box
                  marginBottom={3}
                  marginLeft={5}
                  marginRight={5}
                  marginTop={5}
                >
                  <FormGroup>
                    <Field name="firstName" as={TextField} label="First Name" />
                    <ErrorMessage name="firstName" />
                  </FormGroup>
                </Box>
                <Box marginBottom={3} marginLeft={5} marginRight={5}>
                  <FormGroup>
                    <Field
                      name="secondName"
                      as={TextField}
                      label="Second Name"
                    />
                    <ErrorMessage name="secondName" />
                  </FormGroup>
                </Box>
                <Box marginBottom={3} marginLeft={5} marginRight={5}>
                  <FormGroup>
                    <Field
                      name="age"
                      type="number"
                      as={TextField}
                      label="Age"
                    />
                    <ErrorMessage name="age" />
                  </FormGroup>
                </Box>
                <Box marginBottom={3} marginLeft={5} marginRight={5}>
                  <FormGroup>
                    <Field
                      name="deliveryAddress"
                      as={TextField}
                      label="Delivery address"
                    />
                    <ErrorMessage name="deliveryAddress" />
                  </FormGroup>
                </Box>
                <Box marginBottom={3} marginLeft={5} marginRight={5}>
                  <FormGroup>
                    <Field
                      name="phoneNumder"
                      as={TextField}
                      label="Phone numder"
                    ></Field>
                    <ErrorMessage name="phoneNumder" />
                  </FormGroup>
                </Box>
                <Button
                  style={{
                    display: "block",
                    margin: "0 auto 50px",
                  }}
                  type="submit"
                  variant="contained"
                >
                  Checkout
                </Button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </>
  );
};

export default BasketProducts;
