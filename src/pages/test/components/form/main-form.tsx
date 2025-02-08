import { useState, useEffect } from "react";
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

export const MainForm = ({ message_button, dataForm, actionType, aditionalData, action, valueAssign, formatForm }: MainFormProps) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState<any>({}); // Estado para guardar datos

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

  // Efecto para restaurar los valores del formulario al cambiar de página
  useEffect(() => {
    const currentPageData = pages[page].reduce((acc: any, field: any) => {
      if (field.name && formData[field.name]) {
        acc[field.name] = formData[field.name];
      }
      return acc;
    }, {});

    Object.keys(currentPageData).forEach((key) => {
      setValue(key, currentPageData[key]);
    });
  }, [page, formData, setValue]);

  function getMutationFunction(actionType: string) {
    switch (actionType) {
      case 'v2/insert/combos':
        return sendFormData;
      case 'v2/insert/postulaciones':
        return sendFormData;
      default:
        return () => { };
    }
  }

  async function onSubmit(submitData: any) {
    setLoading(true);
    console.log(submitData);

    let combinedData: any = {};
    const formatData = new FormData();

    if (Array.isArray(submitData.file)) {
      submitData.file.forEach((file: File) => {
        formatData.append("File", file);
      });
    } else if (submitData.file) {
      formatData.append("File", submitData.file);
    }

    console.log("Archivos enviados:", submitData.file);
    const { file, ...sanitizedData } = submitData;

    if (aditionalData) combinedData = { ...sanitizedData, ...aditionalData };
    else combinedData = sanitizedData;

    formatData.append(/* 'CombosData'  */ formatForm, JSON.stringify(combinedData));

    const mutationFunction = getMutationFunction(actionType);

    try {
      await mutationFunction(actionType, formatData);

      if (valueAssign && action) {
        if (Array.isArray(valueAssign)) {
          const result = valueAssign.reduce((acc, v) => {
            const key = v.replace(/^'|'$/g, '');
            acc[key] = submitData[key];
            return acc;
          }, {} as Record<string, any>);

          await action(result);
        } else {
          const key = valueAssign.replace(/^'|'$/g, '');
          await action(submitData[key]);
        }
      } else if (action) {
        await action();
      }
    } catch (error) {
      console.error("Error en el envío del formulario:", error);
    } finally {
      setLoading(false);
    }
  }

  // Dividir dataForm en páginas basadas en H1
  const pages = dataForm.reduce((acc: any[], field: any) => {
    if (field.type === "H1" || acc.length === 0) {
      acc.push([]);
    }
    acc[acc.length - 1].push(field);
    return acc;
  }, []);

  const handlePageChange = (newPage: number) => {
    // Guardar los valores actuales del formulario antes de cambiar de página
    const currentValues = getValues();
    setFormData((prevData: any) => ({ ...prevData, ...currentValues }));
    setPage(newPage);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 my-2 m-auto relative pb-16">
      {pages[page].map((field: any, key: any) => (
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

      <div className="flex justify-between mt-4">
        {page > 0 && (
          <Button color="indigo" type="button" label="Anterior" onClick={() => handlePageChange(page - 1)} />
        )}
        {page < pages.length - 1 ? (
          <Button color="indigo" type="button" label="Siguiente" onClick={() => handlePageChange(page + 1)} />
        ) : (
          <Button color="info" type="submit" label={loading ? "Loading..." : message_button} />
        )}
      </div>
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
      return <Search {...props} />;
    case "Flex":
      return <FlexComponent {...props} elements={props.cuestion.elements} />;
    case "H1":
      return <h1 className="text-2xl font-bold">{props.cuestion.label}</h1>;
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