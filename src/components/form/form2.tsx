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
        console.log(submitData);

        const { data } = submitData
        PostUserPost(submitData).then((res) => {
            console.log("Respuesta del servidor:", res);
        });
        //functionForm(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            {dataForm.map((field: any, key: any) => (
                <SwitchTypeInputRender
                    key={key}
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
            return <InputDynamic {...props} />;
        case "TEXT":
            return <InputDynamic {...props} />;
        case "EMAIL":
            return <InputDynamic {...props} />;
        case "DATE":
            return <InputDynamic {...props} />;
        case "NUMBER":
            return <InputDynamic {...props} />;
        case "SELECT":
            return <InputDynamic {...props} />;
        default:
            return <h1>{type}</h1>;
    }
}
