import { useState, useEffect } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState("white"); // Početna boja kursora

  // Prati kretanje miša
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Kursor */}
      <div
        className="fixed w-10 h-10 rounded-full pointer-events-none transition-colors duration-300"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          backgroundColor: cursorColor,
          position: "fixed",
          mixBlendMode: "difference", // Pravi cool efekat boja
          zIndex: 50,
        }}
      ></div>

      {/* Glavni sadržaj */}
      <main className="mx-auto w-[1440px] relative">
        {/* Crna pozadina */}
        <div
          className="bg-zinc-950 flex justify-center mx-auto w-full fixed top-0 left-0 h-screen -z-10"
          onMouseEnter={() => setCursorColor("white")} // Beli kursor na crnom
        >
          <div
            className="h-[500px] mt-28 w-[500px] bg-pink-300 flex justify-center items-center"
            onMouseEnter={() => setCursorColor("black")} // Crni kursor na pink
            onMouseLeave={() => setCursorColor("white")}
          >
            <h1 className="text-black text-[50px]">Milo</h1>
          </div>
        </div>

        {/* Bele sekcije */}
        <section
          className="flex h-screen flex-col justify-center items-center bg-white"
          onMouseEnter={() => setCursorColor("black")} // Crni kursor na belom
          onMouseLeave={() => setCursorColor("white")}
        >
          <h1 className="text-black text-[150px]">Lala0</h1>
        </section>

        <section
          className="flex h-screen flex-col justify-center items-center bg-gray-300"
          onMouseEnter={() => setCursorColor("black")}
          onMouseLeave={() => setCursorColor("white")}
        >
          <h1 className="text-black text-[150px]">Lala</h1>
        </section>

        <section
          className="flex h-screen flex-col justify-center items-center bg-blue-300"
          onMouseEnter={() => setCursorColor("black")}
          onMouseLeave={() => setCursorColor("white")}
        >
          <h1 className="text-black text-[150px]">Lala2</h1>
        </section>
      </main>
    </>
  );
}

export default CustomCursor;
