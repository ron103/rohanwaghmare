import React from "react";
import SectionTitle from "../../components/SectionTitle";
import pic1 from "../../components/logos/ro3.jpeg";



function Certifications() {


  return (
    <div>
      <SectionTitle title="Certifications & Publications" />
      <div className="flex w-full gap-10 items-center sm:flex-col">
        
        <div className="about-text-2 flex flex-col gap-5" id="outer-div">
        <h1 className="section-title text-xl text-fourth ">Certifications</h1>
          <p className="text-fifth">
            <i class="ri-play-line"></i>
            <a href="https://www.udemy.com/certificate/UC-ad27cfcc-e9cc-4792-abc0-069fca1b4ba6/">
        The Complete Data Structures and Algorithms Course in Python
        </a>
          </p>
          <p className="text-fifth">
            <i class="ri-play-line"></i>
            <a href="https://learn.nvidia.com/certificates?id=a7931b4a16fe4a24a2a21640266366aa">
        Fundamentals of Accelerated Computing with CUDA C/C++
        </a>
          </p>
          <p className="text-fifth">
            <i class="ri-play-line"></i>
            <a href="https://www.coursera.org/account/accomplishments/certificate/JU4WVJRWG88S">
        Capstone: Retrieving, Processing, and Visualizing
Data with Python
        </a>
          </p>
          <p className="text-fifth">
            <i class="ri-play-line"></i>
            <a href="https://www.coursera.org/account/accomplishments/certificate/DZ8LJNT6AJTH">
        Using Databases with Python
            </a>
          </p>
          <p className="text-fifth">
            <i class="ri-play-line"></i>
            <a href="https://www.coursera.org/account/accomplishments/certificate/B9TZ8LSPNCM5">
          Using Python to Access Web Data
        </a>
          </p>
          <p className="text-fifth">
            <i class="ri-play-line"></i>
            <a href="https://www.coursera.org/account/accomplishments/verify/MXAKFM8SWMK3">
        Python Data Structures
        </a>
          </p>

          <p className="text-fifth">
            <i class="ri-play-line"></i>
            <a href="https://www.coursera.org/account/accomplishments/verify/9SQMCGKPDQQH">
Programming for Everybody (Getting Started with Python)
</a>
          </p>
          <u>
          <h1 className="section-title text-xl text-fourth ">Publication</h1>
          </u>
          <p className="text-fifth">
            <i class="ri-play-line"></i>
            <a href="https://ieeexplore.ieee.org/document/10112352">
        A Comparative Study of Detection of Tuberculosis using Machine Learning & Deep Learning
      </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Certifications;
