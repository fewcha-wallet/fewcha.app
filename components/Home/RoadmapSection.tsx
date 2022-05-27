import React from "react";
import { ROADMAPS } from "config/constants";
import { discordURL } from "config/config";

const RoadmapItem: React.FC<{
  key: number;
  card: {
    title: string;
    date: string;
    list: string[];
    tasksLabel?: string;
    tasks?: string;
  };
}> = ({ card }) => {
  return (
    <div className="bg-white p-6 rounded-2xl flex flex-col gap-[6px] shadow">
      <p className="font-semibold text-black text-lg capitalize">
        {card.title}
      </p>
      <p className="font-medium text-gray-800 text-sm uppercase">{card.date}</p>
      {card.list.length > 0 && (
        <ul className="list-disc pl-6">
          {card.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {card.tasks && (
        <div className="mt-2 text-sm">
          <span className="font-bold">Check detail</span>{" "}
          <a
            href={card.tasks}
            className=" font-bold underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {card.tasksLabel}
          </a>
        </div>
      )}
    </div>
  );
};

const Roadmap: React.FC = () => {
  return (
    <section className="roadmap relative py-[100px]">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-center gap-6 tracking-[0.27px]">
          <h3 className="font-bold text-3xl sm:text-4xl md:text-[57px] md:leading-[80px] text-normal-400 max-w-[746px]">
            Our public roadmap
          </h3>
          <p className="text-normal-400 font-medium font-caption max-w-[615px]">
            The below view is an insight into what we're currently working on,
            what's coming up and what is planned
          </p>
          <div className="max-w-[615px] text-center mx-auto mt-2 bg-[#fffcc0] rounded-md py-4 px-6 border border-[#ff5050] bg-opacity-60">
            Please report any bugs you find or if you would like any additional
            features, at our{" "}
            <a
              href={discordURL}
              rel="noreferrer"
              target="_blank"
              className="underline"
            >
              discord
            </a>{" "}
            channels: #bugs-report and #suggestion.
            <div>
              We log{" "}
              <span className="text-red-500 font-bold">
                all your contributes
              </span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[21px] mt-[55px]">
          {ROADMAPS.map((roadmap, index) => (
            <div
              key={index}
              className="p-6 pb-20 rounded-[14px] bg-white bg-opacity-50 shadow-type-3"
            >
              <div className="font-bold text-black text-2xl">
                {roadmap.label}
              </div>
              <div className="grid gap-6 mt-6">
                {roadmap.cards.map((card, idx) => (
                  <RoadmapItem key={idx} card={card} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
