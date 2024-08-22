import './index.scss'



export default function Dev(props) {

    return (

        <div className='comp-femme'>

            
            <img src= {props.img} />
            

            <div className='texto'>

                <h1>{props.h1}</h1>

                <p>{props.p}</p>
            </div>
        </div>
    )
}