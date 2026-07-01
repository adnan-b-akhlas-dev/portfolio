import Navbar from "@/components/layouts/Navbar";

interface IProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: IProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
