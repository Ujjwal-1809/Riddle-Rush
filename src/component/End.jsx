import endImg from "./images/end.jpg"
import "./End.css"

export default function End(props) {
    props.endAud()

    return <div className="h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${endImg})`, backgroundSize: '100% 100vh' }}>
        <h1 className="pl-20 the_end text-8xl">The End !</h1>
    </div>
}