import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <footer className="bg-transparent lg:px-20 sm:px-10 px-2 py-5">
      <div className="grid lg:grid-cols-12">
        <div className="col-span-5">
          <h1 className="text-[--main-color] text-xl font-extrabold p-[30px]">
            Darshil Patel
          </h1>
          <div class="flex flex-wrap dark:bg-transparent p-[30px]  border-[#A6A6A6] gap-2 rounded-xl ">
            <span class="w-8 mt-2">
              <img
                src="data:image/png;base64,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"
                alt="icon"
                class="text-4xl text-[--main-color]"
              />
            </span>
            <div class="space-y-2">
              <p class="text-xl font-semibold text-[--main-color]">Phone :</p>
              <a
                class="text-lg text-[--main-color] cursor-pointer"
                href="tel:+91 7016160435"
              >
                +91 7016160435
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-3 p-[30px]">
        <div className="flex space-x-3 pt-4">
  <a href="#" target="_blank" rel="noopener noreferrer">
    <div className="w-10 h-10 bg-black shadow-sm p-2 rounded-xl hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
      <FaInstagram className="text-pink-400 text-2xl" />
    </div>
  </a>
  <a href="https://github.com/darshil7056" target="_blank" rel="noopener noreferrer">
    <div className="w-10 h-10 bg-black p-2 rounded-xl transition-all duration-300 ease-in-out cursor-pointer">
      <FaGithub className="text-white text-2xl" />
    </div>
  </a>
  <a href="https://www.linkedin.com/in/darshilpatel7056/" target="_blank" rel="noopener noreferrer">
    <div className="w-10 h-10 bg-black p-2 rounded-xl hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
      <CiLinkedin className="text-blue-500 text-2xl" />
    </div>
  </a>
</div>

        </div>
        <div className="col-span-4">
        <div class="flex flex-wrap dark:bg-transparent p-[30px]  border-[#A6A6A6] gap-2 rounded-xl " ><span class="w-8 mt-2"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABgFBMVEUAAAD/1k//rwP/oABFWmNGWGRCVWL/rAP/rwNFWmREWWREWmT/wAdFWmREWmNEWmRFWWRFWGRFWmNEWWT/nwD/ww9FWmNFWWREWWRFWmRFWmNEVmT/00r/xRT/wQb/yyr/oABFWmRFWWNFWmRFWmREW2ZEWWT/vQj/nQD/00f/zkH/wgtFWmT/uib/yB9FWmRFWmREWmT/oABEWmREWmNEWWRFWWREWGRDWWFEV2b/oQBDWGP/jwA8PFv/zCz/yST/pwr/zDH/0kL/shv/oQD/oAD/wAb/nwBFWmT/wQb/oABFWmRFWWP/oAD/wAf/oAD/oABFWWNFW2P/0VNBWWVBWV3/oQD/0Dz/zzv/1Uz/yDX/xDL/rgP/xBL/1E//wQb/nwD/oAD/1U//zTL/wQf/zTL/1k//oABFWmT/nwD/wQb/wAb/1FD/nwBEWmX/1U7/ngD/oQD/oQD/ogD/oQD/1FH/rwX/1FD/qgb/pwD/wQf/1U//oABFWmT/0kb/sBkak09hAAAAenRSTlMA3/vf3yAQ/vb32l/956FrSkDx0oH+7cCZW1UL/vz8+e/cyIFkRi8gFPz8/Pr69+PNt6WUi4Z6TzcjHhgIBf79/fz4+PPj4NzW1syxqJ2GfnVyKh4cFhD7+/j39/b07+zr6ejl5eHPx8KwoJ+WlZOMbFpPRURCMzAqGkNmyrwAAAKuSURBVEjHrdJnVxpBGIbhJ7qL0pFeFBUUsPeusbfYa3rvvbdxH/PXMyyu4iIu5uT64BnPmZt5hwH/ZO/jtUq9eLcH6fuDoyt48hPIPj+6kqdZvBGNtysP6qfFJlaFCB1XWsyFhFhCUgjhul5Z0eiSm5MQuu4KDmprEDqIgtBNq+JWhzASg8Vw00KUJKLh2HIocyI6ZssVs0lhTgzdbRc+RrcQZRMRmist2juEKTFpLHkMISwScf/ct3DcIKwTEbp7VtwRopKkSpuvP7l3l1ZbSVKradpMu37vGbmsskxkofvT1TVfWNVYJTVaiXvmxKoonQ2mqQwLy8sLZRpcUDQFv01Cmvy6sWi6jzmpKgTbkzjzqbrkHJjv0X8IjA2vKXa7I7KjAuP9mlT8PjBNFQT21+00eGQUNM4xJa4qo4j5yd70yG7Glw6Q/pjR1JiTQtEPDJOBOpzwOchh4HXhHJeRFN2jehxOMprAqcQA2YJcU/F9kDTOkLahhhnFOVGGJ7BV9D4uLMk/J+/xKAcPlSlItp2hIadNXwW4jsOms/dZxebpGdoGVNIHyeunpLRCqqP/AO81zbjPW2Qfnv6uvsBLh16Q9lSkk3a9aaYXnzWjeZYFfiwa/46jj0P5WdwMTACqg478lGn2IWfsefwL0u+tl9V5N/IfGAcQI1VI+2QdACcVoLqwJZiDiVvfM8AIdCl69cv0oLwe5qf/wF7oXjGtJ26Up9AJwEdmII2RHgBxNqO8NQ7mn9xNRQUyzaR/DOiTYXnewgyjdnLFQfYEyN4wOYrybJ0cgbS7QimiqrKjvwWXGaDbhrxMPKbqBzp9NlzqwM1UAsXqpmBhJD9P0aQpDsKKs5OKMXzCG6bdB0utCql4WuIxZzQsV7KwNhGlwT5oQ2VscU9AURwepw3/x18m3MHlze9p7wAAAABJRU5ErkJggg==" alt="icon" class="text-4xl text-[--main-color]"/></span>
                        <div
                        class="space-y-2">
                            <p class="text-xl font-semibold text-[--main-color]">Email :</p>
                            <a class="text-gray-lite text-lg text-[--main-color] cursor-pointer"  href="mailto: darshilpatel7056@gmail.com"> darshilpatel7056@gmail.com</a>
                    </div>
                </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
