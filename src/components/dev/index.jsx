import './index.scss'



export default function Dev(props) {

    return (

        <div className='dev-femme'>

            <div className='imagem'>
                <img src= {props} />
            </div>

            <div className='texto'>

                <h1>{props}</h1>

                <p></p>
            </div>
        </div>
    )
}