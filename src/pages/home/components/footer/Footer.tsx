import { ItemsContent, StyledFooter, Title } from "./footer.styles"

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

const Footer = () => {

  return (
    <StyledFooter>
      <Title>Thanks!</Title>
      <ItemsContent>
        <a href="mailto: tihyo@outlook.com"><AiOutlineMail /> tihyo@outlook.com</a>
        <a target="_blank" href="https://www.linkedin.com/in/leonardo-baez-9b3a8217b/"><AiFillLinkedin /> leonardo-baez-9b3a8217b</a>
        <a target="_blank" href="https://github.com/baez-requiem"><AiFillGithub /> baez-requiem</a>
      </ItemsContent>
    </StyledFooter>
  )
}

export default Footer