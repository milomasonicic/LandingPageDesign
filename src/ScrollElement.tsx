import { useEffect, useRef } from "react";
import { animate, scroll } from "framer-motion";
import "tailwindcss/tailwind.css";

const Gallery = () => {
  const galleryRef = useRef(null);
  
  useEffect(() => {
    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll(".img-container");
      scroll(
        animate(".img-group", {
          transform: ["none", `translateX(-${items.length - 1}00vw)`],
        }),
        { target: galleryRef.current.querySelector(".img-group-container") }
      );
      
      scroll(animate(".progress", { scaleX: [0, 1] }), {
        target: galleryRef.current.querySelector(".img-group-container"),
      });
    }
  }, []);

  return (
    <div ref={galleryRef}>
      <article id="gallery" className="w-[98vw]">
        <header className="h-[70vh] flex justify-center items-center">
          <h2 className="text-6xl font-bold tracking-tight text-center">Lines of London</h2>
        </header>
        <section className="img-group-container h-[500vh] relative">
          <div className="sticky top-0 overflow-hidden h-screen">
            <ul className="img-group flex">
              {[1, 2, 3, 4, 5].map((num) => (
                <li key={num} className="img-container w-screen h-screen flex flex-col items-center justify-center">
                  <img src={`/photos/cityscape/${num}.jpg`} className="w-[300px] h-[400px]" alt={`#00${num}`} />
                  <h3 className="text-5xl font-bold relative bottom-8">#{num.toString().padStart(3, "0")}</h3>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <footer className="h-[70vh] flex justify-center items-center">
          <p>
            Photos by <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mattgperry" className="text-purple-600">Matt Perry</a>
          </p>
        </footer>
      </article>
      <div className="progress fixed left-0 right-0 h-[5px] bg-purple-600 bottom-[50px] scale-x-0"></div>
    </div>
  );
};

export default Gallery;
/*<article id="gallery">
    <header>
        <h2>Lines of London</h2>
    </header>
    <section class="img-group-container">
        <div>
            <ul class="img-group">
                <li class="img-container">
                    <img src="/photos/cityscape/1.jpg" />
                    <h3>#001</h3>
                </li>
                <li class="img-container">
                    <img src="/photos/cityscape/2.jpg" />
                    <h3>#002</h3>
                </li>
                <li class="img-container">
                    <img src="/photos/cityscape/3.jpg" />
                    <h3>#003</h3>
                </li>
                <li class="img-container">
                    <img src="/photos/cityscape/4.jpg" />
                    <h3>#004</h3>
                </li>
                <li class="img-container">
                    <img src="/photos/cityscape/5.jpg" />
                    <h3>#005</h3>
                </li>
            </ul>
        </div>
    </section>
    <footer>
        <p>
            Photos by
            <a target="_blank" href="https://twitter.com/mattgperry"
                >Matt Perry</a
            >
        </p>
    </footer>
</article>
<div class="progress"></div>

<script type="module">
    const { animate, scroll } = window.Motion

    const items = document.querySelectorAll(".img-container")

    // Animate gallery horizontally during vertical scroll
    scroll(
        animate(".img-group", {
            transform: ["none", `translateX(-${items.length - 1}00vw)`],
        }),
        { target: document.querySelector(".img-group-container") }
    )

    // Progress bar representing gallery scroll
    scroll(animate(".progress", { scaleX: [0, 1] }), {
        target: document.querySelector(".img-group-container"),
    })
</script>

<style>
    #gallery {
        width: 98vw;
    }

    #gallery h3 {
        font-family: "JetBrains Mono", monospace;
    }

    #gallery header,
    #gallery footer {
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img-group-container {
        height: 500vh;
        position: relative;
    }

    .img-group-container > div {
        position: sticky;
        top: 0;
        overflow: hidden;
        height: 100vh;
    }

    .img-group {
        display: flex;
    }

    .img-container {
        display: flex;
        width: 100vw;
        height: 100vh;
        flex: 0 0 auto;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    #gallery header h2 {
        font-size: 56px;
        font-weight: 700;
        letter-spacing: -3px;
        line-height: 1.2;
        text-align: center;
        margin: 0;
    }

    .img-container h3 {
        margin: 0;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: -3px;
        line-height: 1.2;
        position: relative;
        bottom: 30px;
        display: inline-block;
    }

    .img-container img {
        width: 300px;
        height: 400px;
    }

    .progress {
        position: fixed;
        left: 0;
        right: 0;
        height: 5px;
        background: #9911ff;
        bottom: 50px;
        transform: scaleX(0);
    }
</style>*/