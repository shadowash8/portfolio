import LogsList from "@/app/components/logs";

export default async function LogsPage() {
    return (
        <section>
            <header className="mb-4">
                <p>
                    me experimenting on tech and writing logs about in emacs.
                </p>
            </header>
            <LogsList />
        </section>
    );
}
