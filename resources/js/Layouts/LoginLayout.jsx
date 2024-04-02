import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";
const asset = (path) => {
    return `/storage/images/${path}`;
};

export default function LoginLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
            <Card className="w-full sm:max-w-md px-6 py-4 bg-white overflow-hidden ">
                <CardHeader className="block gap-3">
                    <div className="flex items-center justify-center mb-5 sm:mb-2">
                        <Image
                            width={100}
                            alt="App logo"
                            src={asset("charles-logo.png")}
                        />
                    </div>
                    <h1 className="text-2xl mb-2">
                        Welcome to&nbsp;
                        <span className="text-primary-500 font-extrabold">
                            {appName}.
                        </span>
                    </h1>
                    <p className="text-sm">
                        Please login using your registered account.
                    </p>
                </CardHeader>
                <CardBody>{children}</CardBody>
            </Card>
        </div>
    );
}
