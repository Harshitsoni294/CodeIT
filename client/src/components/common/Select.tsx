import { ChangeEvent } from "react"
import { PiCaretDownBold } from "react-icons/pi"

interface SelectProps {
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
    value: string
    options: string[]
    title: string
}

function Select({ onChange, value, options, title }: SelectProps) {
    return (
        <div className="relative w-full">
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">{title}</label>
            <select
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-300 outline-none transition-colors hover:border-slate-700"
                value={value}
                onChange={onChange}
            >
                {[...options].sort().map((option, i) => {
                    const value = option
                    const name =
                        option.charAt(0).toUpperCase() + option.slice(1)

                    return (
                        <option key={`${value}-${i}`} value={value} className="bg-slate-900">
                            {name}
                        </option>
                    )
                })}
            </select>
            <PiCaretDownBold
                size={14}
                className="pointer-events-none absolute bottom-3.5 right-4 z-10 text-slate-500"
            />
        </div>
    )
}

export default Select
