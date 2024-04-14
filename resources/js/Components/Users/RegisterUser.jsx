import { useEffect, useMemo, useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    Autocomplete,
    AutocompleteItem,
    Select,
} from "@nextui-org/react";
import { useForm } from "@inertiajs/react";
import { useTheme } from "@/ThemeProvider";
import PasswordInput from "@/Components/PasswordInput";
import { employmentStatus } from "@/utils";
import { router, usePage } from "@inertiajs/react";

export default function RegisterUser() {
    const [offices, setOffices] = useState([]);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { component } = usePage().component;
    const theme = useTheme().theme;
    const { data, setData, post, processing, errors, reset } = useForm({
        hris_id: "",
        user_id: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        position: "",
        contact_no: "",
        employment_status: "",
        office_id: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    // Get list of offices
    useEffect(() => {
        router
            .get(
                "offices/",
                { page: component },
                {
                    preserveState: true,
                    preserveScroll: true,
                    // onStart: () => {
                    //     setLoadingState("loading");
                    // },
                    // onFinish: () => {
                    //     setLoadingState("idle");
                    // },
                }
            )
            .then((res) => {
                // Access the returned data
                const offices = res.data.offices;
                // Handle the data as needed
                setOffices(offices);
            })
            .catch((err) => {
                // Handle any errors
                console.error(err);
            });
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register.admin"));
    };

    return (
        <>
            <Button onPress={onOpen} color="primary">
                Add new user
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                className={`${theme} `}
                size="3xl"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-foreground flex flex-col gap-1">
                                Add new user
                            </ModalHeader>
                            <ModalBody className="text-foreground">
                                <form onSubmit={submit}>
                                    <div className="flex gap-4">
                                        <Input
                                            name="hris_id"
                                            id="hris_id"
                                            label="HRIS ID"
                                            placeholder="Enter user's HRIS ID"
                                            variant="bordered"
                                            autoComplete="hris_id"
                                            value={data.hris_id}
                                            onChange={(e) =>
                                                setData(
                                                    "hris_id",
                                                    e.target.value
                                                )
                                            }
                                            color={
                                                !!errors.hris_id
                                                    ? "danger"
                                                    : "default"
                                            }
                                            isInvalid={!!errors.hris_id}
                                            errorMessage={errors.hris_id}
                                            classNames={{
                                                label: "text-black text-default-400 font-bold",
                                            }}
                                            isRequired
                                        />
                                        <Input
                                            name="user_id"
                                            id="user_id"
                                            label="User ID"
                                            placeholder="User's unique user ID"
                                            variant="bordered"
                                            autoComplete="user_id"
                                            value={data.user_id}
                                            onChange={(e) =>
                                                setData(
                                                    "user_id",
                                                    e.target.value
                                                )
                                            }
                                            color={
                                                !!errors.user_id
                                                    ? "danger"
                                                    : "default"
                                            }
                                            isInvalid={!!errors.user_id}
                                            errorMessage={errors.user_id}
                                            classNames={{
                                                label: "text-black text-default-400 font-bold",
                                            }}
                                            isRequired
                                        />
                                        <Autocomplete
                                            name="employment_status"
                                            id="employment_status"
                                            placeholder="What's the user's current work status"
                                            defaultItems={employmentStatus}
                                            label="Employment Status"
                                            variant="bordered"
                                            classNames={{
                                                base: "text-black font-bold",
                                            }}
                                            isClearable={false}
                                            className="min-w-72"
                                            menuTrigger="input"
                                            onInputChange={(value) => {
                                                console.log("value: " + value);
                                                setData(
                                                    "employment_status",
                                                    value
                                                );
                                            }}
                                            onKeyDown={(e) =>
                                                e.continuePropagation()
                                            } //to stop console error: console.js:213 stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.
                                            isRequired
                                            isInvalid={
                                                !!errors.employment_status
                                            }
                                            errorMessage={
                                                errors.employment_status
                                            }
                                        >
                                            {(empstat) => (
                                                <AutocompleteItem
                                                    key={empstat.value}
                                                >
                                                    {empstat.label}
                                                </AutocompleteItem>
                                            )}
                                        </Autocomplete>
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        <Input
                                            name="position"
                                            id="position"
                                            label="Position"
                                            placeholder="Please indicate the user's job title"
                                            variant="bordered"
                                            autoComplete="position"
                                            value={data.position}
                                            onChange={(e) =>
                                                setData(
                                                    "position",
                                                    e.target.value
                                                )
                                            }
                                            color={
                                                !!errors.position
                                                    ? "danger"
                                                    : "default"
                                            }
                                            isInvalid={!!errors.position}
                                            errorMessage={errors.position}
                                            classNames={{
                                                label: "text-black text-default-400 font-bold",
                                            }}
                                            isRequired
                                        />
                                        <Select
                                            variant="bordered"
                                            label="Office"
                                            placeholder="What division/section/unit is the user work?"
                                            className="max-w-xs"
                                        >
                                            {offices.map((office) => (
                                                <SelectItem
                                                    key={office.id}
                                                    value={office.id}
                                                >
                                                    {office.name}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        <Input
                                            name="first_name"
                                            id="first_name"
                                            label="First Name"
                                            placeholder="Please provide user's first name"
                                            variant="bordered"
                                            autoComplete="first_name"
                                            value={data.first_name}
                                            onChange={(e) =>
                                                setData(
                                                    "first_name",
                                                    e.target.value
                                                )
                                            }
                                            color={
                                                !!errors.first_name
                                                    ? "danger"
                                                    : "default"
                                            }
                                            isInvalid={!!errors.first_name}
                                            errorMessage={errors.first_name}
                                            classNames={{
                                                label: "text-black text-default-400 font-bold",
                                            }}
                                            isRequired
                                        />
                                        <Input
                                            name="middle_name"
                                            id="middle_name"
                                            label="Middle Name"
                                            placeholder="Enter the user's middle name"
                                            variant="bordered"
                                            autoComplete="middle_name"
                                            value={data.middle_name}
                                            onChange={(e) =>
                                                setData(
                                                    "middle_name",
                                                    e.target.value
                                                )
                                            }
                                            color={
                                                !!errors.middle_name
                                                    ? "danger"
                                                    : "default"
                                            }
                                            isInvalid={!!errors.middle_name}
                                            errorMessage={errors.middle_name}
                                            classNames={{
                                                label: "text-black text-default-400 font-bold",
                                            }}
                                        />
                                        <Input
                                            name="last_name"
                                            id="last_name"
                                            label="Last Name"
                                            placeholder="Enter the last name"
                                            variant="bordered"
                                            autoComplete="last_name"
                                            value={data.last_name}
                                            onChange={(e) =>
                                                setData(
                                                    "last_name",
                                                    e.target.value
                                                )
                                            }
                                            color={
                                                !!errors.last_name
                                                    ? "danger"
                                                    : "default"
                                            }
                                            isInvalid={!!errors.last_name}
                                            errorMessage={errors.last_name}
                                            classNames={{
                                                label: "text-black text-default-400 font-bold",
                                            }}
                                            isRequired
                                        />
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        <Input
                                            type="email"
                                            label="Email"
                                            placeholder="Please provide the user's email"
                                            name="email"
                                            id="email"
                                            variant="bordered"
                                            autoComplete="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            color={
                                                !!errors.email
                                                    ? "danger"
                                                    : "default"
                                            }
                                            isInvalid={!!errors.email}
                                            errorMessage={errors.email}
                                            classNames={{
                                                label: "text-black text-default-400 font-bold",
                                            }}
                                            isRequired
                                            className="min-w-96"
                                        />
                                        <Input
                                            label="Contact Number"
                                            placeholder="User's contact number for communication"
                                            name="contact_no"
                                            id="contact_no"
                                            variant="bordered"
                                            autoComplete="contact_no"
                                            value={data.contact_no}
                                            onChange={(e) =>
                                                setData(
                                                    "contact_no",
                                                    e.target.value
                                                )
                                            }
                                            color={
                                                !!errors.contact_no
                                                    ? "danger"
                                                    : "default"
                                            }
                                            isInvalid={!!errors.contact_no}
                                            errorMessage={errors.contact_no}
                                            classNames={{
                                                label: "text-black text-default-400 font-bold",
                                            }}
                                            isRequired
                                        />
                                    </div>

                                    <div className="flex gap-4 mt-4">
                                        <PasswordInput
                                            name="password"
                                            label="Password"
                                            value={data.password}
                                            setValue={(val) =>
                                                setData("password", val)
                                            }
                                            error={errors.password}
                                        />
                                        <PasswordInput
                                            name="password_confirmation"
                                            label="Confirm password"
                                            value={data.password_confirmation}
                                            setValue={(val) =>
                                                setData(
                                                    "password_confirmation",
                                                    val
                                                )
                                            }
                                            error={errors.password_confirmation}
                                        />
                                    </div>

                                    <div className="flex items-center justify-end mt-4">
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
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="default"
                                    variant="flat"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Register
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
