import "./faq.css";
import pQuestion from "../images/projectQuestion.jpg";
import eQuestion from "../images/everyQuestion.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export function Faq() {
  const [showQ1, setShowQ1] = useState(false);
  const [showQ2, setShowQ2] = useState(false);
  const [showQ3, setShowQ3] = useState(false);
  const [showQ4, setShowQ4] = useState(false);
  const [showQ5, setShowQ5] = useState(false);
  const [showQ6, setShowQ6] = useState(false);
  const [showQ7, setShowQ7] = useState(false);
  const [showQ8, setShowQ8] = useState(false);
  const [showQ9, setShowQ9] = useState(false);
  const [showQ10, setShowQ10] = useState(false);

  return (
    <div className='faq'>
      <div className='faq-header'>
        <h1>
          Faq's<p>Home / Faq</p>
        </h1>
      </div>
      <h1 className='faq-title'>Every Question Answered</h1>
      <div className='e-question'>
        <div className='ep-questions'>
          <div className='ep-q'>
            <p
              className='q-title'
              onClick={() => {
                setShowQ1(!showQ1);
              }}
            >
              What services does your interior design company offer?
              <IoIosArrowForward />
            </p>

            {showQ1 ? (
              <p className='q-content'>
                We provide comprehensive interior design services, including
                residential, commercial, and retail design, space planning, 3D
                renderings, furniture selection, and project management.
              </p>
            ) : null}
          </div>
          <div className='ep-q'>
            <p
              className='q-title'
              onClick={() => {
                setShowQ2(!showQ2);
              }}
            >
              How much do your interior design services cost?
              <IoIosArrowForward />
            </p>

            {showQ2 ? (
              <p className='q-content'>
                Our pricing varies based on the scope and complexity of the
                project. We offer tailored solutions to fit different budgets
                and will provide a detailed quote after an initial consultation.
              </p>
            ) : null}
          </div>
          <div className='ep-q'>
            <p
              className='q-title'
              onClick={() => {
                setShowQ3(!showQ3);
              }}
            >
              How long does the design process take?
              <IoIosArrowForward />
            </p>

            {showQ3 ? (
              <p className='q-content'>
                The timeline depends on the size and complexity of the project.
                A typical project may take 4–12 weeks, but larger or more
                customized projects may require additional time.
              </p>
            ) : null}
          </div>
          <div className='ep-q'>
            <p
              className='q-title'
              onClick={() => {
                setShowQ4(!showQ4);
              }}
            >
              Can I see a portfolio of your previous work?
              <IoIosArrowForward />
            </p>

            {showQ4 ? (
              <p className='q-content'>
                Yes, we have a portfolio showcasing our completed projects.
                Please visit our website or schedule a meeting to see examples
                of our work.
              </p>
            ) : null}
          </div>

          <div className='ep-q'>
            <p
              className='q-title'
              onClick={() => {
                setShowQ5(!showQ5);
              }}
            >
              Do I need to be involved in the design process?
              <IoIosArrowForward />
            </p>

            {showQ5 ? (
              <p className='q-content'>
                We encourage client involvement to ensure the design reflects
                your personal style and needs. However, we can handle as much or
                as little as you prefer.
              </p>
            ) : null}
          </div>
        </div>
        <div className='ep-q-img'>
          <img src={eQuestion} alt='everyquestion'></img>
        </div>
      </div>

      <h1 className='faq-title'>Project related questions</h1>
      <div className='p-question'>
        <div className='ep-q-img'>
          <img src={pQuestion} alt='projectquestion'></img>
        </div>
        <div className='ep-questions'>
          <div className='ep-q'>
            <p
              className='q-title'
              onClick={() => {
                setShowQ6(!showQ6);
              }}
            >
              Do you handle renovations or just the design?
              <IoIosArrowForward />
            </p>

            {showQ6 ? (
              <p className='q-content'>
                We manage both renovations and interior design projects. Our
                team can oversee contractors, manage timelines, and ensure the
                project is completed smoothly.
              </p>
            ) : null}
          </div>
          <div className='ep-q'>
            <p
              className='q-title'
              onClick={() => {
                setShowQ7(!showQ7);
              }}
            >
              Can you provide a 3D rendering of the proposed design?
              <IoIosArrowForward />
            </p>

            {showQ7 ? (
              <p className='q-content'>
                Yes, we create 3D renderings to help you visualize the final
                design, making it easier to make decisions about layouts,
                materials, and finishes.
              </p>
            ) : null}
          </div>
          <div className='ep-q'>
            <p
              className='q-title'
              onClick={() => {
                setShowQ8(!showQ8);
              }}
            >
              How do I get started with your interior design services?
              <IoIosArrowForward />
            </p>

            {showQ8 ? (
              <p className='q-content'>
                Simply contact us to schedule an initial consultation. During
                the meeting, we’ll discuss your needs, preferences, and budget
                to create a tailored design plan for you.
              </p>
            ) : null}
          </div>
          <div className='ep-q'>
            <p
              className='q-title'
              onClick={() => {
                setShowQ9(!showQ9);
              }}
            >
              Do you offer customized designs based on personal preferences?
              <IoIosArrowForward />
            </p>

            {showQ9 ? (
              <p className='q-content'>
                yes, we specialize in creating personalized designs tailored to
                your specific tastes, lifestyle, and functional requirements.
              </p>
            ) : null}
          </div>

          <div className='ep-q'>
            <p
              className='q-title'
              onClick={() => {
                setShowQ10(!showQ10);
              }}
            >
              What areas do you serve?
              <IoIosArrowForward />
            </p>

            {showQ10 ? (
              <p className='q-content'>
                We primarily serve clients in Dubai, UAE, but are open to
                handling projects in other locations based on the scope and
                requirements.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
