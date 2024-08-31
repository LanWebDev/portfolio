import { gridItems } from "@/data/constants";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20 ">
        {gridItems.map((item, i) => (
          <BentoGridItem
            key={i}
            id={item.id}
            titleClassName={item.titleClassName}
            img={item.img}
            spareImg={item.spareImg}
            imgClassName={item.imgClassName}
            title={item.title}
            description={item.description}
            className={i === 0 || i === 3 || i === 4 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
