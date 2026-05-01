import { cn } from '@/lib/utils'

interface Column<T> {
  key: keyof T | string
  header: string
  width?: string
  render?: (row: T) => React.ReactNode
}

interface DataTableProps<T> {
  columns: Column<T>[]
  data: T[]
  striped?: boolean
  hover?: boolean
  className?: string
}

export function DataTable<T extends Record<string, unknown>>({ 
  columns, 
  data, 
  striped = true, 
  hover = true,
  className 
}: DataTableProps<T>) {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="text-left p-3 bg-[#2f665a] text-page text-[11px] font-black uppercase"
                style={{ width: col.width }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn(
                striped && rowIndex % 2 === 1 && 'bg-panel',
                hover && 'hover:bg-cream/50 transition-colors'
              )}
            >
              {columns.map((col) => (
                <td key={String(col.key)} className="p-3 border-b border-line align-middle">
                  {col.render 
                    ? col.render(row)
                    : String(row[col.key as keyof T] ?? '')
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
