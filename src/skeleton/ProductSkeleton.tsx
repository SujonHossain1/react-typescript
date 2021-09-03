import Skeleton from 'react-loading-skeleton';

const ProductSkeleton = () => {
    return (
        <div className="col-md-3">
            <Skeleton
                style={{
                    borderRadius: '10px',
                    border: '10px solid #fff',
                }}
                height={320}
            />
        </div>
    );
};

export default ProductSkeleton;
