"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IonButton } from "@ionic/react";
import { PostUserPost } from "@/services/web_site_post";
import { InputDynamic } from "../form-dynamic/input-main";

export const MainForm = ({ message_button, dataForm, functionForm }: any) => {
    const [loading, setLoading] = useState(false);
    const {
        handleSubmit,
        clearErrors,
        register,
        setError,
        watch,
        setValue,
        formState: { errors },
    } = useForm();
    async function onSubmit(submitData: any) {

        const { data } = submitData;
        const respuesta = await PostUserPost(submitData)  // functionForm(data);
        return respuesta
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {dataForm.map((field: any, index: number) => (
                <SwitchTypeInputRender
                    key={field.id ? field.id : `title-${index}`} // Usar ID si existe, sino generar uno para H1
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
};

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

