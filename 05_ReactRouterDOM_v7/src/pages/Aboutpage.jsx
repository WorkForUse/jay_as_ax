import { Form, useActionData } from "react-router";

const Aboutpage = () => {

  const actionData = useActionData()

  return (
    <div>
      <center>
        <h3>ABOUT PAGE</h3>
        {/* /// */}
          <Form method="post">
            <input type="text" name="title" />
            <button>Submit</button>
          </Form>
          <h2>response : {JSON.stringify(actionData)}</h2>
        {/* /// */}
      </center>
    </div>
  );
};

export default Aboutpage;
