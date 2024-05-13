import Contact from '../mid-site/Contact'

export function Footer() {
  return (
    <footer className="flex align-bottom justify-center flex-col px-24">
      <Contact />
      <p id="contact" className="text-sm text-center #e5e7eb">
        © 2023, Martim Fuhr
      </p>
    </footer>
  )
}

export default Footer
