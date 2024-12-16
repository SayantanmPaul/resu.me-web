import BrandLogo from "@/components/ui/common/BrandLogo";

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen flex items-center justify-center bg-primary">
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-row gap-2 items-center">
            <span className="w-6 h-6">
              <BrandLogo />
            </span>
            <h1 className="text-white font-bold font-brand text-xl tracking-normal">
              Resu.me
            </h1>
          </div>
          <h3 className="text-white font-brand lg:text-4xl text-2xl font-bold antialiased tracking-normal">
            Create your most <br />
            meaningful work profile.
          </h3>
        </div>
      </div>
    </main>
  );
}
