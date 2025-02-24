import './Hook.scss';

import AnimationGif from '../../../assets/bg-animation3.gif';

const Hook = () => {
    return(
        <div className='Hook'>
            <img src={AnimationGif} alt="gif"  className='animation-gif'/>
            <div className='title-container'>
                <div className='title'>
                    Dev<br/> Full<br/> Stack.
                </div>
            </div>
            
            <div className="description-container">
                <div className="description">
                    Jeune développeur passionné de sport, de technologie
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
        </div>
    )
};

export default Hook;