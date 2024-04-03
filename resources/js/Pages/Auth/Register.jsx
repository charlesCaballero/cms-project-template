import { useEffect } from "react";
import GuestLayout from "@/Layouts/LoginLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Input } from "@nextui-org/react";
import { PersonIcon } from "@/Icons/PersonIcon";
import { MailIcon } from "@/Icons/MailIcon";
import PasswordInput from "@/Components/PasswordInput";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <Input
                        name="name"
                        id="name"
                        type="name"
                        label="Name"
                        placeholder="Enter your full name"
                        variant="bordered"
                        autoComplete="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        color={!!errors.name ? "danger" : "default"}
                        isInvalid={!!errors.name}
                        errorMessage={errors.name}
                        classNames={{
                            label: "text-black dark:text-white/90 font-bold",
                            inputWrapper: "border-slate-400",
                        }}
                        startContent={<PersonIcon />}
                    />
                </div>

                <div className="mt-4">
                    <Input
                        type="email"
                        label="Email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        variant="bordered"
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        color={!!errors.email ? "danger" : "default"}
                        isInvalid={!!errors.email}
                        errorMessage={errors.email}
                        classNames={{
                            label: "text-black dark:text-white/90 font-bold",
                            inputWrapper: "border-slate-400",
                        }}
                        startContent={<MailIcon />}
                    />
                </div>

                <div className="mt-4">
                    <PasswordInput
                        name="password"
                        label="Password"
                        placeholder="Set your password"
                        value={data.password}
                        setValue={(val) => setData("password", val)}
                        error={errors.password}
                    />
                </div>

                <div className="mt-4">
                    <PasswordInput
                        name="password_confirmation"
                        label="Confirm password"
                        placeholder="Enter your password again"
                        value={data.password_confirmation}
                        setValue={(val) =>
                            setData("password_confirmation", val)
                        }
                        error={errors.password_confirmation}
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <Button
                        className="ms-4"
                        color="primary"
                        isLoading={processing}
                        type="submit"
                    >
                        Register
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
