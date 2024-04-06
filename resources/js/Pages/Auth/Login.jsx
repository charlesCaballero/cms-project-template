import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import LoginLayout from "@/Layouts/LoginLayout";
import { Input, Checkbox, Button } from "@nextui-org/react";
import { MailIcon } from "@/Icons/MailIcon";
import PasswordInput from "@/Components/PasswordInput";

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), { replace: true });
    };

    return (
        <LoginLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
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

                <div className="mt-5">
                    <PasswordInput
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                        value={data.password}
                        setValue={(val) => setData("password", val)}
                        error={errors.password}
                    />
                </div>

                <div className="block mt-4">
                    <Checkbox
                        defaultSelected
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData("remember", e.target.checked)}
                        size="sm"
                    >
                        Remember me
                    </Checkbox>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("register")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Not yet registered?
                    </Link>

                    <Button
                        className="ms-4"
                        color="primary"
                        isLoading={processing}
                        type="submit"
                    >
                        Log in
                    </Button>
                </div>
            </form>
        </LoginLayout>
    );
}
