import React from "react";
import SkeletonLoader from "./SkeletonLoader";

const ProductCardSkeleton = () => {
    return (
        <div className="grid grid-cols-4 gap-3">
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
        </div>
    );
};

export default ProductCardSkeleton;
