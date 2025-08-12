import { Suspense } from 'react';
import VolkswagenClient from './VolkswagenClient';

export default function Page() {
    return (
        <Suspense fallback={<div>Loading filters...</div>}>
            <VolkswagenClient />
        </Suspense>
    );
}
