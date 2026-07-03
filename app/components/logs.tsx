import { getAllLogs } from "@/app/lib/org";
import CustomLink from '@/app/components/ui/links'

interface LogsListProps {
    limit?: number
}

export default async function LogsList({ limit }: LogsListProps) {
    const logs = await getAllLogs();
    const displayedLogs = limit ? logs.slice(0, limit) : logs;

    return (
        <div className="flex flex-col gap-6">
            {displayedLogs.map((log) => (
                <CustomLink key={log.slug} href={`/logs/${log.slug}`}>
                    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                        <span className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                            {log.date}
                        </span>
                        <span>
                            {log.title}
                        </span>
                    </div>
                </CustomLink>
            ))}
            {limit && (
                <CustomLink
                    href="/logs"
                    className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
                >
                    read more →
                </CustomLink>
            )}
        </div>
    )
}
