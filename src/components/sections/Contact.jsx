import { useState } from 'react'
import Button from '../ui/Button.jsx'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 sm:py-24">
      <div className="max-w-xl mx-auto text-center">
        <h2 id="contact-heading" className="font-serif text-3xl sm:text-4xl font-bold text-ink">
          Let&apos;s Chat!
        </h2>
        <p className="mt-4 text-ink/70">
          Got a project, a rough idea, or just want to say hi? Drop me a line.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6 text-left">
          <div>
            <label htmlFor="name" className="block text-sm uppercase tracking-wide text-ink/60 mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-ink/20 bg-white px-4 py-3 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm uppercase tracking-wide text-ink/60 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-ink/20 bg-white px-4 py-3 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm uppercase tracking-wide text-ink/60 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full border border-ink/20 bg-white px-4 py-3 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            />
          </div>
          <div className="text-center pt-2">
            <Button type="submit">Send</Button>
          </div>
          {submitted && (
            <p role="status" className="text-center text-sm text-ink/70">
              Thanks — this form isn&apos;t wired up yet, but I appreciate you trying.
            </p>
          )}
        </form>

        <p className="mt-6 text-xs text-ink/50">
          I&apos;ll only use your details to reply. No lists, no spam, ever.
        </p>
      </div>
    </section>
  )
}
