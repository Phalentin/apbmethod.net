import { NotFoundPage } from 'nextra-theme-docs'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <NotFoundPage content="Submit an issue" labels="broken-link">
      <Image src="/images/not-found.svg" alt="Cube with a corner twist" height={300} width={300}/>
      <h2>This page does not seem to exist.</h2>
    </NotFoundPage>
  )
}