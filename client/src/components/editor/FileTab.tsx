import { useFileSystem } from "@/context/FileContext"
import { getIconClassName } from "@/utils/getIconClassName"
import { Icon } from "@iconify/react"
import { IoClose } from "react-icons/io5"
import cn from "classnames"
import { useEffect, useRef } from "react"
import customMapping from "@/utils/customMapping"
import { useSettings } from "@/context/SettingContext"
import langMap from "lang-map"

function FileTab() {
    const {
        openFiles,
        closeFile,
        activeFile,
        updateFileContent,
        setActiveFile,
    } = useFileSystem()
    const fileTabRef = useRef<HTMLDivElement>(null)
    const { setLanguage } = useSettings()

    const changeActiveFile = (fileId: string) => {
        // If the file is already active, do nothing
        if (activeFile?.id === fileId) return

        updateFileContent(activeFile?.id || "", activeFile?.content || "")

        const file = openFiles.find((file) => file.id === fileId)
        if (file) {
            setActiveFile(file)
        }
    }

    useEffect(() => {
        const fileTabNode = fileTabRef.current
        if (!fileTabNode) return

        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY > 0) {
                fileTabNode.scrollLeft += 100
            } else {
                fileTabNode.scrollLeft -= 100
            }
        }

        fileTabNode.addEventListener("wheel", handleWheel)

        return () => {
            fileTabNode.removeEventListener("wheel", handleWheel)
        }
    }, [])

    // Update the editor language when a file is opened
    useEffect(() => {
        if (activeFile?.name === undefined) return
        // Get file extension on file open and set language when file is opened
        const extension = activeFile.name.split(".").pop()
        if (!extension) return

        // Check if custom mapping exists
        if (customMapping[extension]) {
            setLanguage(customMapping[extension])
            return
        }

        const language = langMap.languages(extension)
        setLanguage(language[0])
    }, [activeFile?.name, setLanguage])

    return (
        <div
            className="flex h-[50px] w-full select-none gap-1 overflow-x-auto border-b border-slate-800 bg-slate-950 px-2 pt-2"
            ref={fileTabRef}
        >
            {openFiles.map((file) => (
                <span
                    key={file.id}
                    className={cn(
                        "flex w-fit cursor-pointer items-center gap-2 rounded-t-lg border-t border-l border-r px-3 py-2 text-sm transition-colors",
                        { 
                            "border-slate-700 bg-slate-900 text-white": file.id === activeFile?.id,
                            "border-transparent bg-transparent text-slate-500 hover:bg-slate-900/50 hover:text-slate-300": file.id !== activeFile?.id
                        },
                    )}
                    onClick={() => changeActiveFile(file.id)}
                >
                    <Icon
                        icon={getIconClassName(file.name)}
                        fontSize={18}
                        className="min-w-fit"
                    />
                    <p
                        className="max-w-[150px] flex-grow cursor-pointer overflow-hidden truncate"
                        title={file.name}
                    >
                        {file.name}
                    </p>
                    <IoClose
                        className="ml-1 rounded hover:bg-slate-800"
                        size={16}
                        onClick={() => closeFile(file.id)}
                    />
                </span>
            ))}
        </div>
    )
}

export default FileTab
