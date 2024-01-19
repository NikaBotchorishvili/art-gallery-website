import Button from "../../commons/Button";

const Hero = () => {
	return (
		<section className="w-dvw ">
			<div className="relative flex gap-y-10 sm:flex-row flex-col w-full sm:w-[70%]  max-h-[80dvh] min-h-[60dvh]  ">
				<div className="md:flex-1 xl:block  hidden  bg-main"></div>
				<div className="md:flex-1 box-content sm:w-fit w-full ">
					<img
						className="w-full max-h-[80dvh] min-h-[60dvh] object-cover "
						srcSet="/assets/tablet/image-hero.jpg 1200w,
                        /assets/desktop/image-hero.jpg 800w,
                        /assets/mobile/image-hero.jpg 640w"
						alt=""
					/>
				</div>
				<h1 className="sm:absolute md:left-1/2 md:-translate-x-[65%] sm:top-[15%] sm:-right-[40%] text-6xl text-black sm:text-black md:text-white font-extrabold  md:mix-blend-difference min-w-xs w-max sm:ml-0 ml-5">
					MODERN <br />
					ART GALLERY
				</h1>

				<div className="sm:ml-0 sm:absolute md:top-[15%] sm:top-[40%] sm:-right-[40%]  md:-right-56 flex flex-col gap-y-5 sm:gap-y-12 ml-5">
					<p className=" tracking-wider text-xl max-w-xs">
						The arts in the collection of the Modern Art Gallery all
						started from a spark of inspiration. Will these pieces
						inspire you? Visit us and find out.
					</p>

					<Button />
				</div>
			</div>
		</section>
	);
};

export default Hero;
