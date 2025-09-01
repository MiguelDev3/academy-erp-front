import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  createColumnHelper,
} from "@tanstack/react-table";
import { HamburgerButton } from "../../components/ui/HamburgerButton";
import { Sidebar } from "../../components/ui/sidebar";
import { useState } from "react";

const defaultData = [
  {
    _id: 1,
    name: "Ligero",
    hoursPerWeeK: 2,
    cost: 150.0,
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("_id", {
    header: (info) => "ID",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("name", {
    header: () => "Nombre",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("hoursPerWeeK", {
    header: () => "Horas/semana",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id
  }),
  columnHelper.accessor("cost", {
    header: () => "Costo",
    cell: (info) => `S/ ${info.getValue()}`,
    footer: (info) => info.column.id
  })
];
export const Plans = ({ menuClosed, toggleMenu }) => {
  const [data, _setData] = useState([...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <Sidebar menuClosed={menuClosed} toggleMenu={toggleMenu} />
      <HamburgerButton menuClosed={menuClosed} toggleMenu={toggleMenu} />
      <main className="min-h-dvh bg-gray-200 px-3 pb-3 font-roboto flex flex-col gap-3 ">
        <h1 className="pt-3 font-bold text-3xl">Planes</h1>
        <section className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-full h-auto rounded-2xl bg-white [box-shadow:var(--shadow)]">
          <div className="w-full border-b border-gray-300">
            <h2 className="py-3 ps-3 font-medium text-sm">Vista general</h2>
          </div>
          <div className="w-full p-3">
            <table>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                {table.getFooterGroups().map((footerGroup) => (
                  <tr key={footerGroup.id}>
                    {footerGroup.headers.map((header) => (
                      <th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.footer,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </tfoot>
            </table>
          </div>
          <div className="w-full border-t border-gray-300 p-1 flex justify-end">
            <button className="p-2 bg-green-700 text-white">+ Agregar plan</button>
          </div>
        </section>
      </main>
    </>
  );
};
