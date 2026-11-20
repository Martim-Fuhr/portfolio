import Contact from '../Contact'

export function Footer() {
  return (
    <footer className="flex align-bottom justify-center flex-col px-24">
      <div className="my-5">
        <Contact />
      </div>
      <p id="contact" className="text-sm text-center" style={{ color: 'var(--text)' }}>
        © 2026, Martim Fuhr
      </p>
    </footer>
  )
}

export default Footer
