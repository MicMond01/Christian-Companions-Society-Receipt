import { useEffect, useState } from "react";
import Form from "./component/form/Form";
import PrintOut from "./component/print/PrintOut";

function App() {
  const [hasValue, setHasValue] = useState(false);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Log the updated state when it changes
    console.log(formData);
  }, [formData]); // Add formData as a dependency to useEffect

  return (
    <div className="App">
      {hasValue ? (
        <PrintOut formData={formData} />
      ) : (
        <Form
          setHasValue={setHasValue}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
}

export default App;
