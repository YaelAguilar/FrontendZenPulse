import Logo from "../../assets/Logozenpulse.jpg";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Inicio = () => {
 return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10 md:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <img className="h-48 w-auto mx-auto md:h-72 md:w-80" src={Logo} alt="Workflow" />
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>Discover how the ZenPulse app can help you monitor and improve your mental well-being.</p>
                <ul className="list-disc space-y-2">
                 <li>Monitor your stress symptoms in real-time.</li>
                 <li>Set up custom alerts to stay informed.</li>
                 <li>Analyze your stress patterns and set improvement goals.</li>
                </ul>
                <p>Download ZenPulse on your device and start taking control of your mental well-being. Dont wait any longer; start measuring your stress now.</p>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>Follow us on our social networks to receive updates about ZenPulse.</p>
              </div>
              <div className="flex flex-row space-x-6 md:space-x-20 mb-12 md:mb-0">
                <FaFacebook size={30} />
                <RiTwitterXFill size={30} />
                <FaInstagram size={30} />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
 );
};

export default Inicio;
