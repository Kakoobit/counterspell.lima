import "./App.css";
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { Tilt } from "@jdion/tilt-react";
import Banner from "@hackclub/banner";

import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable } from "@dnd-kit/sortable";
import { CSS as dndCSS } from "@dnd-kit/utilities";

import faqData from "./faqData";

import billboard from "./art/billboard.png";
import title from "./art/title.png";
import bg1 from "./art/hero/bg1.png";
import bg2 from "./art/hero/bg2.png";
import bg3 from "./art/hero/bg3.png";
import bg4 from "./art/hero/bg4.png";
import bg5 from "./art/hero/bg5.png";
import breakline from "./art/breakline.png";
import sparks from "./art/sparks.gif";
import aboutbkgr from "./art/aboutbkgr.png";
import smoke from "./art/smoke.gif";

import apo1 from "./art/images/apo1.png";
import apo2 from "./art/images/apo2.png";
import apo3 from "./art/images/apo3.png";
import apo4 from "./art/images/apo4.png";
import apo5 from "./art/images/apo5.png";

import hacker from "./art/cards/hacker.png";
import musician from "./art/cards/musician.png";

import flare1 from "./art/flares/flare1.png"
import flare2 from "./art/flares/flare2.png"
import flare3 from "./art/flares/flare3.png"
import flare4 from "./art/flares/flare4.png"
import flare5 from "./art/flares/flare5.png"
import flare6 from "./art/flares/flare6.png"
import flare7 from "./art/flares/flare7.png"
import flare8 from "./art/flares/flare8.png"
import flare9 from "./art/flares/flare9.png"
import flare10 from "./art/flares/flare10.png"

export default function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <div>
      <Banner />
      <div
        class="landing"
        className="relative flex flex-col justify-center text-center bg-no-repeat bg-cover bg-top -z-10 overflow-hidden select-none pointer-events-none"
        style={{ backgroundImage: `url(${bg5})` }}
      >
        {init && (
          <Particles options={particlesOptions} className="absolute inset-0" />
        )}

        {/*<p className="text-3xl inter mb-4 mx-4">
          Hack Club's game jam for high schoolers
        </p>
        <p className="inter">November 9-10th, 2024 // in-person, worldwide</p> */}

        <HeroScroll />

        <img src={breakline} alt="" className="w-full -mt-[35%] z-10" />
      </div>

      <div className="relative">
          <img src={flare1} className="absolute -z-10" style={{width: "300px", height: "auto"}}/>
      </div>
      
      <div className="relative">
          <img src={flare2} className="absolute -z-10" style={{width: "300px", height: "auto", right: 0}}/>
      </div>

      <div className="-mt-5 sm:-mt-12 md:-mt-32 2xl:-mt-80">
        <div className="flex justify-center text-center overflow-hidden">
          <div
            className="m-5 max-w-6xl min-w-[500px] grow bg-no-repeat bg-contain bg-center py-12 sm:pt-32 lg:py-64 clear"
            style={{ backgroundImage: `url(${aboutbkgr})` }}
          >
            <div style={{}}>
              <p
                className="inter text-4xl max-w-md mx-auto bg-dark p-4 bg-opacity-80"
                style={{}}
              >
                <b class="neuebit">
                  Join other teenagers from your city at our{" "}
                  <span class="gradient-text">beginner-friendly game jam</span>{" "}
                  , where you make games in teams and win prizes!
                </b>
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src={flare3} className="absolute -z-10" style={{width: "400px", height: "auto"}}/>
        </div>
        <div className="relative">
            <img src={flare4} className="absolute -z-10" style={{width: "400px", height: "auto", right: 0}}/>
        </div>

        <div className="flex flex-col justify-center text-center m-5 my-24 neuebit">
          <p className="text-6xl">
            <span className="text-blue">Artist</span>,{" "}
            <span className="text-green">Musician</span> or{" "}
            <span className="text-pink">Hacker</span>?
          </p>
          <p className="text-6xl">
            Join one of the three guilds when you sign up!
          </p>
          <p className="text-3xl mb-8"></p>
          <Cards />
        </div>

        <div className="flex flex-col justify-center text-center mb-24 neuebit">
          <div className="m-5">
            <p className="text-6xl">How to play:</p>
            <div className="flex justify-center mx-4 my-6">
              <div className="border-4 rounded-lg border-lightpurp flex flex-wrap items-center justify-center inter py-8 grow">
                <div className="bg-darkpurp rounded-lg my-4 py-5 mx-3">
                  <div className="justify-center items-center flex flex-col ">
                    <img
                      src={apo1}
                      className="justify-center items-center flex flex-col mb-6"
                      style={{
                        width: "200px",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  <p className="my-2 mx-5 max-w-44">
                    1. Sign up for a Counterspell Event in your city
                  </p>
                </div>
                <div className="bg-darkpurp rounded-lg my-4 py-5 mx-3">
                  <div className="justify-center items-center flex flex-col ">
                    <img
                      src={apo2}
                      className="justify-center items-center flex flex-col mb-6"
                      style={{
                        width: "200px",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  <p className="my-2 mx-5 max-w-44">
                    2. Find a team of other teenagers at Counterspell
                  </p>
                </div>
                <div className="bg-darkpurp rounded-lg my-4 py-5 mx-3">
                  <div className="justify-center items-center flex flex-col ">
                    <img
                      src={apo3}
                      className="justify-center items-center flex flex-col mb-6"
                      style={{
                        width: "200px",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  <p className="my-2 mx-5 max-w-44">
                    3. Start building your game (no experience needed)
                  </p>
                </div>
                <div className="bg-darkpurp rounded-lg my-4 py-5 mx-3">
                  <div className="justify-center items-center flex flex-col ">
                    <img
                      src={apo5}
                      className="justify-center items-center flex flex-col mb-6"
                      style={{
                        width: "200px",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  <p className="my-2 mx-5 max-w-44">
                    4. Attend workshops, or talk to one of our mentors for help
                  </p>
                </div>

                <div className="bg-darkpurp rounded-lg my-4 py-5 mx-3">
                  <div className="justify-center items-center flex flex-col ">
                    <img
                      src={apo4}
                      className="justify-center items-center flex flex-col mb-6"
                      style={{
                        width: "200px",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  <p className="my-2 mx-5 max-w-44">
                    5. Ship what you made and share it with the rest of the
                    world!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="relative">
          <img src={flare9} className="absolute -z-10" style={{width: "400px", height: "auto"}}/>
        </div>

        <div className="relative">
          <img src={flare10} className="absolute -z-10" style={{width: "400px", height: "auto", right: 0}}/>
        </div>

        <div className="flex flex-col justify-center text-center m-5 my-24 neuebit">
          <p className="text-6xl">
            Want to <span className="text-blue">organize Counterspell</span> in
            your city?
          </p>
          <p className="text-6xl">
            <a className="bg-pink p-2 px-6 rounded-lg" href="#">
              Start here!
            </a>
          </p>
        </div>

        <div
          class="faq"
          className="flex flex-col justify-center text-center neuebit"
        >
          <div className="m-5">
            <p className="mb-6 text-6xl">Frequently Asked Questions</p>
            <div class="flex justify-center">
              <Faq />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-6 bg-darkpurp text-lg">
        <div className="flex justify-center items-center ">
          <a href="https://hackclub.com" className="mx-4">
            Hack Club
          </a>{" "}
          |{" "}
          <a href="https://hackclub.com/slack/" className="mx-4">
            Slack
          </a>{" "}
          |{" "}
          <a href="https://www.instagram.com/starthackclub/" className="mx-4">
            Instagram
          </a>
        </div>
        <div className="right-2">
          <a href="https://www.instagram.com/aeralixe/?hl=en">
            Art by Elena Baskakova (18, Boston)
          </a>
        </div>
      </div>
    </div>
  );
}

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <Tilt className="m-4">
        <div>
          <img
            src={hacker}
            className="rounded-lg"
            style={{
              width: "340px",
              height: "500px",
            }}
          />
        </div>
      </Tilt>
      <Tilt className="m-4">
        <div>
          <img
            src={musician}
            className="rounded-lg"
            style={{
              width: "340px",
              height: "500px",
            }}
          />
        </div>
      </Tilt>
      <Tilt
        className="bg-lightpurp rounded-lg p-5 m-4"
        style={{ width: "340px", height: "500px" }}
      ></Tilt>
    </div>
  );
};

const FaqCard = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: dndCSS.Transform.toString(transform),
    transition,
  };

  const faqItem = faqData[props.id - 1];

  return (
    <div className="bg-darkpurp rounded-lg p-5" ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <p className="mb-2 text-xl">{faqItem.question}</p>
      <p dangerouslySetInnerHTML={{__html: faqItem.answer}}></p>
    </div>
  );
};

function Faq() {
  const numFaq = faqData.length;
  const faqIds = Array.from({ length: numFaq }, (_, i) => i + 1);
  const [faqItems, setFaqItems] = useState(faqIds);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  return (
    <div className="p-5 gap-8 inter grid lg:grid-cols-2 max-w-xl lg:max-w-6xl grow grid-rows-8 lg:grid-rows-4">
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
      >        
        <SortableContext 
          items={faqItems}
        >
          {faqItems.map(id => <FaqCard id={id} key={id}/>)}
        </SortableContext>
      </DndContext>
    </div>
  );

  function handleDragEnd(event) {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      setFaqItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}

const HeroScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  return (
    <>
      <div className="flex justify-center">
        <div
          className="max-w-2xl 2xl:max-w-6xl relative w-full"
          style={{
            transform: `translateY(${
              screenWidth > 640 ? (scrollY * 5) / 20 : 0
            }px)`,
          }}
        >
          <img
            src={billboard}
            alt="Billboard"
            className="w-full h-auto mt-[5%]"
          />
          <img
            src={title}
            alt="Counterspell"
            className="absolute h-auto top-[10%] w-full scale-[85%]"
          />
          <img
            src={smoke}
            alt="Smoke"
            className="absolute h-auto top-[2%] w-full scale-[110%] -translate-x-[1.1%]"
          />
          <img
            src={sparks}
            alt="Sparks"
            className="absolute z-10 h-auto top-[5%] w-full scale-[110%]"
          />
          <div className="flex justify-center text-center">
            <div className="z-50 absolute top-[55%] text-6xl ">
              <p class="gradient-text neuebit">
                NOVEMBER 9-10 | IN-PERSON, WORLDWIDE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="translate-y-[35vw] md:translate-y-[200px] translate-x-[50vw] 2xl:translate-x-[120vw] scale-[300%] md:scale-[250%] 2xl:scale-[350%] -z-50">
        <img
          className="absolute bottom-0 bg-no-repeat -z-10 -mb-[60px] 2xl:-mb-[20px]"
          style={{
            transform: `translateY(${
              screenWidth > 640 ? (scrollY * 1) / 20 : 0
            }px)`,
          }}
          src={bg1}
          alt=""
        />
        <img
          className="absolute bottom-0 -z-20 -mb-[45px] 2xl:-mb-[10px]"
          style={{
            transform: `translateY(${
              screenWidth > 640 ? (scrollY * 2) / 20 : 0
            }px)`,
          }}
          src={bg2}
          alt=""
        />
        <img
          className="absolute bottom-0 -z-30 -mb-[25px] 2xl:mb-0 2xl:bottom-[10px]"
          style={{
            transform: `translateY(${
              screenWidth > 640 ? (scrollY * 3) / 20 : 0
            }px)`,
          }}
          src={bg3}
          alt=""
        />
        <img
          className="absolute bottom-0 -z-40 2xl:bottom-[40px]"
          style={{
            transform: `translateY(${
              screenWidth > 640 ? (scrollY * 4) / 20 : 0
            }px)`,
          }}
          src={bg4}
          alt=""
        />
      </div>
    </>
  );
};
