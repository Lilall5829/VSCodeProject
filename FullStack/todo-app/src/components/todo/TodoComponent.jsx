// This component is for update or add new todos
import { useNavigate, useParams } from "react-router-dom";
import {
  addTodoApi,
  retrieveTodoApi,
  updateTodoApi,
} from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import moment from "moment";
export default function TodoComponent() {
  const [description, setDescription] = useState("");
  const [targetDate, setargetDate] = useState("");
  //   const { username, id } = useParams();
  const { id } = useParams();
  const authContext = useAuth();
  const username = authContext.username;
  const navigate = useNavigate();

  useEffect(() => retrieveTodos(), [id]);
  // Update data:
  // 1. Call retrieve api to retrieve data from back end
  // 2. Use onSubmit to get data from user in the front end
  // 3. Call update api to return data to the back end
  // 4. Use useNavigste to go back to todos list page
  function retrieveTodos() {
    if (id != -1) {
      //If id!=1, means this is not a new todo.
      retrieveTodoApi(username, id)
        .then((response) => {
          setDescription(response.data.description);
          setargetDate(response.data.targetDate);
        })
        .catch((error) => console.log(error));
    }
  }

  function onSubmit(values) {
    const todo = {
      id: id,
      // Use new data(value) got from user!
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: false,
    };
    console.log(todo);
    if (id == -1) {
      addTodoApi(username, todo)
        .then((response) => {
          navigate("/todos");
        })
        .catch((error) => console.log(error));
    } else {
      updateTodoApi(username, id, todo)
        .then((response) => {
          navigate("/todos");
        })
        .catch((error) => console.log(error));
    }
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
    if (values.targetDate == "" || moment(values.targetDate).isValid()) {
      // Use moment to validate date
      errors.targetDate = "Enter a target date";
    }
    return errors;
  }
  return (
    <div className="container">
      <h1>Enter Todo Details</h1>
      <div>
        {/* Create a form */}
        {/* Here need to install two libs: formik(for create form) and moment(for validation) */}
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
