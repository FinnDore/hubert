import type { NextPage } from 'next';
import { Hubert } from '../hubert/_hubert';

const FourOhFourHubertNotFound: NextPage = () => {
    // 😞😞😞😞😞
    return <Hubert hubertNotFound={true} />;
};

export default FourOhFourHubertNotFound;
