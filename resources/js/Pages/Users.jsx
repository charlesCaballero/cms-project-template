import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Head } from "@inertiajs/react";

const Users = () => {
    return (
        <div>
            <Head title="Users" />
            <div>
                <Card>
                    <CardBody>
                        <p>Users</p>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default Users;
