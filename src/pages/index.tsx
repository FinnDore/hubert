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
        </div>
    );
};

export default Home;
