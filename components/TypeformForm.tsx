// Dependency imports
import { Widget } from "@typeform/embed-react";

const TypeformForm = () => {
  const FORM_ID: string = "displWaE";
  return <Widget id={FORM_ID} style={{ width: "100%" }} className="my-form" />;
};

export default TypeformForm;
