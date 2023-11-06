// IMPORT STYLE
import './styles/Home.css'

// IMPORT COMPONENTS
import { TextIcon, LinkIcon, ImgFrame } from "../";
import About from '../../data/about.json';

const old = Math.abs(Math.ceil((new Date('2005-10-27 22:30') - new Date()) / (1000 * 60 * 60 * 24 * 365.25)));
import picture from '../../assets/picture.jfif';

export default function Home() {
    return (
        <section id='home'>
            <article>
                <div>
                    <h1 className='title'>Bonjour, je m'appelle Lenny</h1>
                    <p className='description'>J'ai {old} ans et je suis un développeur Junior qui aime apprendre de nouvelles technologies, faire des projets seul ou en équipe. Cela fait depuis mes 12 ans~ que j'aime développer, tout en m'amusant je fais des applications ou bien des extensions de jeu vidéo comme Minecraft. J'aimerais devenir développeur de jeux-vidéo.</p>
                </div>
                <div className='info'>
                    <TextIcon
                        type='svg'
                        size='24'
                        icon={
                            <svg viewBox="0 0 24 24" fill="none">
                                <path stroke="var(--dark-gray-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" />
                                <path stroke="var(--dark-gray-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" />
                            </svg>
                        }
                    >{About.location}</TextIcon>
                    {!About.hasJob && (<TextIcon type='css' size='24' icon='icon-pulse'>Disponible pour travailler avec ou sans alternance</TextIcon>)}
                </div>
                <div>
                    <LinkIcon
                        href={About.links.github}
                        type='svg'
                        size='32'
                        icon={
                            <svg viewBox="0 0 24 24" fill="none">
                                <path stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14.9998 22V18C15.1389 16.7473 14.7797 15.4901 13.9998 14.5C16.9998 14.5 19.9998 12.5 19.9998 9C20.0798 7.75 19.7298 6.52 18.9998 5.5C19.2798 4.35 19.2798 3.15 18.9998 2C18.9998 2 17.9998 2 15.9998 3.5C13.3598 3 10.6398 3 7.99979 3.5C5.99979 2 4.99979 2 4.99979 2C4.69979 3.15 4.69979 4.35 4.99979 5.5C4.27167 6.51588 3.91827 7.75279 3.99979 9C3.99979 12.5 6.99979 14.5 9.99979 14.5C9.60979 14.99 9.31979 15.55 9.14979 16.15C8.97979 16.75 8.92979 17.38 8.99979 18V22" />
                                <path stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 18C4.49 20 4 16 2 16"/>
                            </svg>
                        }
                    />
                    <LinkIcon
                        href={About.links.linkedind}
                        type='svg'
                        size='32'
                        icon={
                            <svg viewBox="0 0 24 24" fill="#D1D5DB">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        }
                    />
                </div>
            </article>
            <div>
                <ImgFrame img={picture} />
            </div>
        </section>
    )
}