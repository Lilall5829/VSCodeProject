// This component is for update or add new todos
import { useParams } from "react-router-dom";
import { updateTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
export default function TodoComponent() {
  const [description, setDescription] = useState("");
  const [targetDate, setargetDate] = useState("");
  //   const { username, id } = useParams();
  const { id } = useParams();
  const authContext = useAuth();
  const username = authContext.username;

  useEffect(() => updateTodos(), [id]);

  function updateTodos() {
    updateTodoApi(username, id)
      .then((response) => {
        setDescription(response.data.description);
        setargetDate(response.data.targetDate);
      })
      .catch((error) => console.log(error));
  }

  function onSubmit(values) {
    console.log(values);
  }

  // If there are some errors, the validate will return the errors and onsubmit will not be called!
  function validate(values) {
    // let errors = {
    //   description: "Enter a valid description",
    //   targetDate: "Enter a valid target date",
    // };
    let errors = {};
    if (values.description.length < 5) {
      errors.description = "Enter at least 5 characters";
    }
    if (values.targetDate == "") {
      errors.targetDate = "Enter a target date";
    }
    console.log(values);
    return errors;
  }
  return (
    <div className="container">
      <h1>Enter Todo Details</h1>
      <div>
        {/* Create a form */}
        {/* Here need to install two libs: formik and moment */}
        {/* Initialize Formik */}
        <Formik
          initialValues={{ description, targetDate }}
          enableReinitialize={true}
          onSubmit={onSubmit}
          // validate
          validate={validate}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(props) => (
            <Form>
              {/* Show the error message */}
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-warning"
              ></ErrorMessage>
              <ErrorMessage
                name="targetDate"
                component="div"
                className="alert alert-warning"
              ></ErrorMessage>
              <fieldset className="form-group">
                <label htmlFor="">Description</label>
                <Field
                  type="text"
                  className="form-control"
                  name="description"
                ></Field>
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="">Target Date</label>
                <Field
                  type="date"
                  className="form-control"
                  name="targetDate"
                ></Field>
              </fieldset>
              <div>
                <button className="btn btn-success m-5" type="submit">
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
