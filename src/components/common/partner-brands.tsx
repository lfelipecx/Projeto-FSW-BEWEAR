import Image from "next/image";

interface PartnerBrandsProps {
  title: string;
}
const PartnerBrands = ({ title }: PartnerBrandsProps) => {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold">{title}</h3>
      <div className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-col items-center gap-2">
                <div className="rounded-3xl border-2 p-6">
                    <Image
                    src="/simple-icons-nike.png"
                    alt="Nike"
                    width={32}
                    height={32}
                    />
                </div>
                <span className="text-sm font-medium">Nike</span>
            </div>

            <div className="flex flex-col items-center gap-2">
                <div className="rounded-3xl border-2 p-6">
                    <Image
                    src="/simple-icons-adidas.png"
                    alt="Nike"
                    width={32}
                    height={32}
                    />
                </div>
                <span className="text-sm font-medium">Adidas</span>
            </div>

            <div className="flex flex-col items-center gap-2">
                <div className="rounded-3xl border-2 p-6">
                    <Image
                    src="/simple-icons-puma.png"
                    alt="Nike"
                    width={32}
                    height={32}
                    />
                </div>
                <span className="text-sm font-medium">Puma</span>
            </div>

            <div className="flex flex-col items-center gap-2">
                <div className="rounded-3xl border-2 p-6">
                    <Image
                    src="/simple-icons-newBalance.png"
                    alt="Nike"
                    width={32}
                    height={32}
                    />
                </div>
                <span className="text-sm font-medium truncate">New Balance</span>
            </div>

            <div className="flex flex-col items-center gap-2">
                <div className="rounded-3xl border-2 p-6">
                    <Image
                    src="/simple-icons-newBalance.png"
                    alt="Nike"
                    width={32}
                    height={32}
                    />
                </div>
                <span className="text-sm font-medium truncate">New Balance</span>
            </div>
      </div>
    </div>
  );
};

export default PartnerBrands;
