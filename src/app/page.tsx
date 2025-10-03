import { ButtonType } from "@/assets/assets";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import { projects } from "@/modules/project";
import clsx from "clsx";
import Link from "next/link";

const Home = () => {
  return (
    <main className="relative flex flex-col">
      <section className="relative h-[25rem] autoShow w-full flex flex-col">
        <Carousel projects={projects} />
        <Link href={"/projects"}>
          <Button
            type={ButtonType.primary}
            label="Check projects"
            icon="view"
            className="text-3xl! py-2! place-self-center"
          />
        </Link>
      </section>
      <section className="relative">
        <h1
          className={clsx([
            "flex flex-col text-5xl font-bold text-center text-primary-200",
            "autoShow",
          ])}
        >
          <b
            className="text-8xl font-black text-transparent font-ica drop-shadow-sm drop-shadow-primary-400/60"
            style={{
              WebkitTextStroke: "2px var(--primary-500)",
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
