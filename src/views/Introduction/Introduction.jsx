'use client';

import './Introduction.scss';
import { useRouter } from 'next/navigation';

import TypingText from '../../components/TypingText/TypingText';

import { useTranslation } from "react-i18next";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Introduction = () => {
    const { t } = useTranslation();
    const router = useRouter();

    const handleClickDecouvrir = () => {
        router.push('/home');
    }

    useGSAP(() => {

        gsap.from(".top-left",
        {
            y:"200%",
            duration:1,
            delay:0
        });

        gsap.from(".top-right",
        {
            y:"-100%",
            duration:1,
            delay:0.4
        });

        gsap.from(".bottom-left",
        {
            x:"-150%",
            duration:1,
            delay:0.6
        });

        gsap.from(".bottom-right",
        {
            x:"-200%",
            duration:1,
            delay:0.2
        });

        gsap.from(".mask",
        {
            opacity:0,
            delay:1.2
        });

        gsap.from(".container-text",
        {
            opacity:0,
            y:"200px",
            delay:1.6
        })
    },[]);

    return(
        <div className='Introduction'>
            <div className='container-image'>
                <div className='top-left' />
                <div className='top-right' />
                <div className='bottom-left' />
                <div className='bottom-right' />
            </div>
            <div className='mask' />
            <div className='container-text'> 
                <span className='titre'>
                    <TypingText text="Romain Leunis" pauseTime={2500}/>
                </span>
                <span className='desc'>
                    {t("introduction")}
                </span>
                <span className='decouvrir' onClick={handleClickDecouvrir}>
                    {t("discover")}
                </span>
            </div>
        </div>
    )
};

export default Introduction;