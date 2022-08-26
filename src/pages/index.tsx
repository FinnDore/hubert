import type { NextPage } from 'next';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const hubertSays = ['I like burgers', 'got games on your phone?', 'Helno', 'Helo', 'la baguette dans la sac', 'Por quê', 'como estas'];
const Home: NextPage = () => {
    const [hubertActuallySays, setHubertActuallySays] = useState('');
    useEffect(() => {
        setHubertActuallySays(hubertSays[Math.floor(Math.random() * hubertSays.length)] ?? 'hubert');

        return () => {
            setHubertActuallySays('');
        };
    }, []);

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <div className="🐡 text-zinc-100 z-10 w-max max-w-full text-5xl md:text-6xl max-w-screen">{hubertActuallySays}</div>
            <Image src="/hubert.jpeg" alt="Hubert" layout="fill"></Image>
            <a href="https://github.com/finndore/hubert" className="py-4 px-4 flex z-10 bottom-0 right-0 absolute            ">
                {' '}
                <Image src="/github-light.png" alt="github" layout="fixed" height={20} width={20}></Image>
            </a>
        </div>
    );
};

export default Home;
