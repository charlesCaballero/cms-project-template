import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <div>
            <Head title="Home" />

            <div>
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
