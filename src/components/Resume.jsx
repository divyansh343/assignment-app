import React, { useState } from 'react'

const Resume = () => {
  const [data, setData] = useState(
    {
      name: "David Token",
      position: "MID ARCHITECT",
      about: "Midfor the memo's look, make sure the text is clear and easy-to-read. However, you can include your logo, company name, and a few relevant photos. Another idea is to use your brand colors to create a memo that aligns with your overall mission.",
      skills: [
        {
          id: 1,
          skill: "INTERIOR DESIGN",
          rating: 90
        },
        {
          id: 2,
          skill: "3D MODELING",
          rating: 80
        },
        {
          id: 3,
          skill: "PHOTOGRAPHY",
          rating: 60
        },
      ],
      contact: {
        mail: "hello@reallygreatsite.com",
        phone: "123-456-7890"
      },
      education: [
        {
          id: 1,
          degree: "BACHELOR OF ARCHITECTURE",
          year: 2014,
          institution: "Marcelioneli Art Academy"
        },
        {
          id: 2,
          degree: "BACHELOR OF ARCHITECTURE",
          year: 2014,
          institution: "Marcelioneli Art Academy"
        }
      ],
      languages: [
        {
          id: 1,
          language: "English",
          percentage: 70,
        },
        {
          id: 2,
          language: "English",
          percentage: 70,
        },
        {
          id: 3,
          language: "English",
          percentage: 70,
        },
      ],
      expierence: [
        {
          id: 1,
          title: "JUNIOR ASSISTANT",
          description: "Worked on marketing campaigns. Handled multiple digital accounts. Created digital marketing campaigns. Assisted the head designer.",
          year: 2018,
        },
        {
          id: 2,
          title: "JUNIOR ASSISTANT",
          description: "Worked on marketing campaigns. Handled multiple digital accounts. Created digital marketing campaigns. Assisted the head designer.",
          year: 2018,
        },
        {
          id: 3,
          title: "JUNIOR ASSISTANT",
          description: "Worked on marketing campaigns. Handled multiple digital accounts. Created digital marketing campaigns. Assisted the head designer.",
          year: 2018,
        },
      ]
    }
  )
  return (
    <div>
      <div className='mx-[10px] my-[80px] lg:mx-[200px] p-[20px] shadow'>
        <div className='grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 h-[1000px]'>
          <div className="col-span-1 bg-[#e6e6e6] border-[1px] px-[20px] pb-[20px]">

            <div className='grid place-items-center mt-[50px]'>
              <div className="avatar">
                <div className="w-32  rounded-full">
                  <img src="https://placeimg.com/192/192/people" alt='profile' />
                </div>
              </div>
            </div>

            <div>
              <div className='mt-[20px]'>
                <p className='text-col text-5xl'>{data.name}</p>
              </div>
              <div className='mt-[20px]'>
                <p className='text-col text-2xl uppercase'>{data.position}</p>
              </div>
            </div>

            <div>
              <div className='mt-[20px]'>
                <p className='text-col text-xl'>About me</p>
              </div>
              <div className='mt-[16px]'>
                <p className='text-col text-base  wr'>{data.about}</p>
              </div>
            </div>
            <div>
              {
                data.skills.map(item => (<>
                  <div className='mt-[20px]'>
                    <p className='text-col text-xl'>{item.skill}</p>
                  </div>
                  <progress className="progress progress-accent w-56" value={item.rating} max="100"></progress>
                </>))
              }


            </div>
            <div>
              <div className='mt-[20px]'>
                <p className='text-col text-xl'>CONTACTS</p>
              </div>
              <div className='mt-[20px]'>
                <p className='text-col text-sm '>{data.contact.mail} </p>
                <p className='text-col text-sm'>{data.contact.phone}</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-white ">
            <div className='mx-6'>
              <div className='mt-[20px]'>
                <p className='text-col text-xl'>EDUCATION </p>
              </div>
              {
                data.education.map(item => (<>
                  <div className='grid grid-cols-4'>
                    <div className="col-span-3 mt-4">
                      <p className='text-base text-col'>
                        {item.degree}
                      </p>
                      <p className='mt-2 text-sm'>
                        {item.institution}
                      </p>
                    </div>
                    <div className="col-span-1 mt-4 text-col">
                      <p>
                        {item.year}
                      </p>
                    </div>
                  </div>
                </>))
              }

              <div className=''>
                <div className='mt-[20px]'>
                  <p className='text-col text-xl'>Languages</p>
                </div>
                <div className='grid grid-cols-3 mt-[20px]'>
                  {
                    data.languages.map(item => (<>
                      <div className='col-span-1'><div className="radial-progress text-col" style={{ "--value": item.percentage, "--size": "6rem", "--thickness": "6px" }}>{item.language}</div></div>
                    </>))
                  }

                </div>
              </div>
              <div>
                <div className='mt-[50px]'>
                  <p className='text-col text-xl'>EXPERIENCE </p>
                </div>
                {
                  data.expierence.map(item => (<>
                    <div className='mt-[30px]'>
                      <div className='grid grid-cols-4'>
                        <div className="col-span-3 mt-4">
                          <p className='text-base text-col'>
                            {item.title}
                          </p>
                          <p className='mt-2 text-sm'>
                           {item.description}
                          </p>
                        </div>
                        <div className="col-span-1 mt-4 text-col">
                          <div className='grid place-items-end'>
                            <p>
                             {item.year}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>))
                }

              </div>
            </div>

          </div>

        </div>
      </div>
    </div >
  )
}

export default Resume