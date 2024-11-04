"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/react";

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
            <section >
                <IonButton
                    type="submit"
                    disabled={loading}
                >{loading ? "Loading..." : message_button}</IonButton>
            </section>
        </form>
    );
};

export function SwitchTypeInputRender(props: any) {
    const { type } = props.cuestion;
    switch (type) {
        case "INPUT":
            return <Input {...props} />;
        case "TEXT":
            return <Input {...props} />;
        case "EMAIL":
            return <Input {...props} />;
        case "DATE":
            return <Input {...props} />;
        case "NUMBER":
            return <Input {...props} />;
        case "SELECT":
            return <Input {...props} />;
        default:
            return <h1>{type}</h1>;
    }
}

import { useEffect } from "react";
import { IonButton } from "@ionic/react";
import { PostUserPost } from "@/services/web_site_post";

interface InputProps {
    cuestion: {
        name: string;
        placeholder: string;
        require: boolean;
        valueDefined?: string;
        props: any
    };
    register: (name: string, options: { required: string | boolean }) => any;
    setValue: (name: string, value: string) => void;
    setError: (name: string, error: {}) => void;
    errors: Record<string, { message?: string }>;
}

function Input(props: InputProps) {
    const { cuestion } = props;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        props.setError(cuestion.name, {});
        props.setValue(cuestion.name, value);
    };

    useEffect(() => {
        if (cuestion.valueDefined) {
            props.setValue(cuestion.name, cuestion.valueDefined);
        }
    }, [cuestion.valueDefined, props, cuestion.name]);

    return (
        <div>
            <input
                required={cuestion.require}
                type="text"
                onChange={handleInputChange}
                {...props.register(cuestion.props, {
                    required: cuestion.require ? "The field is required." : false,
                })}
            />
            <label>{cuestion.placeholder}</label>
            {props.errors[cuestion.name]?.message && (
                <div>
                    <span>{props.errors[cuestion.name].message}</span>
                </div>
            )}
        </div>
    );
}
