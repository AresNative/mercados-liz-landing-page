"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { MainFormProps } from "@/utils/constants/interfaces";

import { InputComponent as Input } from "./input";
import { MailComponent as Mail } from "./mail";
import { PhoneComponent as Phone } from "./phone";
import { TextAreaComponent as TextArea } from "./text-area";
import { PasswordComponent as Password } from "./password";

import { SearchComponent as Search } from "./search"
import { SelectComponent as Select } from "./select";
import { CheckboxComponent as Checkbox } from "./checkbox";
import { CheckboxGroupComponent as CheckboxGroup } from "./checkbox-group";

import { CalendarComponent as Calendar } from "./calendar";
import { DateRangeComponent as DateRange } from "./date-range";

import { FileComponent as File } from "./file";
import { ImgComponent as Image } from "./img";

import { Button } from "../button";
import { sendFormData } from "../../api/post-data";

export const MainForm = ({ message_button, dataForm, actionType, aditionalData, action, valueAssign }: MainFormProps) => {

  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    clearErrors,
    register,
    setError,
    watch,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  function getMutationFunction(actionType: string) {
    switch (actionType) {
      case "registrar-combo":
        return sendFormData
      default:
        return () => { };
    }
  }

  async function onSubmit(submitData: any) {
    setLoading(true);

    let combinedData: any = {};

    const formatData = new FormData();

    // Validar si `submitData.file` es un array y agregar los archivos directamente a FormData
    if (Array.isArray(submitData.file)) {
      submitData.file.forEach((file: File) => {
        formatData.append("File", file); // Agregar archivos sin procesarlos
      });
    } else if (submitData.file) {
      formatData.append("File", submitData.file);
    }

    console.log("Archivos enviados:", submitData.file);

    // Remover el campo file del submitData
    const { file, ...sanitizedData } = submitData;

    if (aditionalData) combinedData = { ...sanitizedData, ...aditionalData };
    else combinedData = sanitizedData;

    formatData.append('CombosData', JSON.stringify(combinedData));

    const mutationFunction = getMutationFunction(actionType);

    try {
      await mutationFunction('v2/insert/combos', formatData);

      if (valueAssign && action) {
        if (Array.isArray(valueAssign)) {
          // Si es un array, mapeamos los valores y creamos un objeto
          const result = valueAssign.reduce((acc, v) => {
            const key = v.replace(/^'|'$/g, ''); // Limpia comillas
            acc[key] = submitData[key];
            return acc;
          }, {} as Record<string, any>);

          await action(result);
        } else {
          // Si es un solo valor, lo procesamos directamente
          const key = valueAssign.replace(/^'|'$/g, ''); // Limpia comillas
          await action(submitData[key]);
        }
      }
      else
        if (action) {
          await action()
        }
    } catch (error) {
      console.error("Error en el envío del formulario:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 my-2 m-auto">
      {dataForm.map((field, key) => (
        <SwitchTypeInputRender
          key={key}
          cuestion={field}
          control={control}
          register={register}
          watch={watch}
          clearErrors={clearErrors}
          setError={setError}
          errors={errors}
          getValues={getValues}
          setValue={setValue}
        />
      ))}
      <Button
        color="success"
        type="submit"
        label={loading ? "Loading..." : message_button}
      />
    </form>
  );
};

export function SwitchTypeInputRender(props: any) {
  const { type } = props.cuestion;
  switch (type) {
    case "INPUT":
      return <Input {...props} />;
    case "PASSWORD":
      return <Password {...props} />
    case "PHONE":
      return <Phone {...props} />;
    case "TEXT_AREA":
      return <TextArea {...props} />;
    case "MAIL":
      return <Mail {...props} />;
    case "SELECT":
      return <Select {...props} />;
    case "DATE":
      return <Calendar {...props} />;
    case "DATE_RANGE":
      return <DateRange {...props} />;
    case "CHECKBOX":
      return <Checkbox {...props} />;
    case "CHECKBOX_GROUP":
      return <CheckboxGroup {...props} />;
    case "FILE":
      return <File {...props} />;
    case "IMG":
      return <Image {...props} />;
    case "SEARCH":
      return <Search {...props} />
    case "Flex":
      return <FlexComponent {...props} elements={props.cuestion.elements} />;
    default:
      return <h1>{type}</h1>;
  }
}
interface FlexProps {
  elements: any[];
  control: any;
  register: any;
  watch: any;
  clearErrors: any;
  setError: any;
  errors: any;
  getValues: any;
  setValue: any;
}

export const FlexComponent: React.FC<FlexProps> = ({
  elements,
  control,
  register,
  watch,
  clearErrors,
  setError,
  errors,
  getValues,
  setValue,
}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-start">
      {elements.map((element, index) => (
        <div key={index} className="flex-grow">
          <SwitchTypeInputRender
            cuestion={element}
            control={control}
            register={register}
            watch={watch}
            clearErrors={clearErrors}
            setError={setError}
            errors={errors}
            getValues={getValues}
            setValue={setValue}
          />
        </div>
      ))}
    </div>
  );
};
export default MainForm;