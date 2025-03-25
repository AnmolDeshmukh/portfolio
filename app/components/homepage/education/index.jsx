// // @flow strict
// import { educations } from "@/utils/data/educations";
// import Image from "next/image";
// import { BsPersonWorkspace } from "react-icons/bs";
// import lottieFile from '../../../assets/lottie/study.json';
// import AnimationLottie from "../../helper/animation-lottie";
// import GlowCard from "../../helper/glow-card";

// function Education() {
//   return (
//     <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
//       <Image
//         src="/section.svg"
//         alt="Hero"
//         width={1572}
//         height={795}
//         className="absolute top-0 -z-10"
//       />
//       <div className="flex justify-center -translate-y-[1px]">
//         <div className="w-3/4">
//           <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
//         </div>
//       </div>

//       <div className="flex justify-center my-5 lg:py-8">
//         <div className="flex  items-center">
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//           <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
//             Education
//           </span>
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       <div className="py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
//           <div className="flex justify-center items-start">
//             <div className="w-3/4 h-3/4">
//               <AnimationLottie animationPath={lottieFile} />
//             </div>
//           </div>

//           <div>
//             <div className="flex flex-col gap-6">
//               {
//                 educations.map(education => (
//                   <GlowCard key={education.id} identifier={`education-${education.id}`}>
//                     <div className="p-3 relative text-white">
//                       <Image
//                         src="/blur-23.svg"
//                         alt="Hero"
//                         width={1080}
//                         height={200}
//                         className="absolute bottom-0 opacity-80"
//                       />
//                       <div className="flex justify-center">
//                         <p className="text-xs sm:text-sm text-[#16f2b3]">
//                           {education.duration}
//                         </p>
//                       </div>
//                       {/* <div className="flex justify-center">
//                         <p className="text-xs sm:text-sm text-[#16f2b3]">
//                           {education.major}
//                         </p>
//                       </div> */}
//                       <div className="flex items-center gap-x-8 px-3 py-5">
//                         <div className="text-violet-500  transition-all duration-300 hover:scale-125">
//                           <BsPersonWorkspace size={36} />
//                         </div>
//                         <div>
//                           <p className="text-base sm:text-xl mb-2 font-medium uppercase">
//                             {education.title}
//                           </p>
//                           <p className="text-sm sm:text-base">Major: {education.major}</p>
//                           <p className="text-sm sm:text-base">Institute: {education.institution}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </GlowCard>
//                 ))
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;

// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Education
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                educations.map(education => (
                  <div
                    key={education.id}
                    className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/[0.1] bg-white/[0.05] p-4 shadow-lg backdrop-blur transition-all duration-200 ease-in-out hover:scale-[1.02] hover:border-white/30 text-white"
                  >
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">Major: {education.major}</p>
                          <p className="text-sm sm:text-base">Institute: {education.institution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
