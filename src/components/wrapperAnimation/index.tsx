import { onMount } from "solid-js"
import Lenis from "@studio-freight/lenis";

export function WrapperAnimation (props : any) {
    onMount(() => {

        // for lenis
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // background stars
        const generateStart = (n: number) => {
            let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(
            Math.random() * 2000
            )}px rgba(165, 190, 195, ${Math.random().toFixed(1)})`;

            for (let i = 0; i <= n; i++) {
            value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(
                Math.random() * 2000
            )}px rgba(184, 174, 131, ${Math.random().toFixed(1)})`;
            }

            return value;
        };
        let starsElement1 = document.getElementById("stars");
        let starsElement2 = document.getElementById("stars2");
        starsElement1!.style.boxShadow = generateStart(300);
        starsElement2!.style.boxShadow = generateStart(200);
    }) 

    return (
        <>
            <div id="stars"></div>
            <div id="stars2"></div>
            {props.children}
        </>
    )
}

