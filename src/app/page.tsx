import { ButtonType } from "@/assets/assets";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import clsx from "clsx";
import Link from "next/link";

const Home = () => {
  return (
    <main className="relative flex flex-col">
      <section className="relative h-88 sm:h-[25rem] autoShow w-full flex flex-col">
        <Carousel />
        <Link href={"/projects"} className="flex w-full justify-center">
          <Button
            type={ButtonType.primary}
            label="Check projects"
            icon="view"
            className="self-center  sm:text-2xl! py-1! sm:py-2! place-self-center"
          />
        </Link>
      </section>
      <section className="relative my-5 sm:my-10">
        <h1
          className={clsx([
            "flex flex-col text-3xl sm:text-5xl font-bold text-center text-primary-200",
            "autoShow",
          ])}
        >
          <b
            className="text-5xl sm:text-8xl! font-black text-transparent font-ica drop-shadow-sm drop-shadow-transparent sm:drop-shadow-primary-400"
            style={{
              WebkitTextStroke: "2px var(--primary-400)",
            }}
          >
            Gilson Vicente,
          </b>
          frontend developer
        </h1>
      </section>
      <section className="grid auto-cols-auto">
        {/* Skills, sum 2 or 3 */}
        <p className=""></p>
        <p className=""></p>
        <p className=""></p>
        <p className=""></p>
      </section>
      <section>{/* Some  stuff about me, photo */}</section>
    </main>
  );
};

export default Home;
