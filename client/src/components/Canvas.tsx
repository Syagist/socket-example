import '../styles/canvas.scss'
import {observer} from "mobx-react-lite";
import {useEffect, useRef} from "react";
import canvasState from "../store/canvasState.ts";

const Canvas = observer(() => {
    const canvasRef = useRef<HTMLCanvasElement>(null); // Specify the correct type for canvasRef

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
    }, []);

    return (
        <div className='canvas'>
            <canvas ref={canvasRef} width={600} height={400}></canvas>
        </div>
    );
});

export default Canvas;