import { ClientLogo } from "./ClientLogo";

interface ClientLogosSliderProps {
  className?: string;
}

const clients = ["ixirhost", "Yazıcı Ticaret", "aaa", "bbb", "ccc"];

export function ClientLogosSlider({ className }: ClientLogosSliderProps) {
  return (
    <div className={`flex gap-6 overflow-x-auto pb-2 ${className ?? ""}`}>
      {clients.map((client) => (
        <ClientLogo key={client} name={client} />
      ))}
    </div>
  );
}
