import React from 'react'

const SkeletonLoader = () => {
    return (
        <div className="flex flex-col animate-pulse">
            <div className="h-28 bg-gray-500"></div>
            <div className="px-4 pt-4 space-y-2 bg-gray-300">
                <div className="w-full h-5 rounded bg-gray-400"></div>
                <div className="w-full h-5 rounded bg-gray-400"></div>
                <div className='flex justify-between pb-3.5'>
                    <div className="w-2/4 h-5 rounded bg-gray-400"></div>
                    <div className="w-1/4 h-5 rounded bg-gray-400"></div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonLoader;