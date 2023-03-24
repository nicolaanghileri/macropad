import { useForm } from "@mantine/form";
import { Box, TextInput, SegmentedControl, Select } from "@mantine/core";
import { useState } from "react";
import BigButton from "../../components/buttons/BigButton";

/**
 * MacroCreation - A brief description of what this component does
 * 
 * TODO: Add retrieving the applications from database (axios) and displaying them in the select component
 * TODO: Add sending informations to rest-api to insert the new macro of the user.
 *
 * @param {Object} props - A description of the props this component receives
 *
 * @returns {JSX.Element} - A description of what this component returns
 */
const MacroCreation = (props) => {
  const form = useForm({
    initialValues: {
      //Setup of the variables that are gonna be passed in the form
      name: "",
      app: "",
      icon: "",
    },

    validate: {},
  });

  const [valueSegCtrl, setValueSegementedControl] = useState("react");

  return (
    <>
      <h1>Macro Creation</h1>
      <Box>
        <form onSubmit={form.onSubmit(() => console.log("TODO"))}>
          <TextInput placeholder="New macro name" />

          <SegmentedControl
            value={valueSegCtrl}
            onChange={setValueSegementedControl}
            data={[
              { label: "Select Application", value: "select" },
              { label: "New Application", value: "new" },
            ]}
          />
          <Select
            placeholder="Select Application"
            data={["React", "Angular", "Svelte", "Vue"]}
            hidden={valueSegCtrl === "new"} // If it is set to new returns true so it is hidden
          />
          <TextInput
            placeholder="Application name"
            hidden={valueSegCtrl === "select" || valueSegCtrl === "react"} // If it is set to select or react(default) returns true so it is hidden
          />
          <BigButton content="Add macro!"></BigButton>
        </form>
      </Box>
    </>
  );
};

export default MacroCreation;
