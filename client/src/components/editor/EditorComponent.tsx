import { useFileSystem } from "@/context/FileContext"
import useResponsive from "@/hooks/useResponsive"
import cn from "classnames"
import Editor from "./Editor"
import FileTab from "./FileTab"

function EditorComponent() {
    const { openFiles } = useFileSystem()
    const { minHeightReached } = useResponsive()

    if (openFiles.length <= 0) {
        return (
            <div className="flex h-full w-full items-center justify-center bg-slate-950">
                <div className="text-center">
                    <div className="mb-3 text-slate-600 text-5xl">📄</div>
                    <h1 className="text-lg font-light text-slate-400">
                        No file is currently open
                    </h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Open a file from the sidebar to start coding
                    </p>
                </div>
            </div>
        )
    }

    return (
        <main
            className={cn("flex w-full flex-col overflow-x-auto md:h-screen", {
                "h-[calc(100vh-50px)]": !minHeightReached,
                "h-full": minHeightReached,
            })}
        >
            <FileTab />
            <Editor />
        </main>
    )
}

export default EditorComponent
