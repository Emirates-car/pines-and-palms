import { Suspense } from 'react';

export default function Page() {
    return (
        <Suspense fallback={<div>Loading filters...</div>}>
            <VolkswagenParts />
        </Suspense>
    );
}
