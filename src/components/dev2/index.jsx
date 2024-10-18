import './index.scss'

export default function Dev2(props) {

    return (

        <div className='comp-femme'>

            


            <div className='texto'>

                <h1>{props.h1}</h1>

                <p>{props.p}</p>
            </div>


            <img src={props.img} />


        </div>

    )
}