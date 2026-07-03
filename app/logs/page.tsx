import LogsList from "@/app/components/logs";
import Heading from "@/app/components/ui/heading";

export default async function LogsPage() {
    return (
        <section>
            <Heading>logs</Heading>
            <LogsList />
        </section>
    );
}
