import Image from 'next/image'

export default function Loading({width, height, className}: any) {
    return (
        <>
            <div className={`w:${width} h:${height} ${className}`}>
                <div className={`rel transform-origin:top|left scale(${width / 450},${height / 450}) pointer-events:none`}>
                    <Image className="@petal3|3s|infinite translate(189,218) fixed opacity:1" priority src="/unlight/images/data/title/loading.swf/3.svg" width={70} height={65} alt="" />
                    <Image className="@petal5|3s|infinite translate(226,190) fixed opacity:1" priority src="/unlight/images/data/title/loading.swf/5.svg" width={60} height={65} alt="" />
                    <Image className="@petal7|3s|infinite translate(181,177) fixed opacity:1" priority src="/unlight/images/data/title/loading.swf/7.svg" width={63} height={54} alt="" />
                    <Image className="@petal9|3s|infinite translate(128,188) fixed opacity:1" priority src="/unlight/images/data/title/loading.swf/9.svg" width={121} height={151} alt="" />
                    <Image className="@petal11|3s|infinite translate(220,188) fixed opacity:1" priority src="/unlight/images/data/title/loading.swf/11.svg" width={122} height={135} alt="" />
                    <Image className="@petal13|3s|infinite translate(144,106) fixed opacity:1" priority src="/unlight/images/data/title/loading.swf/13.svg" width={161} height={118} alt="" />
                    <Image className="@petal15|3s|infinite translate(30,115) fixed opacity:1" priority src="/unlight/images/data/title/loading.swf/15.svg" width={145} height={279} alt="" />
                    <Image className="@petal17|3s|infinite translate(152,202) fixed opacity:1" priority src="/unlight/images/data/title/loading.swf/17.svg" width={249} height={200} alt="" />
                    <Image className="@petal19|3s|infinite translate(96,30) fixed opacity:1" priority src="/unlight/images/data/title/loading.swf/19.svg" width={280} height={226} alt="" />
                </div>
            </div>
        </>
    )
}