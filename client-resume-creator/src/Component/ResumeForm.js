import React from 'react'
import { useNavigate } from 'react-router-dom'

const ResumeForm = () => {
  const navigate = useNavigate()
  const NavigateToPersonalDetail = () => {
    navigate('/PersonalDetail')
  }
  const NavigateToEducation = () => {
    navigate('/Education')
  }
  const NavigateToExperience = () => {
    navigate('/Experience')
  }
  const NavigateToSkill = () => {
    navigate('/Skill')
  }
  const NavigateToObjective = () => {
    navigate('/Objective')
  }
  const NavigateToProject = () => {
    navigate('/Project')
  }
  const NavigateToAchievement = () => {
    navigate('/Achievement')
  }
  const NavigateToActivity = () => {
    navigate('/Activity')
  }
  const NavigateToInterest = () => {
    navigate('/Interest')
  }
  const NavigateToPublication = () => {
    navigate('/Publication')
  }
  const NavigateToLanguages = () => {
    navigate('/Languages')
  }
  const NavigateToAdditionalInfo = () => {
    navigate('/AdditionalInfo')
  }

  const HandleNaviagteToTemplateExamplePage = () => {
    navigate('/TempletExample')
  }

  return (
    <div className='container mb-4  text-center mt-4'>
      <button type="button" class=" mb-4 btnView  btn-success" onClick={HandleNaviagteToTemplateExamplePage}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
        </svg> View
      </button>
      <div className="row gap-3">
        <div onClick={NavigateToPersonalDetail} className=" box col-md-3 border border-primary ">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class=" mt-2 bi bi-file-earmark-person-fill " viewBox="0 0 16 16">
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
          </svg>
          <h5 className='font-monospace text-center'> Personal Detail</h5>
        </div>
        <div className="  box col-md-3 border border-primary" onClick={NavigateToEducation}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" fill="currentColor" class=" mt-2 bi bi-mortarboard-fill" viewBox="0 0 16 16">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
          </svg>
          <h5 className='font-monospace'> Education</h5>
        </div>
        <div className=" box col-md-3 border border-primary" onClick={NavigateToExperience}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="mt-2 bi bi-person-workspace" viewBox="0 0 16 16">
            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
          </svg>
          <h5 className='font-monospace'> Experience</h5>
        </div>
        <div className=" box col-md-3 border border-primary" onClick={NavigateToSkill}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class=" mt-2 bi bi-shield-shaded" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 14.933a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
          </svg>
          <h5 className='font-monospace'> Skill</h5>
        </div>
        <div className=" box col-md-3 border border-primary" onClick={NavigateToObjective}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class=" mt-2 bi bi-bookmarks-fill" viewBox="0 0 16 16">
            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5z" />
            <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1z" />
          </svg>
          <h5 className='font-monospace'> Objective</h5>
        </div>
        <div className=" box col-md-3 border border-primary " onClick={NavigateToProject}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class=" mt-2 bi bi-card-checklist" viewBox="0 0 16 16">
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
          </svg>
          <h5 className='font-monospace'> project</h5>
        </div>
        <div className=" box col-md-3 border border-primary" onClick={NavigateToAchievement}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class=" mt-2 bi bi-award-fill" viewBox="0 0 16 16">
            <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
          </svg>
          <h5 className='font-monospace'> Achievement & Award</h5>
        </div>
        {/* <div className=" box col-md-3 border border-primary" onClick={NavigateToActivity} >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class=" mt-2 bi bi-bar-chart-steps" viewBox="0 0 16 16">
            <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0M2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" />
          </svg>
          <h5 className='font-monospace' > Activities</h5>
        </div> */}
        {/* <div className="box col-md-3 border border-primary" onClick={NavigateToInterest}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class=" mt-2 bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
            <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
          </svg>
          <h5 className='font-monospace'> Interests</h5>
        </div> */}
        {/* <div className=" box col-md-3 border border-primary" onClick={NavigateToPublication}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class=" my-2 bi bi-back" viewBox="0 0 16 16">
            <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
          </svg>
          <h5 className='font-monospace'> Publication</h5>
        </div> */}
        <div className=" box col-md-3 border border-primary" onClick={NavigateToLanguages}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class=" mt-2 bi bi-caret-right-square-fill" viewBox="0 0 16 16">
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z" />
          </svg>
          <h5 className='font-monospace'> Languages</h5>
        </div>
        <div className=" box col-md-3 border border-primary" onClick={NavigateToAdditionalInfo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class=" mt-2 bi bi-plus-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
          </svg>
          <h5 className='font-monospace'> Additional Information</h5>
        </div>

      </div>
    </div>

  )
}

export default ResumeForm
