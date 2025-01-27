import { useState } from "react";
import { useForm } from "react-hook-form";
import { PostUser } from "@/services/web_site_post";
import { InputDynamic } from "../form-dynamic/input-main";
import { forwardRef, useImperativeHandle } from "react";
import { SelectDynamic } from "../form-dynamic/select-main";

interface MainFormRef {
    submitForm: () => Promise<void>;
}

export const MainForm = forwardRef<MainFormRef, { message_button: string; dataForm: any; functionForm: any }>(
    ({ message_button, dataForm, functionForm }, ref) => {
        const { handleSubmit, register, setError, watch, clearErrors, setValue, formState: { errors } } = useForm();
        const [loading, setLoading] = useState(false);

        async function onSubmit(submitData: any) {
            console.log(submitData);
            let respuesta: any;
            if (functionForm) {
                respuesta = await functionForm(submitData);
            } else {
                respuesta = await PostUser(submitData);
            }
            return respuesta;
        }

        useImperativeHandle(ref, () => ({
            submitForm: handleSubmit(onSubmit),
        }));

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                {dataForm.map((field: any, index: number) => (
                    <SwitchTypeInputRender
                        key={field.id ? field.id : `field-${index}`}
                        cuestion={field}
                        register={register}
                        watch={watch}
                        clearErrors={clearErrors}
                        setError={setError}
                        errors={errors}
                        setValue={setValue}
                    />
                ))}
            </form>
        );
    }
);

export function SwitchTypeInputRender(props: any) {
    const { type } = props.cuestion;

    switch (type) {
        case "INPUT":
        case "TEXT":
        case "EMAIL":
        case "DATE":
        case "NUMBER":
            return (
                <InputDynamic
                    {...props}
                    type={type.toLowerCase()} // Convertir a minúsculas para HTML válido
                />
            );
        case "SELECT":
            return (
                <SelectDynamic
                    {...props}
                    type="select"
                    options={props.cuestion.options || []} // Pasar opciones al componente
                />
            );
        case "archivo":
            return (
                <input type="file" {...props.register(props.cuestion.name)} />
            );
        case "H1":
            return <h1 key={`title-${props.cuestion.name}`}>{props.cuestion.name}</h1>;
        default:
            return null;
    }
}
