import Image from "next/image"

export const NextImage = ({ Src, FetchLoading, Loading, Alt, Width, Height, ClassName, ...props }) => {
    return (
        <Image src={Src} alt={Alt} unoptimized={true} fetchPriority={FetchLoading} loading={Loading} width={Width} height={Height} quality={100} className={ClassName} />
    )
}