import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    const apiLimitCount = await getApiLimitCount();
    // const isPro = await checkSubscription();
    const isPro = false;

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0  bg-gray-900">
                <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
            </div>
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout;