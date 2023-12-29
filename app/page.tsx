import Link from 'next/link'

export default function Home() {
  return (
    <div>
      this is the home page..... 

      <Link href={'/about'}>about</Link>
    </div>
  )
}
