import {ProfileCard} from '@/app/component/card'
export default function Product() {
    return <div className="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <ProfileCard></ProfileCard>
        <ProfileCard></ProfileCard>
        <ProfileCard></ProfileCard>
        <ProfileCard></ProfileCard>
        <ProfileCard></ProfileCard>
    </div>
    </div>
    
}