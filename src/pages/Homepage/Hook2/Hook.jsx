import './Hook.scss';

import AnimationGif from '../../../assets/bg-animation3.gif';


const Hook = () => {
    return(
        <div className='Hook'>
            {/*<div className="left">
                <span className="name">
                    Romain Leunis
                </span>
                
            </div>*/}
            <img src={AnimationGif} alt="gif"  className='animation-gif'/>
            <div className='title'>
                Dev Full Stack.
            </div>
            
            <div className="description">
                Jeune développeur possionné de sport, de technologie
                et d’entreprenariat. Je suis ouvert à de nouvelles
                opportunités.

                <div className="buttons">
                    <div className="button-contact" >
                        Me contacter
                    </div>
                    <div className="button-projects" >
                        Mes projets
                    </div>
                </div>
                
            </div>
            
        </div>
    )
};

export default Hook;