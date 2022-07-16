// Dependency imports
import { PopupButton, Widget } from "@typeform/embed-react";

const TypeformForm = () => {
  const FORM_ID: string = "displWaE";

  return (
    <>
      <PopupButton id={FORM_ID} style={{ fontSize: 20 }} className="my-button">
        click to open form in popup
      </PopupButton>
      {/* <Widget id={FORM_ID} style={{ width: "100%", height: "100%" }} className="h-screen w-screen" /> */}
    </>
  );
};

export default TypeformForm;
