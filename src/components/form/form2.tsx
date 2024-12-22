"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IonButton } from "@ionic/react";
import { PostUserPost } from "@/services/web_site_post";
import { InputDynamic } from "../form-dynamic/input-main";
import { forwardRef, useImperativeHandle } from "react";

interface MainFormRef {
    submitForm: () => Promise<void>;
}

export const MainForm = forwardRef<MainFormRef, { message_button: string; dataForm: any; functionForm: any }>(
    ({ message_button, dataForm, functionForm }, ref) => {
        const { handleSubmit, register, setError, watch, clearErrors, setValue, formState: { errors } } = useForm();
        const [loading, setLoading] = useState(false);

        async function onSubmit(submitData: any) {
            console.log(submitData);
            const respuesta = await PostUserPost(submitData);
            return respuesta;
        }

        useImperativeHandle(ref, () => ({
            submitForm: handleSubmit(onSubmit), // Exponer `submitForm` al ref
        }));

        return (
            <form>
                {dataForm.map((field: any, index: number) => (
                    <SwitchTypeInputRender
                        key={field.id ? field.id : `title-${index}`}
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
        case "SELECT":
            return <InputDynamic {...props} />;
        case "H1":
            // Renderizar H1 sin usar el ID
            return <h1 key={`title-${props.cuestion.name}`}>{props.cuestion.name}</h1>; // Usar nombre como parte de la key
        default:
            return null; // Opcional: manejar tipos desconocidos
    }
}